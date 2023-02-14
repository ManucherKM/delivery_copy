import { MouseEvent, ReactNode, HTMLAttributes } from "react";

interface IModal extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isRender: boolean;
  onClickBg: (e: MouseEvent<HTMLDivElement>) => void;
}

interface IMainBlock {
  children: ReactNode;
}

interface IRearBlock {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export type { IMainBlock, IRearBlock, IModal };
