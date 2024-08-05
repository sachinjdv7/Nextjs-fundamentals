"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <main>Hello world</main>
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </>
  );
}
