import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      green: string;
      blue: string;
      red: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      txt100: string;
      txt200: string;
      txt300: string;
      txt400: string;
      txt500: string;
      txt600: string;
      invert: string;
      background: string;
      main: string;
      main2: string;
      active: string;
      hover: string;
      disable: string;
      placeholder: string;
      inputFocus: string;
    };
    fontSize: {
      headingL: string;
      headingM: string;
      headingS: string;
      paragraph: string;
      large: string;
      medium: string;
      normal: string;
    };
    lineHeight: {
      lineHeightHeadingL: string;
      lineHeightHeadingM: string;
      lineHeightHeadingS: string;
      lineHeightParagraph: string;
      lineHeightLarge: string;
      lineHeightMedium: string;
      lineHeightNormal: string;
    };
    fontWeight: {
      Black: number;
      extraBold: number;
      bold: number;
      semiBold: number;
      medium: number;
      regular: number;
      extraLight: number;
      light: number;
      thin: number;
    };
  }
}
