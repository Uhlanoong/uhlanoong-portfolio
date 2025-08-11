import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 900, margin: 'auto', padding: '0 20px' }}>
        <About />
        <Experience/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
