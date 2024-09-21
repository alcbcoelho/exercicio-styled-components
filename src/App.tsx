import { ThemeProvider } from 'styled-components'; // possibilita o uso de temas pelos componentes filhos, que passam a herdar o prop "theme"
import About from './containers/About';
import Projects from './containers/Projects';
import Sidebar from './containers/Sidebar';

import { GlobalStyles, Container } from './styles';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const changeTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
