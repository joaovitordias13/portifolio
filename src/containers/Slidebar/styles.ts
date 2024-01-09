import styled from 'styled-components'
import { P } from '../../componets/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  top: 80px;
  left: 0;
  position: sticky;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
