import { HTMLAttributes, MouseEvent, ReactNode } from "react";

interface IClue extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export type { IClue };
