import { FC } from "react";
import { EButtons } from "../enums/enums";
import { IIndexButton } from "../types/types";
import AttractiveButton from "./AttractiveButton";
import MediocreButton from "./MediocreButton";

const Button: FC<IIndexButton> = ({
  children,
  type,
  onBlur,
  onClick,
  ...props
}) => {
  const isAttractive = type === EButtons.attractive;
  const isMediocre = type === EButtons.mediocre;

  return (
    <>
      {isAttractive && (
        <AttractiveButton onBlur={onBlur} onClick={onClick} {...props}>
          {children}
        </AttractiveButton>
      )}
      {isMediocre && (
        <MediocreButton onBlur={onBlur} onClick={onClick} {...props}>
          {children}
        </MediocreButton>
      )}
    </>
  );
};

export default Button;
