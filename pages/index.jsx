import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
 
export default function Home() {
  return (
    <main>
      <Loader show />
      <Link href="/testLink">link to /testLink</Link>
      <button onClick={() => toast.success("hello toast!")}>Toast me</button>
    </main>
  );
}
