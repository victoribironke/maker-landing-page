import { useState } from "react";
import * as React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Perks from "./components/Perks/Perks";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Perks />
      <Pricing />
      <Footer />
      <a
        href="https://github.com/victoribironke/maker-landing-page"
        target="_blank"
      >
        GITHUB
      </a>
    </React.Fragment>
  );
};

export default App;
