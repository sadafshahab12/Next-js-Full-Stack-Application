"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import { GoPlus, GoVideo } from "react-icons/go";
import { FaRegImage } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <GoPlus size={18} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <FaRegImage size={18} />
            </button>
            <button className={styles.addButton}>
              <LuUpload size={18} />
            </button>
            <button className={styles.addButton}>
              <GoVideo size={18} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your Story"
        />
      </div>
        <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
