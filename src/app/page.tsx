"use client";

import Link from "next/link";

// TODO: read migration guide (https://nextjs.org/docs/app/building-your-application/upgrading/from-vite)
// TODO: explore pagination and how pages work, create few

// const generateStaticParams() {

// }

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href={"./about"}>to about page</Link>
    </div>
  );
}
