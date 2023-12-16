import React from "react";
import { Metadata } from "next";
import FormJadwal from "./FormJadwal";

export const metadata: Metadata = {
  title: "Tambah Jadwal",
};
function page() {
  return (
    <>
      <FormJadwal />
    </>
  );
}

export default page;
