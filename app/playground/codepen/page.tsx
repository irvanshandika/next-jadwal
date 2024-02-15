import React from "react";
import { Metadata } from "next";
import NavigasiBar from "@components/NavigasiBar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Codepen",
};

function Codepen() {
  return (
    <>
      <NavigasiBar />
      <iframe className="w-full text h-[80vh] md:h-[90vh]" title="Untitled" src="https://codepen.io/irvanshandika/embed/wvRJMNz?default-tab=html%2Cresult&editable=true&theme-id=dark" loading="lazy"></iframe>
      See the Pen <a href="https://codepen.io/irvanshandika/pen/wvRJMNz">Untitled</a> by Irvan_4285 (<a href="https://codepen.io/irvanshandika">@irvanshandika</a>) on <a href="https://codepen.io">CodePen</a>.
      <Footer />
    </>
  );
}

export default Codepen;
