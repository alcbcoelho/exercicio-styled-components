import Title from '../components/Title';
import Avatar from '../components/Avatar';
import Paragraph, { ParagraphStyle } from '../components/Paragraph';
import styled from 'styled-components';

interface SidebarProps {
  changeTheme: () => void;
}

const Description = styled(ParagraphStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;

export default function Sidebar({ changeTheme }: SidebarProps) {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title as="h1" fontSize="20px">
          André Coêlho
        </Title>
        <Paragraph fontSize="16px" isSecondary>
          alcbcoelho
        </Paragraph>
        <Description fontSize="12px">Engenheiro front-end</Description>
        <ThemeButton onClick={changeTheme}>Trocar tema</ThemeButton>
      </SidebarContainer>
    </aside>
  );
}
