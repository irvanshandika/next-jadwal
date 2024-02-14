import React from "react";
import { Metadata } from "next";
import Static from "./static";
import NavigasiBar from "@components/NavigasiBar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "StackBlitz",
};

function StackBlitz() {
  return (
    <>
      <NavigasiBar />
      <Static />
      <Footer />
    </>
  );
}

export default StackBlitz;
