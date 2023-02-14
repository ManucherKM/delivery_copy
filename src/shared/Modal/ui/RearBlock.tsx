import { FC, MouseEvent } from "react";
import { IRearBlock } from "../types/types";
import classes from "../styles/Modals.module.scss";

const RearBlock: FC<IRearBlock> = ({ children, onClick }) => {
  const styles = [classes.rearBlock].join(" ");

  function clickHandler(e: MouseEvent<HTMLDivElement>) {
    onClick(e);
  }

  return (
    <div onClick={clickHandler} className={styles}>
      {children}
    </div>
  );
};

export default RearBlock;
