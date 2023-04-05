import { Container } from '@mui/material';
import * as Styled from './styles'

export default function Header() {
  return (
    <>
      <Styled.DivBackground>
        <Container fixed>
          <div className="header">
            <h1>Users</h1>
          </div>
        </Container>
      </Styled.DivBackground>
    </>
  );
}
