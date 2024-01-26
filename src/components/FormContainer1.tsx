import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  dimensionCode?: string;

  /** Style props */
  propOpacity?: CSSProperties["opacity"];

  /** Action props */
  onSizemdIconLeftTypePrimaClick?: () => void;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  dimensionCode,
  propOpacity,
  onSizemdIconLeftTypePrimaClick,
}) => {
  const sizemdIconLeftTypePrimaStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className={styles.inputContainerWrapper}>
      <div className={styles.inputContainer}>
        <div className={styles.placeholderText}>
          <img
            className={styles.sizeMDIconLeftTypePrimar}
            loading="eager"
            alt=""
            src={dimensionCode}
          />
          <div className={styles.placeholderText1}>
            <span>{`Drop your excel sheet here or `}</span>
            <span className={styles.browse}>browse</span>
          </div>
          <div className={styles.placeholderTextChild} />
          <div className={styles.placeholderTextItem} />
        </div>
        <button
          className={styles.sizemdIconleftTypeprima}
          onClick={onSizemdIconLeftTypePrimaClick}
          style={sizemdIconLeftTypePrimaStyle}
        >
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.value}>Upload</div>
        </button>
      </div>
    </div>
  );
};

export default FormContainer1;
