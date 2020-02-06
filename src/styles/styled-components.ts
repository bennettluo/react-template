import * as styledComponents from 'styled-components';

// theme.ts
// Project theme variables
export interface ThemeInterface {
  primary: string;
  componentBackground: string;
  componentBackgroundSecondary: string;
}

export const theme = {
  default: {
    primary: '#fff',
    componentBackground: '#fff',
    componentBackgroundSecondary: '#fff',
  },
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
