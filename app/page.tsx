import About from "./components/About";
import Classes from "./components/Classes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Team from "./components/Team";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
    </div>
  );
};

export default HomePage;
