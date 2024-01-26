import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputContainer.module.css";

const InputContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading1");
  }, [navigate]);

  return (
    <section className={styles.inputContainer}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/frame-76824.svg"
        />
        <div className={styles.placeholderText}>
          <span>{`Upload your excel sheet `}</span>
          <span className={styles.here}>{`here `}</span>
        </div>
        <div className={styles.frameItem} />
      </div>
      <button
        className={styles.sizemdIconleftTypeprima}
        onClick={onSizemdIconLeftTypePrimaClick}
      >
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.value}>Upload</div>
      </button>
    </section>
  );
};

export default InputContainer;
