import './App.css';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import 'aos/dist/aos.css'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {

  const [theme, setTheme] = useState('light')
  console.log(theme)  
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Project className="App">
        <Navbar 
          themeToggle= {themeToggle}
        />
        <Intro />
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
      </Project>
    </ThemeProvider>
  );
}

const Project = styled.div`
`



export default App;
