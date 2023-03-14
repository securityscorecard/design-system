import React from 'react';
/**
 * This code is taken from two articles written by Ben Ilegbodu (https://github.com/benmvp)
 * https://www.benmvp.com/blog/polymorphic-react-components-typescript/
 * https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
 */
declare type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;
declare type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C;
};
/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
declare type ExtendableProps<ExtendedProps = Record<string, unknown>, OverrideProps = Record<string, unknown>> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
declare type InheritableElementProps<C extends React.ElementType, Props = Record<string, unknown>> = ExtendableProps<PropsOf<C>, Props>;
/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export declare type PolymorphicComponentProps<C extends React.ElementType, Props = Record<string, unknown>> = InheritableElementProps<C, Props & AsProp<C>>;
/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export declare type PolymorphicComponentPropsWithRef<C extends React.ElementType, Props = Record<string, unknown>> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export {};
