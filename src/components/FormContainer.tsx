import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploaded");
  }, [navigate]);

  return (
    <section className={styles.dashboardFrame}>
      <div className={styles.chartFrame}>
        <div className={styles.rectangleFrame}>
          <div className={styles.uploadCSVFrame}>
            <div className={styles.inputContainerFrame}>
              <div className={styles.placeholdertext}>
                <h3 className={styles.uploadCsv}>Upload CSV</h3>
              </div>
            </div>
          </div>
          <div className={styles.vectorFrame}>
            <img
              className={styles.maskGroupInstance}
              loading="eager"
              alt=""
              src="/vector1.svg"
            />
            <img
              className={styles.maskGroupIcon}
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <div className={styles.inputContainerFrame1}>
          <div className={styles.inputContainer}>
            <div className={styles.frameFrame}>
              <img
                className={styles.frameFrameIcon}
                loading="eager"
                alt=""
                src="/frame-7682.svg"
              />
              <div className={styles.placeholdertext1}>
                <div className={styles.placeholderText}>
                  upload-template.xlsx
                </div>
              </div>
              <div className={styles.frameFrameChild} />
              <div className={styles.placeholderText1}>
                <div className={styles.placeholderText2}>Remove</div>
              </div>
            </div>
            <div
              className={styles.sizemdIconleftTypeprima}
              onClick={onSizemdIconLeftTypePrimaClick}
            >
              <div className={styles.rectangle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
