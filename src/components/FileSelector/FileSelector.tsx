import styled, { css } from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { omit } from 'ramda';
import cls from 'classnames';

import { Inline, Padbox, Stack, Surface } from '../layout';
import Button from '../ButtonV2/Button';
import { Text } from '../Text';
import { FileSelectorProps } from './FileSelector.types';
import { CLX_COMPONENT } from '../../theme/constants';
import { pxToRem } from '../../utils';
import { IconWrapper } from '../IconWrapper';
import { Link } from '../Link';

const FileSelectorRoot = styled(Surface)<{
  $size: FileSelectorProps['size'];
  $width?: number | string;
  $height?: number | string;
  $isDragActive: boolean;
  $isFocused: boolean;
  $isDisabled: boolean;
  $hasError: boolean;
}>`
  border-style: dashed;

  ${({ $size, $width, $height }) => {
    if ($size === 'compact') return 'display: inline-flex; width: max-content';
    if ($size === 'fill') return 'display: flex;';
    return css`
      display: flex;
      width: ${pxToRem($width)};
      height: ${pxToRem($height)};
      justify-content: center;
      align-items: center;
    `;
  }};

  ${({ $isDragActive, $isFocused, $hasError }) =>
    ($isDragActive || $isFocused) &&
    !$hasError &&
    css`
      border: 1px solid var(--sscds-color-border-input-focused);
      box-shadow: inset 0 0 0 1px var(--sscds-color-border-input-focused);
      background-color: var(--sscds-color-background-surface-hover);
    `};

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid var(--sscds-color-border-input-error);
      box-shadow: inset 0 0 0 1px var(--sscds-color-border-input-error);
      background-color: var(--sscds-color-danger-050);
    `};

  ${({ $hasError, $isDisabled, $isDragActive, $isFocused }) =>
    !$hasError &&
    !$isDisabled &&
    !$isDragActive &&
    !$isFocused &&
    css`
      :hover {
        border: 1px solid var(--sscds-color-border-surface-hover);
        background-color: var(--sscds-color-background-surface-hover);
      }
    `};
`;

function CompactContent({
  isDisabled,
  hasError,
}: {
  isDisabled: boolean;
  hasError: boolean;
}) {
  return (
    <Inline align="center" gap="2x">
      <Button
        iconStart={{ name: 'upload' }}
        isDisabled={isDisabled}
        size="sm"
        tabIndex={-1}
      >
        Upload
      </Button>
      <Text
        style={{ paddingInlineEnd: 'var(--sscds-space-2x)' }}
        variant={isDisabled ? 'disabled' : hasError ? 'danger' : 'subtle'}
      >
        or drop files here
      </Text>
    </Inline>
  );
}

function Content({
  isDisabled,
  isDragActive,
  isFocused,
  hasError,
  instructionsText,
}: {
  isDisabled: boolean;
  isDragActive: boolean;
  isFocused: boolean;
  hasError: boolean;
  instructionsText: string;
}) {
  return (
    <>
      <IconWrapper
        name="upload"
        size="md"
        variant={(isDragActive || isFocused) && !hasError ? 'strong' : 'subtle'}
      />
      <Stack>
        <Text variant={isDisabled ? 'disabled' : 'default'} isBold>
          Drop your file here or{' '}
          <Link
            style={{
              fontWeight: 'var(--sscds-font-weight-body-strong)',
              color: isDisabled
                ? 'var(--sscds-color-text-disabled)'
                : undefined,
            }}
            tabIndex={-1}
          >
            browse files
          </Link>
          .
        </Text>
        <Text size="sm" variant="subtle">
          {instructionsText}
        </Text>
      </Stack>
    </>
  );
}

function FileSelector({
  isDisabled = false,
  hasError = false,
  size = 'fill',
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
  instructionsText = '',
  className,
  ...props
}: FileSelectorProps) {
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({
    disabled: isDisabled,
    noDrag: false,
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
    size === 'area' && 'width' in props && 'height' in props
      ? {
          width: props.width,
          height: props.height,
        }
      : {};
  const passedProps = omit(['width', 'height'], props);

  return (
    <FileSelectorRoot
      background="dynamic"
      className={cls(CLX_COMPONENT, className)}
      elevation={isFocused || isDragActive ? 2 : 0}
      radius="md"
      hasBorder
      {...getRootProps({
        $isDragActive: isDragActive,
        $isFocused: isFocused,
        $hasError: hasError,
        $isDisabled: isDisabled,
        $size: size,
        $width: sizes?.width,
        $height: sizes?.height,
        ...passedProps,
        role: 'presentation',
      })}
    >
      <Padbox
        paddingSize={size === 'compact' ? '2x' : size === 'fill' ? '4x' : '6x'}
      >
        <input aria-label="upload file" {...getInputProps()} />
        {size === 'compact' ? (
          <CompactContent hasError={hasError} isDisabled={isDisabled} />
        ) : size === 'fill' ? (
          <Inline align="center" gap="4x">
            <Content
              hasError={hasError}
              instructionsText={instructionsText}
              isDisabled={isDisabled}
              isDragActive={isDragActive}
              isFocused={isFocused}
            />
          </Inline>
        ) : (
          <Stack gap="4x" justify="center">
            <Content
              hasError={hasError}
              instructionsText={instructionsText}
              isDisabled={isDisabled}
              isDragActive={isDragActive}
              isFocused={isFocused}
            />
          </Stack>
        )}
      </Padbox>
    </FileSelectorRoot>
  );
}

FileSelector.displayName = 'FileSelector';

export default FileSelector;
