"use client";

import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Loader show />
      <Link href={"./about"}>to about page</Link>
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </main>
  );
}
