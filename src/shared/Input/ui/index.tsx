import { FC } from "react";
import { EInput } from "../enums/enums";
import { IIndexInput } from "../types/types";
import Checkbox from "./Checkbox";
import Date from "./Date";
import Phone from "./Phone";
import Radio from "./Radio";
import Text from "./Text";

const Input: FC<IIndexInput> = ({ option, value, ...props }) => {
  const isDate = option === EInput.date;
  const isText = option === EInput.text;
  const isPhone = option === EInput.phone;
  const isCheckbox = option === EInput.checkbox;
  const isRadio = option === EInput.radio;

  return (
    <>
      {isDate && <Date value={value} {...props} />}
      {isText && <Text value={value} {...props} />}
      {isPhone && <Phone value={value} {...props} />}
      {isCheckbox && <Checkbox {...props} />}
      {isRadio && <Radio {...props} />}
    </>
  );
};

export default Input;
