"use client";

import { MouseEventHandler } from "react";

interface Button {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Button> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
