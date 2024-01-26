import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormWithEmailAddressAndButtons.module.css";

const FormWithEmailAddressAndButtons: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload1");
  }, [navigate]);

  return (
    <form className={styles.whiteButtonApple}>
      <div className={styles.frameParent}>
        <button className={styles.whiteParent}>
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
        <button className={styles.whiteGroup}>
          <div className={styles.white1}>
            <div className={styles.button1} />
          </div>
          <img className={styles.apple1Icon} alt="" src="/apple-1@2x.png" />
          <div className={styles.signInWith1}>Sign in with Apple</div>
        </button>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <div className={styles.emailAddress}>
          <div className={styles.emailAddress1}>Email address</div>
          <div className={styles.frameWhiteButtonGoogle}>
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
        <div className={styles.cardParentEmailAddress}>
          <div className={styles.password}>Password</div>
          <div className={styles.buttonPrimaryInstance}>
            <div className={styles.input} />
            <div className={styles.signInButton}>
              <input
                className={styles.input1}
                placeholder="••••••••"
                type="text"
              />
              <div className={styles.signInButtonChild} />
            </div>
          </div>
        </div>
        <div className={styles.forgotPasswordWrapper}>
          <div className={styles.forgotPassword}>Forgot password?</div>
        </div>
        <button className={styles.discordLogoFrame}>
          <div className={styles.buttonPrimary}>
            <div
              className={styles.buttonPrimary1}
              onClick={onButtonPrimaryClick}
            />
          </div>
          <b className={styles.signIn}>Sign In</b>
        </button>
      </div>
      <div className={styles.dontHaveAnContainer}>
        <p className={styles.dontHaveAn}>{`Don’t have an account? `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.registerHere}>Register here</p>
      </div>
    </form>
  );
};

export default FormWithEmailAddressAndButtons;
