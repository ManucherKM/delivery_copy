import { HTMLAttributes } from "react";
import { EInput } from "../enums/enums";

interface IInput extends HTMLAttributes<HTMLInputElement> {}

interface IIndexInput extends IInput {
  option: `${EInput}`;
  // value:
}

interface IDate extends IInput {
  value: string | number | readonly string[] | undefined;
}

interface IText extends IInput {
  value: string | undefined;
}

interface IPhone extends IInput {
  value: string | undefined;
}

interface IRadio extends IInput {
  value: boolean | undefined;
}

interface ICheckbox extends IInput {
  value: string | number | readonly string[] | undefined;
}

export type { IInput, IDate, IText, IPhone, IRadio, ICheckbox, IIndexInput };
