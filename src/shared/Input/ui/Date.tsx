import { FC } from "react";
import { IDate } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Date: FC<IDate> = ({ value, ...props }) => {
  const styles = [classes.date].join(" ");

  return <input value={value} type="date" className={styles} {...props} />;
};

export default Date;
