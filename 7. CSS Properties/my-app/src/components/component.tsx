"use client";

import React, { useState } from 'react'

const cn = (...classes: string[]) => classes.join(" ");

export const Component = () => {
  const [theme, setTheme] = useState();

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", currentTheme);
  };
  return (
    <div
      className={cn(
        "w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800",
        "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "p-8 flex flex-col items-center justify-center cursor-pointer group",
      )}
    >
      <h2
        className={cn(
          "text-2xl font-bold my-8 mb-2 tracking-tight",
          "text-neutral-800 text-shadow-lg text-shadow-neutral-700 dark:text-neutral-100 dark:text-shadow-neutral-400",
        )}
      >
        Easily modify scale with Tailwind
      </h2>
      <p className="max-w-sm mx-auto text-sm text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-400">
        This is a sample text used for testing layouts and designs in user
        interfaces It helps developers understand spacing typography and overall
        appearance without using real content data
      </p>
      <button onClick={handleThemeChange} className='mb-5 px-4 py-[1.2px] bg-neutral-500 rounded-xl text-sm text-neutral-100 cursor-pointer'>Toggle</button>
      <div
        className={cn(
          "size-60 rounded-2xl bg-neutral-100 border border-neutral-200 group-hover:bg-neutral-200 transition-all duration-200 group-hover:border-neutral-300",
          "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "shadow-2xl relative perspective-distant transform-3d",
        )}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1664451820588-eab010faa77c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={cn(
            "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
            "h-full w-full object-cover object-center rounded-2xl",
            "transform rotate-x-20 -rotate-y-20 rotate-z-20 translate-z-20",
            "group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0 group-hover:scale-80",
          )}
          alt="avatar"
        />
      </div>
    </div>
  );
}
