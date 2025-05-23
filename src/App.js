import Navbar from "./components/NavBar/navbar";
import Projects from "./components/Projects/projects";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects />
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
