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

export const tableActionsMock: Action[] = [
  {
    label: 'Export',
    name: 'Export',
    onClick: action('OnClick Export handler'),
  },
  {
    label: 'Import',
    name: 'Import',
    onClick: action('OnClick Import handler'),
  },
  {
    label: 'Claim',
    name: 'Claim',
    onClick: action('OnClick Claim handler'),
  },
  {
    label: 'Remove',
    name: 'Remove',
    onClick: action('OnClick Remove handler'),
  },
];
