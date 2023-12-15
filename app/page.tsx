import React from "react";
import NavigasiBar from "@components/NavigasiBar";
import TableJadwal from "@components/Table";

export default function Home() {
  return (
    <div className="font-google-sans">
      <NavigasiBar />
      <TableJadwal />
    </div>
  );
}
