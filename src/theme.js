export const theme = {
  colors: {
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111111',
    blue: '#54ADFF',
    lightblue: '#CCE4FB',
    green: '#00C3AD',
    red: '#F43F5E',
  },
  background: {
    azure: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);',
  },
  shadow: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19);',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24);',
  },
  utils: {
    cubicBezier: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  spacing: value => 4 * value,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '20px',
    md: '24px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
