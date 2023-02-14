import { FC } from "react";
import { IMediocreButton } from "../types/types";
import classes from "../styles/Buttons.module.scss";

const MediocreButton: FC<IMediocreButton> = ({ children, ...props }) => {
  const styles = [classes.mediocre].join(" ");

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default MediocreButton;
