import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Slidebar'
import Sobre from './containers/sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstausandoTemadark] = useState(false)

  function trocaTema() {
    setEstausandoTemadark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
