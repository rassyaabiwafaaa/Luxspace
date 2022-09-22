import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
import SiteMap from "../parts/HomePage/SiteMap";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        List={[
          {
            url: "/",
            name: "Home",
          },
          {
            url: "/categories/91234",
            name: "Office Room",
          },
          {
            url: "/categories/91234/products/7888",
            name: "Details",
          },
        ]}
      />

      <ProductDetails />
      <Suggestion />
      <SiteMap />
      <Footer />
    </>
  );
}
