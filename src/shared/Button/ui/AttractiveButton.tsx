import { FC, MouseEvent, FocusEvent } from "react";
import { IAttractiveButton } from "../types/types";
import classes from "../styles/Buttons.module.scss";

const AttractiveButton: FC<IAttractiveButton> = ({
  children,
  onBlur = () => {},
  onClick = () => {},
  ...props
}) => {
  const styles = [classes.attractive].join();

  function clickHandler(e: MouseEvent<HTMLButtonElement>) {
    onClick(e);
  }
  function blurHandler(e: FocusEvent<HTMLButtonElement>) {
    onBlur(e);
  }

  return (
    <button
      onClick={clickHandler}
      onBlur={blurHandler}
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
};

export default AttractiveButton;
