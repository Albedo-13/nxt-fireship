"use client";

import Link from "next/link";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <p>Home</p>
        <Loader show />
        <Link href={"./about"}>to about page</Link>
      </main>
    </>
  );
}
