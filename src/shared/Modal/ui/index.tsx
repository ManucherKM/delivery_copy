import { FC, MouseEvent } from "react";
import { IModal } from "../types/types";
import MainBlock from "./MainBlock";
import RearBlock from "./RearBlock";

const Modal: FC<IModal> = ({ children, isRender, onClickBg, ...props }) => {
  
  function clickHandler(e: MouseEvent<HTMLDivElement>) {
    onClickBg(e);
  }

  return (
    <>
      {isRender && (
        <RearBlock onClick={clickHandler}>
          <MainBlock {...props}>{children}</MainBlock>
        </RearBlock>
      )}
    </>
  );
};

export default Modal;
