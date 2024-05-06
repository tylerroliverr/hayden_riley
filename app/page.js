import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Padding from "./components/padding";
import Education from "./components/Education";
import Experience from "./components/Experience";
import References from "./components/References";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Padding>
        <Header/>
          <Projects/>
          <Education/>
          <Experience/>
          <References/>
          <Skills/>
        <Footer/>
      </Padding>
    </main>
  );
}
