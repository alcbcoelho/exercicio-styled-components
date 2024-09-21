import styled from 'styled-components';

interface ParagraphProps {
  isSecondary?: boolean;
  children: string;
}

const ParagraphStyle = styled.p<ParagraphProps>`
  color: ${({ isSecondary }) => (isSecondary ? '#949494' : '#282a35')};
  font-size: 14px;
  line-height: 22px;
`;

function Paragraph({ isSecondary, children }: ParagraphProps) {
  return <ParagraphStyle isSecondary={isSecondary}>{children}</ParagraphStyle>;
}

export default Paragraph;
