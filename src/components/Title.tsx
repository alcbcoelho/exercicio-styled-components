import styled from 'styled-components';

interface TitleProps {
  as?: string;
  fontSize?: string;
  children: string;
}

const TitleStyle = styled.h3<TitleProps>`
  color: #282a35;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: bold;
  margin-bottom: 16px;
`;

function Title({ as, fontSize, children }: TitleProps) {
  return (
    <TitleStyle as={as} fontSize={fontSize}>
      {children}
    </TitleStyle>
  );
}

export default Title;
