import { FC } from "react";
import { ISpinner } from "../types/types";
import { ESpinner } from "../enums/enums";
import Large from "./Large";
import Medium from "./Medium";
import Small from "./Small";

const Spinner: FC<ISpinner> = ({ size }) => {
  const isLarge = size === ESpinner.large;
  const isMedium = size === ESpinner.medium;
  const isSmall = size === ESpinner.small;

  return (
    <>
      {isLarge && <Large />}
      {isMedium && <Medium />}
      {isSmall && <Small />}
    </>
  );
};

export default Spinner;
