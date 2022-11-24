import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/HomePage/SiteMap";
import PageErrorMessage from "../parts/PageErrorMessage";

import Document from "../parts/Document";

export default function NotFound() {
  return (
    <Document>
      <Header />

      <PageErrorMessage />

      <SiteMap />
      <Footer />
    </Document>
  );
}
