import React from "react";
import { Metadata } from "next";
import NavigasiBar from "@components/NavigasiBar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "CodeSandBox",
};

function CodeSandBox() {
  return (
    <>
      <NavigasiBar />
      <iframe
        src="https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9"
        className="w-full h-[500px] border-0 rounded overflow-hidden"
        title="playground-code-editor"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
      <Footer />
    </>
  );
}

export default CodeSandBox;
