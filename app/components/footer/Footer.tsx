import React from "react";
import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Sadaf Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dolor, provident quibusdam, pariatur delectus iure alias iusto cumque
          laborum eos dolore, adipisci distinctio? Pariatur ipsa dignissimos vel
          numquam distinctio sunt.
        </p>
        <div className={styles.icons}>
          <FaFacebook size={16} />
          <BsInstagram size={16} />
          <BsTiktok size={16} />
          <BsYoutube size={16} />
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
