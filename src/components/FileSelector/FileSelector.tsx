import type { FileSelectorProps } from './FileSelector.types';

import styled, { css } from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { omit } from 'ramda';
import cls from 'classnames';
import { forwardRef } from 'react';

import { SpaceSizes } from '../../theme/space.enums';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getRadii, pxToRem } from '../../utils';
import { Cluster, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { Text } from '../typographyLegacy';
import { TextSizes, TextVariants } from '../typographyLegacy/Text/Text.enums';
import { FileSelectorSizes } from './FileSelector.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { useLogger } from '../../hooks/useLogger';

const ExtendableButton = styled(Button)``;
const FileSelectorWrapper = styled(Padbox)`
  background-color: ${getColor('neutral.0')};
  border: 1px dashed ${getColor('neutral.500')};
  border-radius: ${getRadii('default')};

  ${({ $size, $width, $height }) => {
    if ($size === FileSelectorSizes.compact) return 'display: inline-flex;';
    if ($size === FileSelectorSizes.fill) return 'display: flex;';
    return css`
      display: flex;
      width: ${pxToRem($width)};
      height: ${pxToRem($height)};
      justify-content: center;
      align-items: center;
    `;
  }};

  ${({ $isDragActive, $isFocused }) =>
    ($isDragActive || $isFocused) &&
    css`
      border-style: solid;
      border-color: ${getColor('primary.600')};
    `};

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-style: solid;
      border-color: ${getColor('error.500')};
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background: ${getColor('neutral.300')};

      ${ExtendableButton} {
        border-color: ${getColor('neutral.500')};
      }
    `};
`;

const DropTextWrapper = styled(Padbox)`
  display: 'flex';
  align-items: 'center';
  ${({ $isCentered }) =>
    $isCentered &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

const FileSelector = forwardRef<HTMLInputElement, FileSelectorProps>(
  (
    {
      buttonLabel = 'Upload',
      dropLabel = 'or drop files here',
      isClickDisabled = false,
      isDragDisabled = false,
      isDisabled = false,
      hasError = false,
      size = FileSelectorSizes.fill,
      multiple,
      accept,
      minFileSize,
      maxFileSize,
      maxFiles,
      onFilesDrop,
      onFilesAccepted,
      onFilesRejected,
      onFileDialogCancel,
      onFileDialogOpen,
      onDragEnter,
      onDragOver,
      onDragLeave,
      validator,
      className,
      ...props
    }: FileSelectorProps,
    ref,
  ) => {
    const { error } = useLogger('FileSelector');
    const { getRootProps, getInputProps, isDragActive, isFocused } =
      useDropzone({
        disabled: isDisabled,
        noClick: isClickDisabled,
        noDrag: isDragDisabled,
        multiple,
        accept,
        minSize: minFileSize,
        maxSize: maxFileSize,
        maxFiles,
        onDrop: onFilesDrop,
        onDropAccepted: onFilesAccepted,
        onDropRejected: onFilesRejected,
        onFileDialogCancel,
        onFileDialogOpen,
        onDragEnter,
        onDragOver,
        onDragLeave,
        validator,
      });
    const sizes =
      size === FileSelectorSizes.area && 'width' in props && 'height' in props
        ? {
            width: props.width,
            height: props.height,
          }
        : {};
    const passedProps = omit(['width', 'height'], props);

    if (isClickDisabled && isDragDisabled) {
      error(
        'Either one of or both "isClickDisabled" and "isDragDisabled" properties must be set to "false".',
      );
      return null;
    }

    if (isClickDisabled) {
      return (
        <FileSelectorWrapper
          {...getRootProps({
            $isDragActive: isDragActive,
            $isFocused: isFocused,
            $hasError: hasError,
            $isDisabled: isDisabled,
            $size: size,
            $width: sizes?.width,
            $height: sizes?.height,
            paddingSize: SpaceSizes.sm,
            ...passedProps,
          })}
          className={cls(CLX_COMPONENT, className)}
        >
          <input ref={ref} {...getInputProps()} />
          <DropTextWrapper
            $isCentered={size === FileSelectorSizes.area}
            paddingSize={SpaceSizes.sm}
            paddingType={PaddingTypes.squish}
          >
            <Text
              size={TextSizes.md}
              variant={
                isDisabled ? TextVariants.secondary : TextVariants.primary
              }
            >
              {dropLabel}
            </Text>
          </DropTextWrapper>
        </FileSelectorWrapper>
      );
    }

    if (isDragDisabled) {
      return (
        <div className={cls(CLX_COMPONENT, className)}>
          <input ref={ref} {...getInputProps()} />
          <ExtendableButton
            {...getRootProps({
              ...passedProps,
              iconName: SSCIconNames.upload,
              isDisabled,
              isExpanded: size === FileSelectorSizes.fill,
              variant: ButtonVariants.outline,
              type: 'button',
            })}
          >
            {buttonLabel}
          </ExtendableButton>
        </div>
      );
    }

    return (
      <FileSelectorWrapper
        {...getRootProps({
          $isDragActive: isDragActive,
          $isFocused: isFocused,
          $hasError: hasError,
          $isDisabled: isDisabled,
          $size: size,
          $width: sizes?.width,
          $height: sizes?.height,
          paddingSize: SpaceSizes.sm,
          ...passedProps,
          role: 'presentation',
        })}
        className={cls(CLX_COMPONENT, className)}
      >
        <input ref={ref} {...getInputProps()} />
        <Cluster
          align="center"
          gap={SpaceSizes.sm}
          justify={size === FileSelectorSizes.area ? 'center' : 'flex-start'}
        >
          <div>
            <ExtendableButton
              iconName={SSCIconNames.upload}
              isDisabled={isDisabled}
              type="button"
              variant={ButtonVariants.outline}
            >
              {buttonLabel}
            </ExtendableButton>
          </div>
          <DropTextWrapper
            paddingSize={SpaceSizes.sm}
            paddingType={PaddingTypes.squish}
          >
            <Text
              size={TextSizes.md}
              variant={
                isDisabled ? TextVariants.secondary : TextVariants.primary
              }
            >
              {dropLabel}
            </Text>
          </DropTextWrapper>
        </Cluster>
      </FileSelectorWrapper>
    );
  },
);

export default FileSelector;
