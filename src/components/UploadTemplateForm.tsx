import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UploadTemplateForm.module.css";

const UploadTemplateForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploaded1");
  }, [navigate]);

  return (
    <section className={styles.inputContainer}>
      <div className={styles.placeholderFrames}>
        <img
          className={styles.sizedmdIconLeftTypePrimary}
          loading="eager"
          alt=""
          src="/frame-76823.svg"
        />
        <div className={styles.placeholderText}>upload-template.xlsx</div>
        <div className={styles.placeholderText1}>Remove</div>
        <div className={styles.placeholderFramesChild} />
      </div>
      <div
        className={styles.sizemdIconleftTypeprima}
        onClick={onSizemdIconLeftTypePrimaClick}
      >
        <div className={styles.inputContainerChildren} />
      </div>
    </section>
  );
};

export default UploadTemplateForm;
