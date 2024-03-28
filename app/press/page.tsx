"use client";
import Image from "next/image";

export default function Home() {
  const fetchFlipRoute = async () => {
    const response = await fetch("/flip");
    const data = await response.json();
    console.log(data);
  };

  return (
    <main>
      <button onClick={fetchFlipRoute}>Flip</button>
    </main>
  );
}
