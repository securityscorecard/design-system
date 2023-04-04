type Type = 'one' | 'two' | 'three';

interface ParentProps<T extends Type> {
  optionalType?: T;
  requiredType: T;
}

type ChildProps = ParentProps<'one' | 'two'>;

export function Foo(props: ChildProps): JSX.Element;
