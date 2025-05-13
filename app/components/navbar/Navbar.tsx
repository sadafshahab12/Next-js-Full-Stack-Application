import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../auth-links/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToiggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src={
            "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          }
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          src={
            "https://static.vecteezy.com/system/resources/previews/042/127/160/non_2x/instagram-logo-on-circle-style-with-transparent-background-free-png.png"
          }
          alt="Instagram"
          width={24}
          height={24}
        />
        <Image
          src={
            "https://static.vecteezy.com/system/resources/previews/019/874/381/non_2x/tiktok-apps-icon-free-png.png"
          }
          alt="TikTok"
          width={24}
          height={24}
        />
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          }
          alt="Youtube"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.logo}>
        Sadaf Blog
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/home"}>HomePage</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
