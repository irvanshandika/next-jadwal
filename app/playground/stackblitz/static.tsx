import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanila Javascript",
};

function Javascript() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <iframe src="https://stackblitz.com/edit/js-wtmdbw?embed=1&file=index.js&theme=dark" className="w-[1000px] h-[500px]"></iframe>
      </div>
    </>
  );
}

export default Javascript;
