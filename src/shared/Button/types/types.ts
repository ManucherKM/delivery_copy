import { ReactNode, MouseEvent, FocusEvent } from "react";
import { EButtons } from "../enums/enums";

interface IButton {
  children: ReactNode;
}

interface IChildButtons extends IButton {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
}

interface IIndexButton extends IChildButtons {
  type: `${EButtons}`;
}

interface IAttractiveButton extends IChildButtons {}

interface IMediocreButton extends IChildButtons {}

export type { IButton, IAttractiveButton, IMediocreButton, IIndexButton };
