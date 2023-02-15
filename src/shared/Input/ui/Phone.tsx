import { FC } from "react";
import { IPhone } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Phone: FC<IPhone> = ({ value, ...props }) => {
  const styles = [classes.phone].join(" ");

  return <input type="tel" value={value} className={styles} {...props} />;
};

export default Phone;
