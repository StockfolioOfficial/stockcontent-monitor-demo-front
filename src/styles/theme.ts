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
  },
  weight: {
    light: 400,
    normal: 500,
    bold: 700,
  },
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
  },
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
};

const theme = { colors, fonts };

export type Theme = typeof theme;

export default theme;
