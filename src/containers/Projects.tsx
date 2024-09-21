import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Title from '../components/Title';

const ProjectContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 36px;
  row-gap: 40px;

  @media screen and (max-width: 575px) {
    grid-template-columns: auto;
    column-gap: 0;
    row-gap: 16px;
  }
`;

export default function Projects() {
  return (
    <section>
      <Title as="h2" fontSize="16px">
        Projetos
      </Title>
      <ProjectContainer>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
      </ProjectContainer>
    </section>
  );
}
