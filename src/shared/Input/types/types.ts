import { HTMLAttributes } from "react";
import { EInput } from "../enums/enums";

type valueInput = string | number | readonly string[] | undefined;

interface IInput extends HTMLAttributes<HTMLInputElement> {}

interface IIndexInput extends IInput {
  option: `${EInput}`;
  value?: valueInput;
}

interface IDate extends IInput {
  value?: valueInput;
}

interface IText extends IInput {
  value?: valueInput;
}

interface IPhone extends IInput {
  value?: valueInput;
}

interface IRadio extends IInput {}

interface ICheckbox extends IInput {}

export type { IInput, IDate, IText, IPhone, IRadio, ICheckbox, IIndexInput };
