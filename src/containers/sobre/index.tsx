import Titulo from '../../componets/Tittle'
import Paragrafo from '../../componets/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}> Sobre Mim </Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam odio.
      Vel omnis optio voluptates quod, similique corrupti amet accusantium
      laborum vitae exercitationem. Unde eveniet quis voluptates animi quaerat
      necessitatibus.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=joaovitordias13&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaovitordias13&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
