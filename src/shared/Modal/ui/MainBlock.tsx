import { FC, MouseEvent } from "react";
import { IMainBlock } from "../types/types";
import classes from "../styles/Modals.module.scss";

const MainBlock: FC<IMainBlock> = ({ children, ...props }) => {
  const styles = [classes.mainBlock].join(" ");

  function clickHandler(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div onClick={clickHandler} className={styles} {...props}>
      {children}
    </div>
  );
};

export default MainBlock;
