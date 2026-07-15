import Button from "@/components/button";
import { SVGComponent } from "@/components/svg-component";
import Test from "@/components/test";
import React from "react";

export default function Home() {
  return (
    <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col py-20">
      {/* <SVGComponent /> */}
      {/* <Button /> */}
      <Test />
    </main>
  );
}
