import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import Menu from "./Menu";
import PortalPopup from "./PortalPopup";
import styles from "./Component.module.css";

type ComponentType = {
  /** Style props */
  baseMargin?: CSSProperties["margin"];
};

const Component: FunctionComponent<ComponentType> = ({ baseMargin }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const baseStyle: CSSProperties = useMemo(() => {
    return {
      margin: baseMargin,
    };
  }, [baseMargin]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className={styles.component90}>
        <div className={styles.component90Child} />
        <div className={styles.childFrame}>
          <div className={styles.basicFrame}>
            <div className={styles.shapeParent}>
              <div className={styles.shape} />
              <input
                className={styles.burgerRegular}
                type="checkbox"
                onClick={openMenu}
              />
              <img
                className={styles.subtractIcon}
                loading="eager"
                alt=""
                src="/subtract1.svg"
              />
            </div>
            <img className={styles.subtractIcon1} alt="" src="/subtract1.svg" />
          </div>
          <h3 className={styles.base} style={baseStyle}>
            Base
          </h3>
        </div>
        <div className={styles.topLevelFrame}>
          <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
          <div className={styles.childFrameParent}>
            <div className={styles.childFrame1} />
            <img
              className={styles.maskGroupIcon}
              loading="eager"
              alt=""
              src="/mask-group1@2x.png"
            />
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component;
