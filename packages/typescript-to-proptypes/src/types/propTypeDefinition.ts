import type { PropType } from './props';

export interface PropTypeDefinition {
  name: string;
  jsDoc: string | undefined;
  propType: PropType;
  filenames: Set<string>;
  isOptional: boolean;
  /**
   * @internal
   */
  $$id: number | undefined;
}

export function createPropTypeDefinition(
  name: string,
  jsDoc: string | undefined,
  propType: PropType,
  filenames: Set<string>,
  id: number | undefined,
  isOptional = true,
): PropTypeDefinition {
  return {
    name,
    jsDoc,
    propType,
    filenames,
    $$id: id,
    isOptional,
  };
}
