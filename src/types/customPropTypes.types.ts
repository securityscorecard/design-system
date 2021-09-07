export type TupleType = {
  (
    props: { [key: string]: unknown },
    propName: string | number,
    componentName: string,
    location: string,
    propFullName: string,
    secret: string,
  ): Error;
};

export type TypeChecker = {
  isRequired: () => Error;
  (
    props: { [key: string]: unknown },
    propName: string,
    componentName: string,
    location: string,
    propFullName: string,
  ): Error;
};
