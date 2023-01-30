import styles from "../../styles/Registration.module.css";
import Image from "next/image";

export default function Registration() {
  return (
    <main className={styles.login}>
      <h1 className={styles.h1}>Create your account</h1>
      <div className={styles.divButton}>
        <button className={styles.button}>
          <Image
            src="/facebook.svg"
            alt="facebook-logo"
            width="24"
            height="24"
          />
          CONTINUE WITH FACEBOOK
        </button>
        <button className={styles.googleButton}>
          <Image src="/google.svg" alt="google-logo" width="22" height="22" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
      <p className={styles.loginEmailText}>OR LOG WITH EMAIL</p>
      <div>
        <input className={styles.input} type="text" placeholder="Your name" />
        <input className={styles.input} type="email" placeholder="Your email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Your password"
        />
      </div>
      <input className={styles.checkbox} type="checkbox" />
      <label className={styles.span}>
        I have read the <span className={styles.focus}>Privace Policy</span>
      </label>
      <div className={styles.divButton}>
        <button className={styles.button}>GET STARTED</button>
      </div>
      <p className={styles.span}>
        ALREADY HAVE AN ACCOUNT? <span className={styles.focus}>SIGN IN</span>
      </p>
    </main>
  );
}
