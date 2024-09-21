import styled from 'styled-components';
import Title from './Title';
import Paragraph from './Paragraph';

const CardStyle = styled.div`
  border: 1px #c1c1c1 solid;
  padding: 16px;
`;

const CardButton = styled.a`
  display: inline-block;
  background-color: #4476bf;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-top: 24px;
  padding: 8px;
  cursor: pointer;
`;

export default function ProjectCard() {
  return (
    <CardStyle>
      <Title>Projeto de Lista de Tarefas</Title>
      <Paragraph isSecondary>Lista de tarefas feita com Vue.js</Paragraph>
      <CardButton>Visualizar</CardButton>
    </CardStyle>
  );
}
