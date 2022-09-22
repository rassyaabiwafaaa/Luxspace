import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import SiteMap from "../parts/HomePage/SiteMap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestion from "../parts/Details/Suggestion";

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
            url: "/cart",
            name: "Shopping Cart",
          },
        ]}
      />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </>
  );
}
