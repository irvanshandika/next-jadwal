"use client";
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import ErrorComputer from "@images/404-computer.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

function NotFound() {
  return (
    <div className="grid justify-items-center items-center mt-20 font-google">
      <Image src={ErrorComputer} alt="Not Found" fetchPriority="high" />
      <h1 className="text-violet-800 font-bold text-lg">404 - Not Found!</h1>
      <p className="lg:text-lg text-sm">Sepertinya Halaman Yang Anda Cari Tidak Ditemukan.</p>
      <div className="mt-2">
        <Link href="/">
          <Button>Kembali</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
