import React from "react";
import styles from "./login.module.css";
import SignIn from "../components/SignIn";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.socialButton} onClick={() => signIn("google")}>
          {" "}
          Sign in with Google
        </div> */}
        <SignIn />
        <div className={styles.socialButton}> Sign in with GitHub</div>
        <div className={styles.socialButton}> Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
