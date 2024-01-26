import { FunctionComponent } from "react";
import styles from "./Popover.module.css";

type PopoverType = {
  onClose?: () => void;
};

const Popover: FunctionComponent<PopoverType> = ({ onClose }) => {
  return (
    <div className={styles.popover}>
      <div className={styles.menuItem}>
        <div className={styles.title}>Tag 1</div>
      </div>
      <div className={styles.menuItem1}>
        <div className={styles.title1}>Tag 2</div>
        <div className={styles.radioButton} />
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.title2}>Tag 3</div>
      </div>
      <div className={styles.menuItem3}>
        <div className={styles.title3}>Tag 4</div>
      </div>
      <div className={styles.menuItem4}>
        <div className={styles.title4}>Tag 5</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 6</div>
      </div>
      <div className={styles.menuItem6}>
        <div className={styles.title6}>Tag 7</div>
      </div>
      <div className={styles.menuItem7}>
        <div className={styles.title7}>Tag 8</div>
      </div>
      <div className={styles.menuItem8}>
        <div className={styles.title8}>Tag 9</div>
      </div>
      <div className={styles.menuItem9}>
        <div className={styles.title9}>Tag 10</div>
      </div>
      <div className={styles.menuItem10}>
        <div className={styles.title10}>Single line item</div>
        <div className={styles.radioButton1}>
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
};

export default Popover;
