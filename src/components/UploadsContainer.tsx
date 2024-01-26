import { FunctionComponent, useState, useCallback } from "react";
import Popover from "./Popover";
import PortalPopup from "./PortalPopup";
import styles from "./UploadsContainer.module.css";

const UploadsContainer: FunctionComponent = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isPopover1Open, setPopover1Open] = useState(false);
  const [isPopover2Open, setPopover2Open] = useState(false);
  const [isPopover3Open, setPopover3Open] = useState(false);
  const [isPopover4Open, setPopover4Open] = useState(false);
  const [isPopover5Open, setPopover5Open] = useState(false);

  const openPopover = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  const openPopover1 = useCallback(() => {
    setPopover1Open(true);
  }, []);

  const closePopover1 = useCallback(() => {
    setPopover1Open(false);
  }, []);

  const openPopover2 = useCallback(() => {
    setPopover2Open(true);
  }, []);

  const closePopover2 = useCallback(() => {
    setPopover2Open(false);
  }, []);

  const openPopover3 = useCallback(() => {
    setPopover3Open(true);
  }, []);

  const closePopover3 = useCallback(() => {
    setPopover3Open(false);
  }, []);

  const openPopover4 = useCallback(() => {
    setPopover4Open(true);
  }, []);

  const closePopover4 = useCallback(() => {
    setPopover4Open(false);
  }, []);

  const openPopover5 = useCallback(() => {
    setPopover5Open(true);
  }, []);

  const closePopover5 = useCallback(() => {
    setPopover5Open(false);
  }, []);

  return (
    <>
      <section className={styles.sizeMdIconLeftTypePrimary}>
        <b className={styles.uploads}>Uploads</b>
        <div className={styles.tableDemo3}>
          <div className={styles.dataTypeDataTypeWrapper}>
            <div className={styles.dataTypeDataType}>
              <div className={styles.dataTypes}>
                <div className={styles.dataTypeParent}>
                  <div className={styles.dataType}>Sl No.</div>
                  <div className={styles.dataType1}>01</div>
                </div>
                <div className={styles.button}>
                  <div className={styles.controls}>
                    <div className={styles.leftContainer}>
                      <div className={styles.dataType2}>Links</div>
                      <div className={styles.dataType3}>Prefix</div>
                    </div>
                  </div>
                  <div className={styles.tableRow}>
                    <a
                      className={styles.dataType4}
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className={styles.dataType5}>prefixsample</div>
                    <div className={styles.chipHolder}>
                      <div className={styles.dataType6}>Select Tags</div>
                      <div className={styles.button1} onClick={openPopover}>
                        <img className={styles.controlsIcon} alt="" />
                      </div>
                    </div>
                    <div className={styles.leftContainer1}>
                      <div className={styles.label}>
                        <div className={styles.labelText}>TAG 1</div>
                        <img className={styles.icon} alt="" />
                      </div>
                      <div className={styles.label1}>
                        <div className={styles.labelText1}>TAG 2</div>
                        <img className={styles.icon1} alt="" />
                      </div>
                      <div className={styles.label2}>
                        <div className={styles.labelText2}>TAG 3</div>
                        <img className={styles.icon2} alt="" />
                      </div>
                      <div className={styles.label3}>
                        <div className={styles.labelText3}>TAG 4</div>
                        <img className={styles.icon3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dataType7}>Add Tags</div>
              </div>
              <div className={styles.dataType8}>Selected Tags</div>
            </div>
          </div>
          <div className={styles.column08} />
          <div className={styles.column081} />
          <div className={styles.column082} />
          <div className={styles.column083} />
          <div className={styles.rootTableFrameWrapper}>
            <div className={styles.rootTableFrame}>
              <div className={styles.rowFrame}>
                <div className={styles.dataType9}>02</div>
                <div className={styles.dataType10}>03</div>
                <div className={styles.dataType11}>04</div>
                <div className={styles.dataType12}>05</div>
                <div className={styles.dataType13}>06</div>
              </div>
              <div className={styles.chipHolderFrame}>
                <div className={styles.tableRow1}>
                  <a
                    className={styles.dataType14}
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                  <div className={styles.dataType15}>prefixsample</div>
                  <div className={styles.chipHolder1}>
                    <div className={styles.dataType16}>Select Tags</div>
                    <div className={styles.button2} onClick={openPopover1}>
                      <img className={styles.controlsIcon1} alt="" />
                    </div>
                  </div>
                  <div className={styles.leftContainer2}>
                    <div className={styles.label4}>
                      <div className={styles.labelText4}>TAG 1</div>
                      <img className={styles.icon4} alt="" />
                    </div>
                    <div className={styles.label5}>
                      <div className={styles.labelText5}>TAG 2</div>
                      <img className={styles.icon5} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow2}>
                  <a
                    className={styles.dataType17}
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                  <div className={styles.dataType18}>prefixsample</div>
                  <div className={styles.chipHolder2}>
                    <div className={styles.dataType19}>Select Tags</div>
                    <div className={styles.button3} onClick={openPopover2}>
                      <img className={styles.controlsIcon2} alt="" />
                    </div>
                  </div>
                  <div className={styles.leftContainer3}>
                    <div className={styles.label6}>
                      <div className={styles.labelText6}>TAG 1</div>
                      <img className={styles.icon6} alt="" />
                    </div>
                    <div className={styles.label7}>
                      <div className={styles.labelText7}>TAG 2</div>
                      <img className={styles.icon7} alt="" />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.labelText8}>TAG 3</div>
                      <img className={styles.icon8} alt="" />
                    </div>
                    <div className={styles.label9}>
                      <div className={styles.labelText9}>TAG 4</div>
                      <img className={styles.icon9} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow3}>
                  <a
                    className={styles.dataType20}
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                  <div className={styles.dataType21}>prefixsample</div>
                  <div className={styles.chipHolder3}>
                    <div className={styles.dataType22}>Select Tags</div>
                    <div className={styles.button4} onClick={openPopover3}>
                      <img className={styles.controlsIcon3} alt="" />
                    </div>
                  </div>
                  <div className={styles.leftContainer4}>
                    <div className={styles.label10}>
                      <div className={styles.labelText10}>TAG 1</div>
                      <img className={styles.icon10} alt="" />
                    </div>
                    <div className={styles.label11}>
                      <div className={styles.labelText11}>TAG 2</div>
                      <img className={styles.icon11} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow4}>
                  <a
                    className={styles.dataType23}
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                  <div className={styles.dataType24}>prefixsample</div>
                  <div className={styles.chipHolder4}>
                    <div className={styles.dataType25}>Select Tags</div>
                    <div className={styles.button5} onClick={openPopover4}>
                      <img className={styles.controlsIcon4} alt="" />
                    </div>
                  </div>
                  <div className={styles.leftContainer5}>
                    <div className={styles.label12}>
                      <div className={styles.labelText12}>TAG 1</div>
                      <img className={styles.icon12} alt="" />
                    </div>
                    <div className={styles.label13}>
                      <div className={styles.labelText13}>TAG 2</div>
                      <img className={styles.icon13} alt="" />
                    </div>
                    <div className={styles.label14}>
                      <div className={styles.labelText14}>TAG 3</div>
                      <img className={styles.icon14} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow5}>
                  <a
                    className={styles.dataType26}
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                  <div className={styles.dataType27}>prefixsample</div>
                  <div className={styles.chipHolder5}>
                    <div className={styles.dataType28}>Select Tags</div>
                    <div className={styles.button6} onClick={openPopover5}>
                      <img className={styles.controlsIcon5} alt="" />
                    </div>
                  </div>
                  <div className={styles.leftContainer6}>
                    <div className={styles.label15}>
                      <div className={styles.labelText15}>TAG 1</div>
                      <img className={styles.icon15} alt="" />
                    </div>
                    <div className={styles.label16}>
                      <div className={styles.labelText16}>TAG 2</div>
                      <img className={styles.icon16} alt="" />
                    </div>
                    <div className={styles.label17}>
                      <div className={styles.labelText17}>TAG 3</div>
                      <img className={styles.icon17} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isPopoverOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover}
        >
          <Popover onClose={closePopover} />
        </PortalPopup>
      )}
      {isPopover1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover1}
        >
          <Popover onClose={closePopover1} />
        </PortalPopup>
      )}
      {isPopover2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover2}
        >
          <Popover onClose={closePopover2} />
        </PortalPopup>
      )}
      {isPopover3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover3}
        >
          <Popover onClose={closePopover3} />
        </PortalPopup>
      )}
      {isPopover4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover4}
        >
          <Popover onClose={closePopover4} />
        </PortalPopup>
      )}
      {isPopover5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover5}
        >
          <Popover onClose={closePopover5} />
        </PortalPopup>
      )}
    </>
  );
};

export default UploadsContainer;
