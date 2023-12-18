declare module '*.mdx' {
  const value: string;
  export default value;
}

declare module '*.woff2';
declare module '*.woff';

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
