import { DefaultTheme } from 'styled-components';

/*

	// 약어정리
	btn = button
	sel = select
	clr = color

	// border-gradient 사용시 3가지 css 사용
	border: 10px solid transparent;
	[ 각도지정가능 ]
	border-image: linear-gradient(135deg, ${(props) => props.theme.colors.selBorderImgColor});
	border-image-slice: 1;

  // GRAY SCALE (#FFF ~ #2F3233)

*/

// 테마에 관계없는 값

const fontSizeTheme = {
  headingL: '6rem',
  headingM: '4rem',
  headingS: '2.5rem',
  paragraph: '2rem',
  large: '1.8rem',
  medium: '1.6rem',
  normal: '1.4rem',
};

const lineHeightTheme = {
  lineHeightHeadingL: '10rem',
  lineHeightHeadingM: '6rem',
  lineHeightHeadingS: '3rem',
  lineHeightParagraph: '3rem',
  lineHeightLarge: '3.5rem',
  lineHeightMedium: '3rem',
  lineHeightNormal: '2.5rem',
};

const fontWeightTheme = {
  Black: 900,
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  extraLight: 300,
  light: 200,
  thin: 100,
};

// ==============================
// 기본모드에 대한 테마
// ==============================
const colors = {
  WHITE: '#FFFFFF',
  BLACK: '#2F3233',
  GREEN: '#0BE606',
  BLUE: '#1549CE',
  RED: '#E61C34',
  GRAY_100: '#FDFDFD',
  GRAY_200: '#F4F4F4',
  GRAY_300: '#EBEBEB',
  GRAY_400: '#E2E2E2',
  GRAY_500: '#BABABA',
  GRAY_600: '#8B8B8B',
  GRAY_700: '#5D5D5D',
  GRAY_800: '#2E2E2E',
  // 텍스트
  TXT_100: '#FFFFFF',
  TXT_200: '#C7C7C6',
  TXT_300: '#B0B0B0',
  TXT_400: '#787878',
  TXT_500: '#2e2e2e',
  TXT_600: '#191919',
  // 반전 필터
  INVERT: 'invert(0)',
  // 테이블 배경
  BACKGROUND: '#FDFDFD',
  // 메인
  MAIN: '#2b2969',
  MAIN2: '#d71e2a',
  // 알림
  NOTIFY: '#FF693A',
} as const;

const theme: DefaultTheme = {
  colors: {
    white: colors.WHITE,
    black: colors.BLACK,
    green: colors.GREEN,
    blue: colors.BLUE,
    red: colors.RED,
    gray100: colors.GRAY_100,
    gray200: colors.GRAY_200,
    gray300: colors.GRAY_300,
    gray400: colors.GRAY_400,
    gray500: colors.GRAY_500,
    gray600: colors.GRAY_600,
    gray700: colors.GRAY_700,
    gray800: colors.GRAY_800,
    txt100: colors.TXT_100,
    txt200: colors.TXT_200,
    txt300: colors.TXT_300,
    txt400: colors.TXT_400,
    txt500: colors.TXT_500,
    txt600: colors.TXT_600,
    invert: colors.INVERT,
    background: colors.BACKGROUND,
    main: colors.MAIN,
    main2: colors.MAIN2,
  },
  fontSize: fontSizeTheme,
  lineHeight: lineHeightTheme,
  fontWeight: fontWeightTheme,
};

// ==============================
// 다크모드에 대한 테마
// ==============================
const darkcolors = {
  WHITE: '#2F3233',
  BLACK: '#FFFFFF',
  GREEN: '#49d885',
  BLUE: '#446cd1',
  RED: '#e05364',
  GRAY_100: '#292b2c',
  GRAY_200: '#4f5155',
  GRAY_300: '#6f7377',
  GRAY_400: '#888c91',
  GRAY_500: '#ACB1B8',
  GRAY_600: '#C6CACF',
  GRAY_700: '#DFE2E9',
  GRAY_800: '#EBEFF5',
  // 텍스트
  TXT_100: '#38383b',
  TXT_200: '#4f4f53',
  TXT_300: '#8c8e94',
  TXT_400: '#a3a6af',
  TXT_500: '#d1d4db',
  TXT_600: '#ffffff',
  // 반전 필터
  INVERT: 'invert(1)',
  // 테이블 배경
  BACKGROUND: '#353333',
  // 메인
  MAIN: '#5a55e2',
  MAIN2: '#d71e2a',
} as const;

const darkTheme: DefaultTheme = {
  colors: {
    white: darkcolors.WHITE,
    black: darkcolors.BLACK,
    green: darkcolors.GREEN,
    blue: darkcolors.BLUE,
    red: darkcolors.RED,
    gray100: darkcolors.GRAY_100,
    gray200: darkcolors.GRAY_200,
    gray300: darkcolors.GRAY_300,
    gray400: darkcolors.GRAY_400,
    gray500: darkcolors.GRAY_500,
    gray600: darkcolors.GRAY_600,
    gray700: darkcolors.GRAY_700,
    gray800: darkcolors.GRAY_800,
    txt100: darkcolors.TXT_100,
    txt200: darkcolors.TXT_200,
    txt300: darkcolors.TXT_300,
    txt400: darkcolors.TXT_400,
    txt500: darkcolors.TXT_500,
    txt600: darkcolors.TXT_600,
    invert: darkcolors.INVERT,
    background: darkcolors.BACKGROUND,
    main: darkcolors.MAIN,
    main2: darkcolors.MAIN2,
  },
  fontSize: fontSizeTheme,
  lineHeight: lineHeightTheme,
  fontWeight: fontWeightTheme,
};

export { theme, darkTheme };
