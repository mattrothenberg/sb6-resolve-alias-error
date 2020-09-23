import * as React from "react";
import { randomNumber } from "~/lib";

export interface ButtonProps {
  color?: string;
}

export const Button: React.FC<ButtonProps> = () => {
  return <button>{randomNumber()}</button>;
};
