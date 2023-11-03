"use client";

import Link from "next/link";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed in and has username */}
        {true && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/username`}>
                {/* <Image src={user?.photoURL} alt="user avatar" /> */}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
      <main>
        <p>Home</p>
        <Loader show />
        <Link href={"./about"}>to about page</Link>
      </main>
    </>
  );
}
