import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

// criando uma tipagem para o tema
type ThemeType = typeof defaultTheme

// incluindo tipagem do tema no styled component
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
