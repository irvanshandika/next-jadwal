import React from "react";
import StackBlitz from "@images/stackblitz.png";
import Codepen from "@images/codepen.png";
import CodeSandBox from "@images/codesandbox.png";

export const dropdownData = [
  {
    id: 1,
    title: "StackBlitz",
    description: "Menggunakan Stack Blitz",
    url: "/playground/stackblitz",
    logo: StackBlitz,
    class: "w-24",
  },
  {
    id: 2,
    title: "Codepen",
    description: "Menggunakan Code Codepen",
    url: "/playground/codepen",
    logo: Codepen,
    class: "w-50",
  },
  {
    id: 3,
    title: "Code Sandbox",
    description: "Menggunakan Code Sandbox",
    url: "/playground/codesandbox",
    logo: CodeSandBox,
    class: "lg:w-50 w-24",
  },
];
