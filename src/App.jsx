import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Explore from "./sections/Explore";
import GetStarted from "./sections/GetStarted";
import WhatsNew from "./sections/WhatsNew";
import World from "./sections/World";
import Insights from "./sections/Insights";
import Feedback from "./sections/Feedback";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
