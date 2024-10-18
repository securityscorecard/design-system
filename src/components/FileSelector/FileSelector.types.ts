import type { ComponentPropsWithoutRef } from 'react';
import type { DropzoneOptions } from 'react-dropzone';

type BaseFileSelectorProps = ComponentPropsWithoutRef<'div'> &
  Omit<
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
    /**
     * Disables the FileSelector
     */
    isDisabled?: boolean;
    /**
     * Sets file selector into errorous state
     */
    hasError?: boolean;
    /**
     * Minimal file size in bytes
     */
    minFileSize?: number;
    /**
     * Maximal file size in bytes
     */
    maxFileSize?: number;
    /**
     * Callback fired on file drop or select through native dialog
     */
    onFilesDrop?: DropzoneOptions['onDrop'];
    /**
     * Callback fired when selected files are accepted
     */
    onFilesAccepted?: DropzoneOptions['onDropAccepted'];
    /**
     * Callback fired when selected files are rejected
     */
    onFilesRejected?: DropzoneOptions['onDropRejected'];
    /**
     * Text with file requirements. Availabel for `fill` and `area` sizes.
     */
    instructionsText?: string;
  };

export type FileSelectorProps =
  | ({
      size?: 'fill' | 'compact';
    } & BaseFileSelectorProps)
  | ({
      /**
       * Size variant of the FileSelector
       */
      size: 'area';
      /**
       * Width of the droping zone, takes Number in pixels or any other valid value as String.
       * Available only for 'area' size.
       */
      width: string | number;
      /**
       * Height of the droping zone, takes Number in pixels or any other valid value as String.
       * Available only for 'area' size.
       */
      height: string | number;
    } & BaseFileSelectorProps);
