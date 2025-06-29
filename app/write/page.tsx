"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import { GoPlusCircle, GoVideo } from "react-icons/go";
import { FaRegImage } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
const WritePage = () => {
  const [open, setOpen] = useState(tr.addB);
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <GoPlusCircle size={30} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <FaRegImage size={30} />
            </button>
            <button className={styles.addButton}>
              <LuUpload size={30} />
            </button>
            <button className={styles.addButton}>
              <GoVideo size={30} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritePage;
