import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MessageProps } from './Message.types';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Playground: Story<MessageProps & {
    children: React.ReactChild;
}>;
export declare const NoteMessage: Story;
export declare const ErrorMessage: Story;
