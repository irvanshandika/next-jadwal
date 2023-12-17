import React from "react";
import { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};
function page() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default page;
