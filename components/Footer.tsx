import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex justify-center font-bold sm:justify-start uppercase">
            Informatika Amikom
          </a>
          <p className="mt-4 text-center text-sm font-bold lg:mt-0 lg:text-right">&copy; {year} Muhammad Irvan Shandika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
