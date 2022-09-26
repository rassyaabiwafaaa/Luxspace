import React from "react";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import SiteMap from "../parts/HomePage/SiteMap";

import UseScrollAnchor from "../helpers/hooks/useAnchorScroll";
import UseModalDOM from "../helpers/hooks/useModalDOM";

export default function HomePage() {
  UseScrollAnchor();
  UseModalDOM();

  return (
    <>
      <Header theme="black" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
