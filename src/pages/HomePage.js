import React, { useEffect } from "react";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import SiteMap from "../parts/HomePage/SiteMap";

import UseScrollAnchor from "../helpers/hooks/useAnchorScroll";
import UseModalDOM from "../helpers/hooks/useModalDOM";
import UseAsync from "../helpers/hooks/useAsync";

export default function HomePage() {
  const { data, run, isLoading } = UseAsync();

  useEffect(() => {
    run(
      fetch({
        url: "/api/categories/?page=16limit=4",
      })
    );
  }, [run]);
  UseModalDOM();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
