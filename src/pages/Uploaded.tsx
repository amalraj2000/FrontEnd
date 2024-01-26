import { FunctionComponent, useState, useCallback } from "react";
import Popover from "../components/Popover";
import PortalPopup from "../components/PortalPopup";
import ContainerForm from "../components/ContainerForm";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Uploaded.module.css";

const Uploaded: FunctionComponent = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isPopover1Open, setPopover1Open] = useState(false);
  const [isPopover2Open, setPopover2Open] = useState(false);
  const [isPopover3Open, setPopover3Open] = useState(false);
  const [isPopover4Open, setPopover4Open] = useState(false);

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

  return (
    <>
      <div className={styles.uploaded}>
        <ContainerForm
          dimensionCode="/chart@2x.png"
          menuAlignSelf="unset"
          menuHeight="unset"
          bGAlignSelf="unset"
          categoryFrameAlignSelf="unset"
        />
        <main className={styles.uploadedInner}>
          <section className={styles.subtractParent}>
            <div className={styles.subtract}>
              <div className={styles.base}>
                <div className={styles.uploadCSV}>
                  <div className={styles.uploadCsvWrapper}>
                    <h2 className={styles.uploadCsv}>Upload CSV</h2>
                  </div>
                </div>
              </div>
              <div className={styles.chipHolderParent}>
                <img
                  className={styles.chipHolderIcon}
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
              dimensionCode="/frame-76822.svg"
              propOpacity="0.4"
            />
            <div className={styles.dataTypesContainer}>
              <div className={styles.tableRowsContainer}>
                <h2 className={styles.uploads}>Uploads</h2>
                <form className={styles.tableDemo3}>
                  <div className={styles.button}>
                    <img className={styles.icon} alt="" />
                  </div>
                  <div className={styles.tableDemo3Inner}>
                    <div className={styles.dataTypeParent}>
                      <div className={styles.dataType}>Sl No.</div>
                      <div className={styles.dataTypeWrapper}>
                        <div className={styles.dataType1}>Links</div>
                      </div>
                      <div className={styles.dataTypeContainer}>
                        <div className={styles.dataType2}>Prefix</div>
                      </div>
                      <div className={styles.dataTypeFrame}>
                        <div className={styles.dataType3}>Add Tags</div>
                      </div>
                      <div className={styles.dataType4}>Selected Tags</div>
                    </div>
                  </div>
                  <div className={styles.leftContainers}>
                    <div className={styles.tableRow}>
                      <div className={styles.checkbox}>
                        <div className={styles.box} />
                      </div>
                      <div className={styles.dataTypes}>
                        <div className={styles.dataType5}>01</div>
                        <div className={styles.frameDiv}>
                          <a
                            className={styles.dataType6}
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className={styles.dataTypeWrapper1}>
                          <div className={styles.dataType7}>prefixsample</div>
                        </div>
                        <div className={styles.chipHolder}>
                          <div className={styles.dataType8}>Select Tags</div>
                          <div className={styles.button1} onClick={openPopover}>
                            <img
                              className={styles.controlsIcon}
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.leftContainer}>
                        <button className={styles.label}>
                          <div className={styles.labelText}>TAG 1</div>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className={styles.label1}>
                          <div className={styles.labelText1}>TAG 2</div>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className={styles.label2}>
                          <div className={styles.labelText2}>TAG 3</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className={styles.label3}>
                          <div className={styles.labelText3}>TAG 4</div>
                          <img
                            className={styles.icon4}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className={styles.label4}>
                          <div className={styles.labelText4}>your label</div>
                          <img className={styles.icon5} alt="" />
                        </div>
                        <div className={styles.label5}>
                          <div className={styles.labelText5}>your label</div>
                          <img className={styles.icon6} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.popoverMenu}>
                    <div className={styles.tableRow1}>
                      <div className={styles.checkbox1}>
                        <div className={styles.box1} />
                      </div>
                      <div className={styles.dataTypeGroup}>
                        <div className={styles.dataType9}>02</div>
                        <div className={styles.dataTypeWrapper2}>
                          <a
                            className={styles.dataType10}
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className={styles.dataTypeWrapper3}>
                          <div className={styles.dataType11}>prefixsample</div>
                        </div>
                        <div className={styles.chipHolder1}>
                          <div className={styles.dataType12}>Select Tags</div>
                          <div
                            className={styles.button2}
                            onClick={openPopover1}
                          >
                            <img
                              className={styles.controlsIcon1}
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.leftContainer1}>
                        <button className={styles.label6}>
                          <div className={styles.labelText6}>TAG 1</div>
                          <img
                            className={styles.icon7}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className={styles.label7}>
                          <div className={styles.labelText7}>TAG 2</div>
                          <img
                            className={styles.icon8}
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className={styles.label8}>
                          <div className={styles.labelText8}>your label</div>
                          <img className={styles.icon9} alt="" />
                        </div>
                        <div className={styles.label9}>
                          <div className={styles.labelText9}>your label</div>
                          <img className={styles.icon10} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableDemo3Child}>
                    <div className={styles.tableRowParent}>
                      <div className={styles.tableRow2}>
                        <div className={styles.checkbox2}>
                          <div className={styles.box2} />
                        </div>
                        <div className={styles.dataTypeRow}>
                          <div className={styles.dataType13}>03</div>
                          <div className={styles.dataTypeWrapper4}>
                            <a
                              className={styles.dataType14}
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className={styles.chipHolderFrame}>
                            <div className={styles.dataType15}>
                              prefixsample
                            </div>
                          </div>
                          <div className={styles.chipHolder2}>
                            <div className={styles.dataType16}>Select Tags</div>
                            <div
                              className={styles.button3}
                              onClick={openPopover2}
                            >
                              <img
                                className={styles.controlsIcon2}
                                alt=""
                                src="/controls.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.leftContainer2}>
                          <button className={styles.label10}>
                            <div className={styles.labelText10}>TAG 1</div>
                            <img
                              className={styles.icon11}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className={styles.label11}>
                            <div className={styles.labelText11}>TAG 2</div>
                            <img
                              className={styles.icon12}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className={styles.label12}>
                            <div className={styles.labelText12}>TAG 3</div>
                            <img
                              className={styles.icon13}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className={styles.label13}>
                            <div className={styles.labelText13}>TAG 4</div>
                            <img
                              className={styles.icon14}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className={styles.label14}>
                            <div className={styles.labelText14}>your label</div>
                            <img className={styles.icon15} alt="" />
                          </div>
                          <div className={styles.label15}>
                            <div className={styles.labelText15}>your label</div>
                            <img className={styles.icon16} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.tableRow3}>
                        <div className={styles.checkbox3}>
                          <div className={styles.box3} />
                        </div>
                        <div className={styles.dataTypeParent1}>
                          <div className={styles.dataType17}>04</div>
                          <div className={styles.dataTypeWrapper5}>
                            <a
                              className={styles.dataType18}
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className={styles.dataTypeWrapper6}>
                            <div className={styles.dataType19}>
                              prefixsample
                            </div>
                          </div>
                          <div className={styles.chipHolder3}>
                            <div className={styles.dataType20}>Select Tags</div>
                            <input
                              className={styles.button4}
                              type="checkbox"
                              onClick={openPopover3}
                            />
                          </div>
                        </div>
                        <div className={styles.leftContainer3}>
                          <button className={styles.label16}>
                            <div className={styles.labelText16}>TAG 1</div>
                            <img
                              className={styles.icon17}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className={styles.label17}>
                            <div className={styles.labelText17}>your label</div>
                            <img className={styles.icon18} alt="" />
                          </div>
                          <div className={styles.label18}>
                            <div className={styles.labelText18}>your label</div>
                            <img className={styles.icon19} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.tableRow4}>
                        <div className={styles.checkbox4}>
                          <div className={styles.box4} />
                        </div>
                        <div className={styles.dataTypeParent2}>
                          <div className={styles.dataType21}>05</div>
                          <div className={styles.dataTypeWrapper7}>
                            <a
                              className={styles.dataType22}
                              href="https://www.google.com"
                              target="_blank"
                            >
                              www.google.com
                            </a>
                          </div>
                          <div className={styles.dataTypeWrapper8}>
                            <div className={styles.dataType23}>
                              prefixsample
                            </div>
                          </div>
                          <div className={styles.chipHolder4}>
                            <div className={styles.dataType24}>Select Tags</div>
                            <div
                              className={styles.button5}
                              onClick={openPopover4}
                            >
                              <img
                                className={styles.controlsIcon3}
                                alt=""
                                src="/controls.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.leftContainer4}>
                          <button className={styles.label19}>
                            <div className={styles.labelText19}>TAG 1</div>
                            <img
                              className={styles.icon20}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className={styles.label20}>
                            <div className={styles.labelText20}>TAG 2</div>
                            <img
                              className={styles.icon21}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <button className={styles.label21}>
                            <div className={styles.labelText21}>TAG 3</div>
                            <img
                              className={styles.icon22}
                              alt=""
                              src="/icon-2.svg"
                            />
                          </button>
                          <div className={styles.label22}>
                            <div className={styles.labelText22}>your label</div>
                            <img className={styles.icon23} alt="" />
                          </div>
                          <div className={styles.label23}>
                            <div className={styles.labelText23}>your label</div>
                            <img className={styles.icon24} alt="" />
                          </div>
                        </div>
                      </div>
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
                        <button className={styles.menuItem5}>
                          <div className={styles.title5}>Tag 6</div>
                        </button>
                        <button className={styles.menuItem6}>
                          <div className={styles.title6}>Tag 7</div>
                        </button>
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
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
    </>
  );
};

export default Uploaded;
