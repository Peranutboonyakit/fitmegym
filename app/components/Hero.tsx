import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen bg-hero bg-cover bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
