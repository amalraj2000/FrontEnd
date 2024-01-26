import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerForm.module.css";

type ContainerFormType = {
  dimensionCode?: string;

  /** Style props */
  menuAlignSelf?: CSSProperties["alignSelf"];
  menuHeight?: CSSProperties["height"];
  bGAlignSelf?: CSSProperties["alignSelf"];
  categoryFrameAlignSelf?: CSSProperties["alignSelf"];
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  dimensionCode,
  menuAlignSelf,
  menuHeight,
  bGAlignSelf,
  categoryFrameAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: menuAlignSelf,
      height: menuHeight,
    };
  }, [menuAlignSelf, menuHeight]);

  const menuStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: bGAlignSelf,
    };
  }, [bGAlignSelf]);

  const inputFrameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: categoryFrameAlignSelf,
    };
  }, [categoryFrameAlignSelf]);

  return (
    <div className={styles.menuWrapper} style={frameDivStyle}>
      <nav className={styles.menu} style={menuStyle}>
        <div className={styles.bg} />
        <div className={styles.inputFrame} style={inputFrameStyle}>
          <div className={styles.categoryFrame}>
            <div className={styles.dashboardFrame}>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
              <img
                className={styles.subtractIcon1}
                loading="eager"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <h3 className={styles.base}>Base</h3>
          </div>
        </div>
        <div className={styles.uploadFrame}>
          <div className={styles.ticketFrame}>
            <img
              className={styles.iconlyboldcategory}
              loading="eager"
              alt=""
              src="/iconlyboldcategory@2x.png"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.maskGroup}>
            <div className={styles.inputContainer}>
              <div className={styles.subtractFrame}>
                <img
                  className={styles.chartIcon}
                  loading="eager"
                  alt=""
                  src={dimensionCode}
                />
                <div className={styles.subtractFrameChild} />
              </div>
              <div className={styles.upload}>Upload</div>
            </div>
          </div>
        </div>
        <div className={styles.uploadFrame1}>
          <div className={styles.menuFrame}>
            <div className={styles.categoryFrame1}>
              <img
                className={styles.iconlyboldticket}
                loading="eager"
                alt=""
                src="/iconlyboldticket@2x.png"
              />
            </div>
            <div className={styles.invoice}>Invoice</div>
          </div>
        </div>
        <div className={styles.submenuFrame}>
          <div className={styles.iconDocument}>
            <img
              className={styles.iconlybolddocument}
              loading="eager"
              alt=""
              src="/iconlybolddocument@2x.png"
            />
            <div className={styles.schedule}>Schedule</div>
          </div>
        </div>
        <div className={styles.submenuFrame1}>
          <div className={styles.calendarParent}>
            <img
              className={styles.calendarIcon}
              loading="eager"
              alt=""
              src="/calendar@2x.png"
            />
            <div className={styles.calendar}>Calendar</div>
          </div>
        </div>
        <div className={styles.submenuFrame2}>
          <div className={styles.iconlyboldnotificationParent}>
            <img
              className={styles.iconlyboldnotification}
              loading="eager"
              alt=""
              src="/iconlyboldnotification@2x.png"
            />
            <div className={styles.notification}>Notification</div>
          </div>
        </div>
        <div className={styles.submenuFrame3}>
          <div className={styles.iconlyboldsettingParent}>
            <img
              className={styles.iconlyboldsetting}
              loading="eager"
              alt=""
              src="/iconlyboldsetting@2x.png"
            />
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContainerForm;
