import { FC } from "react";
import { IAttractiveButton } from "../types/types";
import classes from "../styles/Buttons.module.scss";

const AttractiveButton: FC<IAttractiveButton> = ({ children, ...props }) => {
  const styles = [classes.attractive].join(" ");

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default AttractiveButton;
