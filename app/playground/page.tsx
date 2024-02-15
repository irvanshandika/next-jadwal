/* eslint-disable react/no-unescaped-entities */
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
import MaterialSymbolsInfo from "@icons/MaterialSymbolsInfo";
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
          <div className="bg-yellow-50 border w-full border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500" role="alert">
            <div className="grid justify-center">
              <div className="flex justify-center">
                <svg className="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <h3 className="text-xl ml-2 font-semibold">Perhatian !</h3>
              </div>
              <div className="ms-4">
                <p className="mt-1 text-sm text-yellow-700">Harap Melakukan Simpan Kode Yang Telah Dibuat Agar</p>
                <p className="mt-1 text-sm text-yellow-700">Tidak Hilang Ketika Tidak Sengaja Merefresh Halaman.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div key={item.id} className="rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active">
              <div className="flex space-x-2">
                <button
                  className="pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={() => toggleDropdownOpen(index)}
                  aria-expanded={dropdownStates[index]}>
                  {item.title}
                  {dropdownStates[index] ? <ArrowUp /> : <ArrowDown />}
                </button>
              </div>
              <div className={`${dropdownStates[index] ? "block" : "hidden"} w-full transition-[height] duration-300`}>
                <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                <div className="mt-3">
                  <Link href={item.url}>
                    <Button color="primary">{item.logo && <Image className={item.class} src={item.logo} fetchPriority="low" alt="Logo" />}</Button>
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
