import React from "react";
import Header from "./components/header/Header";
import Services from "./components/Services/Services";
import Realise from "./components/Realise/Realise";
import Footer from "./components/Footer/Footer";
import Copy from "./components/Copy/Copy";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Realise />
      <Footer />
      <Copy />
    </div>
  );
};

export default Home;
