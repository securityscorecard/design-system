import type { ComponentPropsWithoutRef } from 'react';
import { type DropzoneOptions, useDropzone } from 'react-dropzone';
import cls from 'classnames';

import Button from '../ButtonV2/Button';
import { CLX_COMPONENT } from '../../theme/constants';

export type FileSelectorButtonProps = Omit<
  DropzoneOptions,
  | 'disabled'
  | 'preventDropOnDocument'
  | 'noClick'
  | 'noDrag'
  | 'noKeyboard'
  | 'noDragEventsBubbling'
  | 'getFilesFromEvent'
  | 'useFsAccessApi'
  | 'minSize'
  | 'maxSize'
  | 'onDrop'
  | 'onDropAccepted'
  | 'onDropRejected'
> & {
  /** File selector button label */
  label?: string;
  /** Expands button to full width of the parrent component */
  isExpanded?: boolean;
  /** Disables the FileSelector */
  isDisabled?: boolean;
  /** Minimal file size in bytes */
  minFileSize?: number;
  /** Maximal file size in bytes */
  maxFileSize?: number;
  /** Callback fired on file drop or select through native dialog */
  onFilesDrop?: DropzoneOptions['onDrop'];
  /** Callback fired when selected files are accepted */
  onFilesAccepted?: DropzoneOptions['onDropAccepted'];
  /** Callback fired when selected files are rejected */
  onFilesRejected?: DropzoneOptions['onDropRejected'];
};

function FileSelectorButton({
  label = 'Upload',
  isDisabled = false,
  isExpanded = false,
  multiple = false,
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
}: FileSelectorButtonProps & ComponentPropsWithoutRef<'button'>) {
  const { getRootProps, getInputProps } = useDropzone({
    disabled: isDisabled,
    noDrag: true,
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

  return (
    <div className={cls(CLX_COMPONENT, className)}>
      <input aria-label="upload file" aria-hidden {...getInputProps()} />
      <Button
        {...getRootProps({
          ...props,
          iconStart: { name: 'upload' },
          isDisabled,
          variant: 'subtle',
          isExpanded,
        })}
      >
        {label}
      </Button>
    </div>
  );
}

FileSelectorButton.displayName = 'FileSelectorButton';

export default FileSelectorButton;
