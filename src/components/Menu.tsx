import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

type MenuType = {
  onClose?: () => void;
};

const Menu: FunctionComponent<MenuType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/upload1");
  }, [navigate]);

  return (
    <div className={styles.menu}>
      <div className={styles.frameRoot}>
        <div className={styles.subtractParent}>
          <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          <img
            className={styles.subtractIcon1}
            loading="eager"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className={styles.baseFrame}>
          <div className={styles.base}>Base</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.plusIcon}
            loading="eager"
            alt=""
            src="/plus.svg"
          />
        </div>
      </div>
      <section className={styles.dashboardFrame}>
        <div className={styles.calendarFrame}>
          <div className={styles.categoryIcon}>
            <img
              className={styles.iconlyboldcategory}
              loading="eager"
              alt=""
              src="/iconlyboldcategory@2x.png"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <button
            className={styles.uploadAreaParent}
            onClick={onGroupButtonClick}
          >
            <div className={styles.uploadArea}>
              <img
                className={styles.iconlyboldchart}
                alt=""
                src="/iconlyboldchart@2x.png"
              />
            </div>
            <div className={styles.upload}>Upload</div>
            <div className={styles.frameItem} />
          </button>
          <div className={styles.ticketIcon}>
            <div className={styles.documentFrame}>
              <img
                className={styles.iconlyboldticket}
                loading="eager"
                alt=""
                src="/iconlyboldticket1@2x.png"
              />
            </div>
            <div className={styles.invoice}>Invoice</div>
          </div>
        </div>
      </section>
      <section className={styles.scheduleFrame}>
        <div className={styles.settingFrame}>
          <div className={styles.documentCalendar}>
            <img
              className={styles.iconlybolddocument}
              loading="eager"
              alt=""
              src="/iconlybolddocument@2x.png"
            />
            <div className={styles.schedule}>Schedule</div>
          </div>
          <div className={styles.documentCalendar1}>
            <img
              className={styles.calendarIcon}
              loading="eager"
              alt=""
              src="/calendar1@2x.png"
            />
            <div className={styles.calendar}>Calendar</div>
          </div>
          <div className={styles.documentCalendar2}>
            <img
              className={styles.iconlyboldnotification}
              loading="eager"
              alt=""
              src="/iconlyboldnotification@2x.png"
            />
            <div className={styles.notification}>Notification</div>
          </div>
          <div className={styles.documentCalendar3}>
            <img
              className={styles.iconlyboldsetting}
              loading="eager"
              alt=""
              src="/iconlyboldsetting1@2x.png"
            />
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
