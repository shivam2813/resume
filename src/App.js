import React from "react";
import Header from "./components/header";
import Top from "./components/top";
import Footer from "./components/footer";
import Skills from "./components/skills";
const Projects = React.lazy(() => import("./components/projects"));
const Experience = React.lazy(() => import("./components/experience"));

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
