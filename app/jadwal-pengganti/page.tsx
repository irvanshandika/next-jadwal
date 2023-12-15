import React from "react";
import { Metadata } from "next";
import JadwalData from "./JadwalData";

export const metadata: Metadata = {
  title: "Jadwal Pengganti",
};
function page() {
  return (
    <>
      <JadwalData />
    </>
  );
}

export default page;
