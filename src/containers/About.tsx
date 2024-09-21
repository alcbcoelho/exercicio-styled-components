import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import styled from 'styled-components';

const GitHubStatBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    width: 100%;

    @media screen and (max-width: 575px) {
      height: initial;
    }
  }
`;

export default function About() {
  return (
    <section>
      <Title as="h2" fontSize="16px">
        Sobre
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        voluptate unde reprehenderit, maxime accusantium deserunt tempora? Amet,
        eos aperiam numquam minus sunt, quia perferendis cumque provident animi
        rerum assumenda tempore!
      </Paragraph>
      <GitHubStatBox>
        <img src="https://github-readme-stats.vercel.app/api?username=alcbcoelho&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=alcbcoelho&layout=compact&langs_count=7&theme=dracula" />
      </GitHubStatBox>
    </section>
  );
}
