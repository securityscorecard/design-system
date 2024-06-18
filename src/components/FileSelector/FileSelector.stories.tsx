import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { isNonEmptyArray } from 'ramda-adjunct';
import styled from 'styled-components';

import FileSelector from './FileSelector';
import { FileSelectorProps } from './FileSelector.types';
import { FileSelectorSizes } from './FileSelector.enums';
import { Inline, Padbox, Stack } from '../layout';
import { SpaceSizes } from '../../theme/space.enums';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { Text } from '../Text';
import { getColor, getRadii } from '../../utils';

export default {
  title: 'components/FileSelector',
  component: FileSelector,
  argTypes: {
    accept: {
      description:
        'Accepted file mime types (https://www.iana.org/assignments/media-types/media-types.xhtml)',
    },
    maxFiles: {
      description: 'The maximum number of dropped files',
    },
    onFileDialogCancel: {
      description: 'Callback fired when file dialog is canceled',
    },
    onFileDialogOpen: {
      description: 'Callback fired when dialog is opened',
    },
    validator: {
      description:
        'Custom validation function. It must return null if there are no errors.',
    },
  },
} as Meta;

const FileSelectorTemplate: Story<FileSelectorProps> = (args) => (
  <FileSelector {...args} />
);

export const Playground = FileSelectorTemplate.bind({});
Playground.parameters = {
  screenshot: { skip: true },
};
Playground.parameters = {
  screenshot: { skip: true },
};

/* Sizes */
export const FillSize = FileSelectorTemplate.bind({});
FillSize.args = {
  size: FileSelectorSizes.fill,
};
export const CompactSize = FileSelectorTemplate.bind({});
CompactSize.args = {
  size: FileSelectorSizes.compact,
};
export const AreaSize = FileSelectorTemplate.bind({});
AreaSize.args = {
  size: FileSelectorSizes.area,
  width: 400,
  height: 300,
};

/* States */
export const WithError = FileSelectorTemplate.bind({});
WithError.args = { hasError: true };
export const Disabled = FileSelectorTemplate.bind({});
Disabled.args = { isDisabled: true };

/* Variants */
export const OnlyDrag = FileSelectorTemplate.bind({});
OnlyDrag.args = { isClickDisabled: true, dropLabel: 'Drop files here' };
export const OnlyClick = FileSelectorTemplate.bind({});
OnlyClick.args = { isDragDisabled: true };

/* Example */
const kbToBytes = (kb: number) => kb * 1024;
const bytesToKb = (kb: number) => Math.floor(kb / 1024);
const FileWrapper = styled(Padbox)`
  border-radius: ${getRadii('default')};
  border: 1px solid;
  border-color: ${({ $hasError, theme }) =>
    getColor($hasError ? 'error.500' : 'success.500', { theme })};
`;
const File = ({ file, errors = [] }) => (
  <FileWrapper $hasError={isNonEmptyArray(errors)} paddingSize={SpaceSizes.sm}>
    <Inline gap={SpaceSizes.sm} justify="space-between">
      <Text size={TextSizes.md} isBold>
        {file.name}
      </Text>
      <Text size={TextSizes.md}>{bytesToKb(file.size)} kB</Text>
    </Inline>
    <Stack>
      {errors.map((error) => (
        <Text
          key={error.code}
          size={TextSizes.sm}
          variant={TextVariants.danger}
        >
          {error.message}
        </Text>
      ))}
    </Stack>
  </FileWrapper>
);

export const Example = () => {
  const [errors, setErrors] = useState([]);
  const [files, setFiles] = useState([]);
  const handleOnDrop = (acceptedFiles, rejectedFiles) => {
    setErrors((prev) => [...prev, ...rejectedFiles]);
    setFiles((prev) => [...prev, ...acceptedFiles]);
  };

  return (
    <Stack gap={SpaceSizes.md}>
      <Stack as="ul" gap={SpaceSizes.xs}>
        <Text as="li" size={TextSizes.md}>
          Accepts only PNG files
        </Text>
        <Text as="li" size={TextSizes.md}>
          File size has to be at least 100KB
        </Text>
        <Text as="li" size={TextSizes.md}>
          Maximal file size is 400KB
        </Text>
        <Text as="li" size={TextSizes.md}>
          You can drop up to 2 files at once
        </Text>
      </Stack>
      <FileSelector
        accept={['image/png']}
        hasError={isNonEmptyArray(errors)}
        maxFiles={2}
        maxFileSize={kbToBytes(400)}
        minFileSize={kbToBytes(100)}
        multiple
        onFilesDrop={handleOnDrop}
      />
      {files.map((file) => (
        <File key={`${file.name}-accepted`} file={file} />
      ))}
      {errors.map((error) => (
        <File
          key={`${error.file.name}-rejected`}
          errors={error.errors}
          file={error.file}
        />
      ))}
    </Stack>
  );
};
Example.parameters = {
  screenshot: { skip: true },
};
