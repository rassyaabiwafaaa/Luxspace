import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/HomePage/SiteMap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

import Document from "../parts/Document";

// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestion from "../parts/Details/Suggestion";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </Document>
  );
}
