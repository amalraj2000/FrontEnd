import { FunctionComponent } from "react";
import styles from "./UploadCSVFormContainer.module.css";

const UploadCSVFormContainer: FunctionComponent = () => {
  return (
    <section className={styles.uploadCSVText}>
      <div className={styles.inputContainerFrame}>
        <b className={styles.uploadCsv}>Upload CSV</b>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.tableDemoFrame}>
          <img
            className={styles.dataFrameRow}
            loading="eager"
            alt=""
            src="/frame-76823.svg"
          />
          <div className={styles.placeholderText}>
            <span>{`Upload your excel sheet `}</span>
            <span className={styles.here}>{`here `}</span>
          </div>
          <div className={styles.tableDemoFrameChild} />
        </div>
        <button className={styles.sizemdIconleftTypeprima}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.value}>Upload</div>
        </button>
      </div>
    </section>
  );
};

export default UploadCSVFormContainer;
