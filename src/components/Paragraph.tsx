import styled from 'styled-components';

interface ParagraphProps {
  isSecondary?: boolean;
  fontSize?: string;
  children: string;
}

export const ParagraphStyle = styled.p<ParagraphProps>`
  color: ${(props) =>
    props.isSecondary ? props.theme.secondaryColor : props.theme.primaryColor};
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
