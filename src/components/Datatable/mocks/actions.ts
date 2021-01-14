import { action } from '@storybook/addon-actions';

import { Action, ActionKinds } from '../types/Action.types';

export const subactionsMock: ActionKinds[] = [
  {
    label: 'OnClick',
    name: 'onClick',
    onClick: action('OnClick handler'),
  },
  {
    label: 'Absolute link',
    name: 'absolute',
    onClick: action('Absolute link handler'),
    href: '/',
  },
  {
    label: 'Relative link',
    name: 'relative',
    onClick: action('Relative link handler'),
    to: '/',
  },
];

export const actionsMock: Action[] = [
  ...subactionsMock,
  {
    label: 'Dropdown',
    name: 'dropdown',
    onClick: action('Dropdown click'),
    subActions: subactionsMock,
  },
];
