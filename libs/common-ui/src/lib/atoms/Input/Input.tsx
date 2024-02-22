import { HTMLInputTypeAttribute } from "react";
type Props = {
  label: string;
  type: HTMLInputTypeAttribute
};

export const Input = ({ label, type}: Props) => {
  return <input aria-label={label} type={type} />
};
