import type { DropzoneOptions } from 'react-dropzone';

import { FileSelectorSizes } from './FileSelector.enums';

type CustomFileSelectorProps = {
  buttonLabel?: string;
  dropLabel?: string;
  isClickDisabled?: DropzoneOptions['noClick'];
  isDragDisabled?: DropzoneOptions['noDrag'];
  isDisabled?: DropzoneOptions['disabled'];
  hasError?: boolean;
  minFileSize?: DropzoneOptions['minSize'];
  maxFileSize?: DropzoneOptions['maxSize'];
  onFilesDrop?: DropzoneOptions['onDrop'];
  onFilesAccepted?: DropzoneOptions['onDropAccepted'];
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
      size?: typeof FileSelectorSizes.area;
      width: string | number;
      height: string | number;
    } & BaseFileSelectorProps);
