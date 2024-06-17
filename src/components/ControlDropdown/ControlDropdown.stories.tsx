import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Paragraph } from '../Paragraph';
import { Center } from '../layout';
import { ControlDropdownProps } from './ControlDropdown.types';
import ControlDropdown from './ControlDropdown';

export default {
  title: 'components/ControlDropdown',
  component: ControlDropdown,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200,
    },
  },
} as Meta;

const ControlDropdownTemplate: Story<ControlDropdownProps> = (args) => {
  const handlerRef = useRef(null);

  return (
    <Center maxWidth={150} areChildrenCentered>
      <span ref={handlerRef}>
        <button type="button">Dropdown handler</button>
        <ControlDropdown {...args} parentRef={handlerRef}>
          <Paragraph>Dropdown content</Paragraph>
        </ControlDropdown>
      </span>
    </Center>
  );
};

export const Playground = ControlDropdownTemplate.bind({});
Playground.args = {
  isOpen: true,
  title: 'Dropdown title',
  onOpen: action('OnOpen'),
  onClose: action('OnClose'),
  onSubmit: action('OnSubmit'),
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithResetButton = ControlDropdownTemplate.bind({});
WithResetButton.args = {
  ...Playground.args,
  onReset: action('OnReset'),
};

export const BottomLeftPlacement = ControlDropdownTemplate.bind({});
BottomLeftPlacement.args = {
  ...Playground.args,
  placement: 'bottom-start',
};

export const BottomPlacement = ControlDropdownTemplate.bind({});
BottomPlacement.args = {
  ...Playground.args,
  placement: 'bottom',
};

export const BottomRightPlacement = ControlDropdownTemplate.bind({});
BottomRightPlacement.args = {
  ...Playground.args,
  placement: 'bottom-end',
};

export const WithCustomWidth = ControlDropdownTemplate.bind({});
WithCustomWidth.args = {
  ...BottomPlacement.args,
  width: 500,
};

export const WithCustomLabels = ControlDropdownTemplate.bind({});
WithCustomLabels.args = {
  ...WithResetButton.args,
  submitLabel: 'Send',
  closeLabel: 'Cancel',
  resetLabel: 'Wipe out',
};
