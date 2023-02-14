import { FC } from "react";
import classes from "../styles/Inputs.module.scss";
import { IDate } from "../types/types";

const Date: FC<IDate> = ({ value, ...props }) => {
  const styles = [classes.date].join(" ");

  return <input value={value} type="date" className={styles} {...props} />;
};

export default Date;
