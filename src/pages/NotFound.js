import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import SiteMap from "../parts/HomePage/SiteMap";
import PageErrorMessage from "../parts/PageErrorMessage";

export default function NotFound() {
  return (
    <>
      <Header />

      <PageErrorMessage />

      <SiteMap />
      <Footer />
    </>
  );
}
