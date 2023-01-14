import "./App.css";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
