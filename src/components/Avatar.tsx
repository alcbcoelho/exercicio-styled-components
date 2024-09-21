import styled from 'styled-components';

const AvatarStyle = styled.img`
  border-radius: 50%;
  max-width: 100%;
  margin-bottom: 24px;
`;

export default function Avatar() {
  return <AvatarStyle src="https://github.com/alcbcoelho.png" />;
}
