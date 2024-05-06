import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Padding from "./components/padding";

export default function Home() {
  return (
    <main>
      <Padding>
        <Header/>
        <Projects/>
        <Footer/>
      </Padding>
    </main>
  );
}
