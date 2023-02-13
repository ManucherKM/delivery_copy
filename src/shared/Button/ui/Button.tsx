import { FC } from "react";
import { IButton } from "../types/types";
import styles from "../styles/index.scss";

const Button: FC<IButton> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
