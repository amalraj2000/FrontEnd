import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";

const SignInForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <form className={styles.frameParent}>
      <div className={styles.signInParent}>
        <h1 className={styles.signIn}>Sign In</h1>
        <div className={styles.signInTo}>Sign in to your account</div>
      </div>
      <div className={styles.whiteButtonGoogleLinkParent}>
        <button className={styles.whiteButtonGoogleLink}>
          <div className={styles.white}>
            <div className={styles.button} />
          </div>
          <img
            className={styles.googleIcon1}
            alt=""
            src="/googleicon-1@2x.png"
          />
          <div className={styles.signInWith}>Sign in with Google</div>
        </button>
        <div className={styles.whiteButtonGoogleLink1}>
          <div className={styles.white1}>
            <div className={styles.button1} />
          </div>
          <img className={styles.apple1Icon} alt="" src="/apple-1@2x.png" />
          <input
            className={styles.signInWith1}
            placeholder="Sign in with Apple"
            type="text"
          />
        </div>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <div className={styles.passwordInputField}>
          <div className={styles.emailAddress}>Email address</div>
          <div className={styles.buttonPrimary}>
            <div className={styles.inputField}>
              <div className={styles.inputField1} />
            </div>
            <input
              className={styles.johndoegmailcom}
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className={styles.passwordParent}>
          <div className={styles.password}>Password</div>
          <div className={styles.inputParent}>
            <div className={styles.input} />
            <input
              className={styles.input1}
              placeholder="••••••••"
              type="text"
            />
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.forgotPasswordWrapper}>
          <div className={styles.forgotPassword}>Forgot password?</div>
        </div>
        <button className={styles.buttonPrimaryParent}>
          <div className={styles.buttonPrimary1}>
            <div
              className={styles.buttonPrimary2}
              onClick={onButtonPrimaryClick}
            />
          </div>
          <b className={styles.signIn1}>Sign In</b>
        </button>
      </div>
      <div className={styles.dontHaveAnAccountRegisteWrapper}>
        <div className={styles.dontHaveAnContainer}>
          <span className={styles.dontHaveAn}>{`Don’t have an account? `}</span>
          <span className={styles.registerHere}>Register here</span>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
