import { FC } from "react";
import { IRadio } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Radio: FC<IRadio> = ({ ...props }) => {
  const styles = [classes.radio].join(" ");

  return <input type="radio" className={styles} {...props} />;
};

export default Radio;
