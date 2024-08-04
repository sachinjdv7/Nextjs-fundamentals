import Link from "next/link";
import ProductCart from "../app/components/ProductCart";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import hanuman from "@/public/images/hanuman.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <ProductCart />
      <Image
        src="https://bit.ly/react-cover"
        alt="lord hanuman"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
