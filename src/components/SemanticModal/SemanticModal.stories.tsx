import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import SemanticModal from './SemanticModal';
import { SemanticModalVariants } from './SemanticModal.enums';
import { SemanticModalProps } from './SemanticModal.types';
import { Inline, Padbox } from '../layout';
import { Button, ButtonEnums } from '../Button';
import { SpaceSizes } from '../../theme';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/modals/SemanticModal',
  component: SemanticModal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 600,
      source: { type: 'code' },
    },
  },
  argTypes: {
    variant: {
      ...generateControl('select', SemanticModalVariants),
    },
    actions: {
      control: { disable: true },
    },
  },
} as Meta;

export const Playground: Story<SemanticModalProps> = (args) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Padbox paddingSize={SpaceSizes.xxl}>
      <Inline justify="center">
        <Button
          size={ButtonEnums.ButtonSizes.lg}
          onClick={() => setIsShown(!isShown)}
        >
          Open semantic modal
        </Button>
      </Inline>
      {isShown && <SemanticModal onClose={() => setIsShown(false)} {...args} />}
    </Padbox>
  );
};

Playground.parameters = {
  screenshot: { skip: true },
};

Playground.args = {
  actions: [
    {
      label: 'Secondary',
      name: 'Secondary',
      onClick: action('click-action-secondary'),
    },
    {
      label: 'Primary',
      name: 'Primary',
      onClick: action('click-action-primary'),
    },
  ],
  message:
    'You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.',
  title: 'This is a placeholder',
};

const SemanticModalTemplate: Story<SemanticModalProps> = (args) => (
  <SemanticModal {...args} />
);

export const Success = SemanticModalTemplate.bind({});
Success.args = {
  actions: [
    {
      label: 'Secondary',
      name: 'Secondary',
      onClick: action('click-action-secondary'),
    },
    {
      label: 'Primary',
      name: 'Primary',
      onClick: action('click-action-primary'),
    },
  ],
  message:
    'You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.',
  title: 'This is a placeholder',
  onClose: action('close-modal'),
  variant: SemanticModalVariants.success,
};

export const Warn = SemanticModalTemplate.bind({});
Warn.args = {
  ...Success.args,
  variant: SemanticModalVariants.warn,
};

export const Error = SemanticModalTemplate.bind({});
Error.args = {
  ...Success.args,
  variant: SemanticModalVariants.error,
};

export const Ban = SemanticModalTemplate.bind({});
Ban.args = {
  ...Success.args,
  variant: SemanticModalVariants.ban,
};
