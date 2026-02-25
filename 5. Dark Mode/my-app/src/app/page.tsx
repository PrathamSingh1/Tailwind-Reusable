"use client";
import Image from "next/image"
import { useState } from "react"

export default function Home() { 
  const [theme, setTheme] = useState();

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative z-10 h-80 w-60 p-5 bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800 rounded-xl">
        <div className="mask-t-from-80%">
        <h1 className="text-md font-bold">Make things float in air</h1>
        <h3 className="text-sm font-medium text-nowrap mt-2 animate-marquee">Unleash the power of tailwindcss</h3>
        <Image className="mt-2 rounded-md" src="/photo.jpeg" width={180} height={180} alt="Hero Image" />
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm">Try now -</p>
          <button onClick={handleThemeChange} className="text-sm font-medium px-3 py-1.5 rounded-xl text-neutral-800 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-800">Switch Theme</button>
        </div>
        </div>
      </div>
      <Pattern />
    </div>
  )
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  )
}