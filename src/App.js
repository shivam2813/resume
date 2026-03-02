import Header from "./components/header";
import Top from "./components/top";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Top />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
