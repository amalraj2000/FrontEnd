import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "../components/ContainerForm";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Upload.module.css";

const Upload: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
    <div className={styles.upload}>
      <div className={styles.white}>
        <div className={styles.button} />
      </div>
      <div className={styles.uploadFrame}>
        <ContainerForm
          dimensionCode="/chart1@2x.png"
          menuAlignSelf="stretch"
          menuHeight="1025px"
          bGAlignSelf="stretch"
          categoryFrameAlignSelf="stretch"
        />
      </div>
      <section className={styles.uploadInner}>
        <div className={styles.subtractFrameParent}>
          <div className={styles.subtractFrame}>
            <div className={styles.uploadCSVFrame}>
              <div className={styles.uploadCSVFrameInner}>
                <div className={styles.uploadCsvWrapper}>
                  <h3 className={styles.uploadCsv}>Upload CSV</h3>
                </div>
              </div>
            </div>
            <div className={styles.vectorNode}>
              <img
                className={styles.maskGroupNode}
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
          <FormContainer1
            dimensionCode="/frame-76821.svg"
            onSizemdIconLeftTypePrimaClick={onSizemdIconLeftTypePrimaClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Upload;
