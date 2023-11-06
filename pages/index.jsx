import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Loader show />
      <Link href="/testLink">link to /testLink</Link>
    </div>
  );
}
