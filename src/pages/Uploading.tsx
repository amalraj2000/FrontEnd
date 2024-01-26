import { FunctionComponent } from "react";
import ContainerForm from "../components/ContainerForm";
import FormContainer from "../components/FormContainer";
import styles from "./Uploading.module.css";

const Uploading: FunctionComponent = () => {
  return (
    <div className={styles.uploading}>
      <ContainerForm dimensionCode="/chart@2x.png" />
      <FormContainer />
    </div>
  );
};

export default Uploading;
