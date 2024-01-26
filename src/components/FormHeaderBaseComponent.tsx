import { FunctionComponent } from "react";
import styles from "./FormHeaderBaseComponent.module.css";

const FormHeaderBaseComponent: FunctionComponent = () => {
  return (
    <header className={styles.component90}>
      <div className={styles.component90Child} />
      <div className={styles.subtractParent}>
        <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
        <div className={styles.rectangleFrame}>
          <div className={styles.rectangleFrameChild} />
          <img
            className={styles.subtractIcon1}
            loading="eager"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className={styles.base}>Base</div>
      </div>
      <div className={styles.component90Item} />
    </header>
  );
};

export default FormHeaderBaseComponent;
