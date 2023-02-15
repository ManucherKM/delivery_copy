import { FC, MouseEvent, useRef, useEffect } from "react";
import { IClue } from "../types/types";
import { useClick } from "../hooks/useClick";
import classes from "../styles/Clue.module.scss";

const Clue: FC<IClue> = ({ children, onClick = () => {}, ...props }) => {
  const el = useRef(null);

  const styles = [classes.clue, classes.start];

  function clickHandler(e: MouseEvent<HTMLDivElement>) {
    onClick(e);
  }

  const isClick = useClick(el);

  useEffect(() => {
    if (isClick) {
      styles.push(classes.end);
    }

    console.log(isClick);
  }, [el, isClick]);

  return (
    <div
      ref={el}
      onClick={clickHandler}
      className={styles.join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Clue;
