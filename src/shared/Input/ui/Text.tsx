import { FC } from "react";
import { IText } from "../types/types";
import classes from "../styles/Inputs.module.scss";

const Text: FC<IText> = ({ value, ...props }) => {
  const styles = [classes.text].join(" ");

  return <input type="text" value={value} className={styles} {...props} />;
};

export default Text;
