import { FC } from "react";
import { ICheckbox } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Checkbox: FC<ICheckbox> = ({ ...props }) => {
  const styles = [classes.checkbox].join(" ");

  return <input className={styles} type="checkbox" {...props} />;
};

export default Checkbox;
