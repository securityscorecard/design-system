import type { DropzoneOptions } from 'react-dropzone';

import { FileSelectorSizes } from './FileSelector.enums';

type CustomFileSelectorProps = {
  /**
   * Button label text
   */
  buttonLabel?: string;
  /**
   * Drop label text displayed after button
   */
  dropLabel?: string;
  /**
   * Hides button and disable click event so only drop files is available
   */
  isClickDisabled?: DropzoneOptions['noClick'];
  /**
   * Hide drop zone and display only button, drop event is disabled
   */
  isDragDisabled?: DropzoneOptions['noDrag'];
  /**
   * Disables the FileSelector
   */
  isDisabled?: DropzoneOptions['disabled'];
  /**
   * Change FileSelector to error state
   */
  hasError?: boolean;
  /**
   * Minimal file size in bytes
   */
  minFileSize?: DropzoneOptions['minSize'];
  /**
   * Maximal file size in bytes
   */
  maxFileSize?: DropzoneOptions['maxSize'];
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
};

type BaseFileSelectorProps = React.HTMLAttributes<HTMLDivElement> &
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
  > &
  CustomFileSelectorProps;

export type FileSelectorProps =
  | ({ size?: typeof FileSelectorSizes.compact } & BaseFileSelectorProps)
  | ({ size?: typeof FileSelectorSizes.fill } & BaseFileSelectorProps)
  | ({
      /**
       * Size variant of the FileSelector
       */
      size?: typeof FileSelectorSizes.area;
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
