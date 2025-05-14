"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
const AuthLinks = () => {
  const status = "notAuthenticated"; // This should be replaced with actual authentication status
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href={"/login"} className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <HiMenuAlt3 size={20}/>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/home"}>HomePage</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          {status === "notAuthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
