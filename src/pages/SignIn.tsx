import { FunctionComponent } from "react";
import SignInForm from "../components/SignInForm";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.rightSide} />
      <div className={styles.frameParent}>
        <div className={styles.baseWrapper}>
          <h1 className={styles.base}>BASE</h1>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="eager"
            alt=""
            src="/vector@2x.png"
          />
          <img
            className={styles.vectorIcon1}
            loading="eager"
            alt=""
            src="/vector-1@2x.png"
          />
          <div className={styles.carbonlogoLinkedin}>
            <img
              className={styles.vectorIcon2}
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className={styles.carbonlogoDiscord}>
            <img
              className={styles.vectorIcon3}
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
            <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
          </div>
        </div>
        <div className={styles.leftSideParent}>
          <img className={styles.leftSideIcon} alt="" src="/left-side@2x.png" />
          <div className={styles.frameChild} />
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <img className={styles.subtractIcon} alt="" />
      <SignInForm />
    </div>
  );
};

export default SignIn;
