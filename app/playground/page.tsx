/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useMemo } from "react";
import NavigasiBar from "@components/NavigasiBar";
import Footer from "@components/Footer";
import ArrowDown from "@icons/ArrowDown";
import ArrowUp from "@icons/ArrowUp";
import { dropdownData } from "@components/dropdown";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

function Playground() {
  const [dropdownStates, setDropdownStates] = useState(dropdownData.map(() => false));

  const toggleDropdownOpen = (index: number) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const items = useMemo(() => {
    return dropdownData;
  }, []); // Make sure to add the dependency array

  return (
    <>
      <NavigasiBar />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Selamat Datang Di Playground Code</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Nikmati akses code editor yang telah disediakan.</p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Pilih salah satu code editor dibawah ini:</p>
        </div>
        <div className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div key={item.id} className="rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active">
              <button
                className="pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => toggleDropdownOpen(index)}
                aria-expanded={dropdownStates[index]}>
                {item.title}
                {dropdownStates[index] ? <ArrowUp /> : <ArrowDown />}
              </button>
              <div className={`${dropdownStates[index] ? "block" : "hidden"} w-full transition-[height] duration-300`}>
                <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                <div className="mt-3">
                  <Link href={item.url}>
                    <Button className="text-white bg-blue-500 hover:bg-blue-400">{item.logo && <Image className={item.class} src={item.logo} alt="Logo" />}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Playground;
