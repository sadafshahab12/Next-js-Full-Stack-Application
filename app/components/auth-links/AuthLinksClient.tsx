"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import { HiMenuAlt3 } from "react-icons/hi";
const AuthLinksClient = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <>
          <Link href={"/write"}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <HiMenuAlt3 size={20} />
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/home">HomePage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {isAuthenticated ? (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinksClient;
