"use client";
import Link from "next/link";
import ProductCart from "../app/components/ProductCart";

export default function Home() {
  return (
    <main>
      Hello world
      <Link href="/users">users</Link>
      <ProductCart />
    </main>
  );
}
