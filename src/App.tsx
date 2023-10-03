// Prover o tema para a aplicação
import { ThemeProvider } from 'styled-components'

// Tema padrão da aplicação
import { defaultTheme } from './styles/themes/default'

// Estilo Global da aplicação
import { GlobalStyle } from './styles/global'

// pagina transition
import { Transition } from './pages/Transation'

// Provedor de contexto de transações
import { TransactrionsProvider } from './TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactrionsProvider>
        <Transition />
      </TransactrionsProvider>
    </ThemeProvider>
  )
}
