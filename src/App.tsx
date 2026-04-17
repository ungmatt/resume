import Header from './components/Header';
import Nav from './components/Nav';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <Nav />
      <main>
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
