import React from "react";
import NavigasiBar from "@components/NavigasiBar";
import Footer from "@components/Footer";

function Tentang() {
  return (
    <>
      <NavigasiBar />
      <div className="my-40">
        <div className="grid justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Tentang</h1>
          <p className="mt-5 text-lg text-center">Web Ini Dibuat Karena Gabut :P</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tentang;
