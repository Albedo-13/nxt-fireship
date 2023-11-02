"use client";
import Link from "next/link";

import styles from "./about.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <p className="p">About</p>

      <Link href={"./"}>to home page</Link>
    </div>
  );
}

export default About;
