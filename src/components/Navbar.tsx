
import Image from "next/image";
import Link from "next/link";

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className={`navbar ${inter.className}`}>
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                {/* <Image src={user?.photoURL} alt="user avatar" /> */}
              </Link>
            </li>
          </>
        )}

        {/* user is signed out OR not create username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
