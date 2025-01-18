import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div class="container">
      <Home />
      <Experience />
      <Skills />
      <Projects /> 
      <Contact /> 
    </div>

    </> 
  );
}

export default App;
