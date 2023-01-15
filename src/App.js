import "./App.css";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
