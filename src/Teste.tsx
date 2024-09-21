import styled from 'styled-components';

interface ButtonProps {
  fontSize?: string;
  color?: string;
}

const setColor = ({ color }: ButtonProps): string => color || '#7f7f7f';

// Com o styled components, não criamos (diretamente) classes, mas sim componentes com a estilização embutida neles
const Button = styled.button<ButtonProps>`
  padding: 8px;
  border: 1px ${setColor} solid;
  border-radius: 4px;
  background-color: transparent;
  color: ${setColor};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  cursor: pointer;

  &:hover {
    background-color: ${setColor};
    color: #fff;
  }

  span {
    color: #fff;
    background-color: ${setColor};
  }
`;

// Criando uma espécie de "modificador" (nomenclatura do BEM) em cima do componente Button (ou como uma subclasse ButtonWarning de uma superclasse Button)
const ButtonWarning = styled(Button)`
  color: red;
  border-color: red;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;

export default function Teste() {
  return (
    <>
      <button>Sem styled components</button>
      <Button>Com styled components</Button>
      <Button fontSize="24px" color="dodgerblue">
        Com styled components e usando props
      </Button>
      <Button as="a">
        Som um botão que se identifica como um link. Confira minha tag
      </Button>
      <Button>
        <span>
          Span com estilo definido por alinhamento ao estilo definido p/ o
          componente Button
        </span>
      </Button>
      <ButtonWarning fontSize="24px">Componente ButtonWarning</ButtonWarning>
    </>
  );
}
