"use client";

import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Loader show />
      <Link href={"./about"}>to about page</Link>
    </div>
  );
}
