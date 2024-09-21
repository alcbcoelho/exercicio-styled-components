import styled from 'styled-components';

interface ParagraphProps {
  isSecondary?: boolean;
  fontSize?: string;
  children: string;
}

export const ParagraphStyle = styled.p<ParagraphProps>`
  color: ${({ isSecondary }) => (isSecondary ? '#949494' : '#282a35')};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: 22px;
`;

function Paragraph({ isSecondary, fontSize, children }: ParagraphProps) {
  return (
    <ParagraphStyle isSecondary={isSecondary} fontSize={fontSize}>
      {children}
    </ParagraphStyle>
  );
}

export default Paragraph;
