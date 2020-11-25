export interface SolidButtonColors {
  color: string;
  bgColor: string;
  hoverBgColor: string;
  activeBgColor: string;
}

export interface OutlineButtonColors {
  color: string;
  bgColor: string;
  hoverBgColor: string;
  activeBgColor: string;
  borderColor: string;
}

export interface TextButtonColors {
  color: string;
  hoverColor: string;
  activeColor: string;
}

export interface ButtonColors<T> {
  primary: T;
  secondary?: T;
  danger?: T;
}

export interface Buttons {
  solid: ButtonColors<SolidButtonColors>;
  outline: ButtonColors<OutlineButtonColors>;
  text: ButtonColors<TextButtonColors>;
}
