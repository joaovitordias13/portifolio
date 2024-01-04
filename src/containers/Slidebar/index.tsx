import Avatar from '../../componets/Avatar'
import Paragrafo from '../../componets/Paragrafo'
import Titulo from '../../componets/Tittle'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>João Vitor Dias </Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        joaovitordias13
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
