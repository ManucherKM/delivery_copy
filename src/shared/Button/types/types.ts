import { ReactNode, HTMLAttributes } from "react";
import { EButtons } from "../enums/enums";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean | undefined;
}

interface IIndexButton extends IButton {
  option: `${EButtons}`;
}

interface IAttractiveButton extends IButton {}

interface IMediocreButton extends IButton {}

export type { IButton, IAttractiveButton, IMediocreButton, IIndexButton };
