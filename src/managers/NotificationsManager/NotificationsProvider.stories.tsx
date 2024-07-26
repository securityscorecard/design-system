import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { addNotification, removeNotification, updateNotification } from './api';
import {
  Button,
  Checkbox,
  Inline,
  Input,
  Label,
  Padbox,
  Select,
  Stack,
} from '../../components';
import { NotificationsProvider } from './NotificationsProvider';
import { ToastVariants } from '../../components/Toast/Toast.enums';

export default {
  title: 'managers/NotificationsProvider',
  component: NotificationsProvider,
  decorators: [
    (storyFn) => <NotificationsProvider>{storyFn()}</NotificationsProvider>,
  ],
  parameters: { screenshot: { skip: true } },
  tags: ['!autodocs'],
} as Meta;

const options = [
  { label: 'Info', value: ToastVariants.info },
  { label: 'Success', value: ToastVariants.success },
  { label: 'Warn', value: ToastVariants.warn },
  { label: 'Error', value: ToastVariants.error },
  { label: 'Loading', value: ToastVariants.loading },
];

export const Playground: StoryFn<typeof NotificationsProvider> = () => {
  const [id, setId] = useState('test');
  const [content, setContent] = useState('This is a test notification');
  const [variant, setVariant] = useState(options[0]);
  const [autoDismiss, setAutoDismiss] = useState(false);
  return (
    <Padbox paddingSize="lg">
      <Stack gap="md">
        <Label>Id:</Label>
        <Input value={id} onChange={(e) => setId(e.target.value)} />
        <Label>Content:</Label>
        <Input value={content} onChange={(e) => setContent(e.target.value)} />
        <Label>Type:</Label>

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Select options={options} value={variant} onChange={setVariant} />
        <Label>Autodismiss:</Label>
        <Checkbox
          checkboxId="autoDismiss"
          checked={autoDismiss === true}
          name="autoDismiss"
          onChange={(e) => setAutoDismiss(e.target.checked)}
        />
        <Inline gap="md">
          <Button
            onClick={() =>
              addNotification({
                id,
                variant: variant.value,
                content,
                autoDismiss,
              })
            }
          >
            Add notification
          </Button>
          <Button
            onClick={() =>
              updateNotification({
                id,
                variant: variant.value,
                content,
                autoDismiss,
              })
            }
          >
            Update notification
          </Button>
          <Button onClick={() => removeNotification(id)}>
            Remove notification
          </Button>
        </Inline>
      </Stack>
    </Padbox>
  );
};
