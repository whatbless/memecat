import logo from "./logo.svg";
import "./global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
