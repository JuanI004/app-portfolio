import "./App.css";
import NavBar from "./components/UI/NavBar";
import Header from "./components/Sections/Header";
import AboutMe from "./components/Sections/AboutMe";
import Proyects from "./components/Sections/Proyects";
import Skills from "./components/Sections/Skills";
import Education from "./components/Sections/Education";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Proyects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;
