import { FC } from "react";
import { ICheckbox } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Checkbox: FC<ICheckbox> = ({ value, ...props }) => {
  const styles = [classes.checkbox].join(" ");

  return <input value={value} className={styles} type="checkbox" {...props} />;
};

export default Checkbox;
