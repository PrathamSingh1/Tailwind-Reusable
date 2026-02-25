"use client";
import Image from "next/image"
import { useState } from "react"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
        <div className="max-w-4xl mx-auto flex bg-white justify-between items-center md:mt-4 p-3 px-4 md:rounded-full border border-neutral-200 md:shadow-aceternity">
            <Image src="/globe.svg" alt="logo" width={30} height={30} />
            <div className="hidden md:flex items-center gap-2 text-sm font-semibold mr-10 text-neutral-600 hover:text-neutral-500 cursor-pointer">
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>About</h3>
                <h3>Blogs</h3>
            </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
            <span className="text-2xl">=</span>
        </button>
      {open && <div className="absolute flex justify-center inset-x-0 max-w-[90%] mx-auto top-15 bg-white rounded-md shadow-aceternity">
        <div className="md:hidden flex-col items-center gap-2 text-sm font-semibold p-4 text-neutral-600 hover:text-neutral-500 cursor-pointer">
              <h3>Home</h3>
              <h3>Contact</h3>
              <h3>About</h3>
              <h3>Blogs</h3>
          </div>
      </div>}
        </div>
    </div>
  )
}
