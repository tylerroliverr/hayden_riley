import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Padding from "./components/padding";
import Education from "./components/Education";
import Experience from "./components/Experience";
import References from "./components/References";
import Skills from "./components/Skills";
import ItemsWrapper from "./components/itemsWrapper";
import SmoothScrolling from "./components/SmoothScrolling";

export default function Home() {
  return (
    <main>
      <SmoothScrolling>
        <Padding>
          <Header />
          <ItemsWrapper>
            <Projects />
            <Education />
            <Experience />
            <References />
            <Skills />
          </ItemsWrapper>
          <Footer />
        </Padding>
      </SmoothScrolling>
    </main>
  );
}
