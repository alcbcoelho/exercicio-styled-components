import About from './containers/About';
import Projects from './containers/Projects';
import Sidebar from './containers/Sidebar';

import { GlobalStyles, Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  );
}

export default App;
