import styled from 'styled-components';

const AvatarStyle = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin-bottom: 24px;
`;

export default function Avatar() {
  return <AvatarStyle src="https://github.com/alcbcoelho.png" />;
}
