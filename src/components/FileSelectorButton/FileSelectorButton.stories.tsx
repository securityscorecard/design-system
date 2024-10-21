import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { isNonEmptyArray } from 'ramda-adjunct';

import FileSelectorButton from './FileSelectorButton';
import { Inline, Padbox, Stack, Surface } from '../layout';
import { SpaceSizes } from '../../theme/space.enums';
import { TextVariants } from '../Text/Text.enums';
import { Text } from '../Text';

/**
 * ```jsx
 * import { FileSelectorButton } from '@securityscorecard/design-system';
 * ```
 */

const meta = {
  component: FileSelectorButton,
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allows to select multiple files',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    accept: {
      control: 'object',
      description:
        "Accepted file types, in form of object where keys are file mime types and value is a array with supported file extensions. If an empty array is provided as a value all extensions are accepted.Examples: `{ 'image/png': [ '.png' ] }` will accept only PNG images, `{ 'image/*': [] }` will accept any image with any extension.",
      table: {
        type: {
          summary: 'Record<string, Array<string>>',
        },
      },
    },
    maxFiles: {
      control: 'number',
      description: 'The maximum number of dropped files',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    onFilesDrop: {
      control: { disable: true },
      table: {
        type: {
          summary:
            '<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void',
        },
      },
    },
    onFilesAccepted: {
      control: { disable: true },
      table: {
        type: {
          summary: '<T extends File>(files: T[], event: DropEvent) => void',
        },
      },
    },
    onFilesRejected: {
      control: { disable: true },
      table: {
        type: {
          summary:
            '(fileRejections: FileRejection[], event: DropEvent) => void',
        },
      },
    },
    onFileDialogCancel: {
      control: { disable: true },
      description:
        'Callback fired when file dialog is closed with no selection',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    onFileDialogOpen: {
      control: { disable: true },
      description: 'Callback fired when dialog is opened',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    validator: {
      control: { disable: true },
      description:
        'Custom validation function. It must return null if there are no errors.',
      table: {
        type: {
          summary:
            '<T extends File>(file: T) => FileError | readonly FileError[] | null',
        },
      },
    },
  },
  args: {
    accept: {
      'image/*': [],
    },
  },
} satisfies Meta<typeof FileSelectorButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

/* Example */
const File = ({ file, errors = [] }) => (
  <Surface
    style={{
      borderColor: isNonEmptyArray(errors)
        ? 'var(--sscds-color-border-input-error)'
        : undefined,
    }}
    hasBorder
  >
    <Padbox paddingSize="2x">
      <Inline gap="2x" justify="space-between">
        <Text isBold>{file.name}</Text>
        <Text>{Math.floor(file.size / 1024)} kB</Text>
      </Inline>
      <Stack>
        {errors.map((error) => (
          <Text key={error.code} size="sm" variant={TextVariants.danger}>
            {error.message}
          </Text>
        ))}
      </Stack>
    </Padbox>
  </Surface>
);

export const Example: Story = {
  render: function Render(args) {
    const [errors, setErrors] = useState([]);
    const [files, setFiles] = useState([]);
    const handleOnDrop = (acceptedFiles, rejectedFiles) => {
      setErrors((prev) => [...prev, ...rejectedFiles]);
      setFiles((prev) => [...prev, ...acceptedFiles]);
    };

    return (
      <Stack gap={SpaceSizes.md}>
        <FileSelectorButton onFilesDrop={handleOnDrop} {...args} />
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
  },
  args: {
    accept: {
      'image/png': ['.png'],
    },
    maxFiles: 2,
    maxFileSize: 400 * 1024,
    minFileSize: 100 * 1024,
    multiple: true,
  },
  parameters: {
    screenshot: { skip: true },
  },
};
