const fonts = {
  size: {
    xxl: '40pt',
    xl: '26px',
    lg: '20px',
    ml: '18px',
    m: '16px',
    ms: '15px',
    s: '14px',
    xs: '13px',
    xxs: '12px',
  } as const,
  weight: {
    light: 400,
    normal: 500,
    bold: 700,
  } as const,
  lineHeight: {
    xxlB: '36px',
    xxl: '55px',
    xl: '36px',
    lg: '28px',
    ml: '26px',
    mlL: '21.6px',
    m: '24px',
    ms: '22px',
    msL: '25px',
    s: '20px',
    xs: '18px',
  } as const,
};

const colors = {
  red: '#F34D4D',
  pink: '#FFEFEF',
  blue: '#3B6BE7',
  sky: '#ECF0FF',
  purple: '#6253EA',
  violet: '#EBE8FF',
  white: '#FFFFFF',
  gray0: '#FAFAFA',
  gray1: '#EEEEEE',
  gray2: '#8D8C99',
  gray3: '#635F74',
  black: '#000000',
} as const;

const hoverShadow = {
  red: '2px 2px 12px rgba(255, 67, 67, 0.5)',
  pink: '2px 2px 12px #FFCACA',
  blue: '2px 2px 12px rgba(60, 101, 209, 0.5)',
  sky: '2px 2px 12px #BFD1FF',
  purple: '2px 2px 12px rgba(79, 67, 189, 0.5)',
  violet: '2px 2px 12px #BDB7F3',
  black: '2px 2px 20px rgba(0, 0, 0, 0.25)',
  pagenation: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  item: '2px 2px 10px rgba(141, 141, 141, 0.25)',
  modal: '4px 4px 20px rgba(0, 0, 0, 0.25)',
} as const;

const pressedShadow = {
  red: 'inset 4px 4px 4px rgba(156, 127, 127, 0.5)',
  pink: 'inset 4px 4px 4px rgba(210, 172, 172, 0.25)',
  blue: 'inset 4px 4px 4px #445B98',
  sky: 'inset 4px 4px 4px #C4CBDF',
  purple: 'inset 4px 4px 4px #4034AE',
  violet: 'inset 4px 4px 4px #C1BDE5',
  black: 'inset 4px 4px 4px rgba(0, 0, 0, 0.5)',
} as const;

const theme = { colors, fonts, hoverShadow, pressedShadow };

export type Theme = typeof theme;

export default theme;
