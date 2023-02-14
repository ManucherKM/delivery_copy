import { FC } from "react";
import { EButtons } from "../enums/enums";
import { IIndexButton } from "../types/types";
import AttractiveButton from "./AttractiveButton";
import MediocreButton from "./MediocreButton";

const Button: FC<IIndexButton> = ({ children, option, ...props }) => {
  const isAttractive = option === EButtons.attractive;
  const isMediocre = option === EButtons.mediocre;

  return (
    <>
      {isAttractive && (
        <AttractiveButton {...props}>{children}</AttractiveButton>
      )}
      {isMediocre && <MediocreButton {...props}>{children}</MediocreButton>}
    </>
  );
};

export default Button;
