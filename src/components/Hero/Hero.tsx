import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/illustration-hero-mobile.png"
        alt="children illustration"
        className="illustration"
      />
      <img src="/illustration-hero-left.svg" className="left" alt="left" />
      <div className="bottom flex">
        <h1>
          Get paid for the work you <span className="love">love</span> to do.
        </h1>
        <p>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you're looking to escape the rat race or set up
          side hustle, we've got you covered.
        </p>
        <img src="/icon-scroll.svg" alt="scroll" className="scroll" />
      </div>
      <img src="/illustration-hero-right.svg" className="right" alt="right" />
    </section>
  );
};

export default Hero;
