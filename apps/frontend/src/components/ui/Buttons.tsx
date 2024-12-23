"use client";

import React, { FC } from "react";
interface ButtonProps {
  text: string;
  ariaLabel: string;
  onClicked?: () => void;
}
export const Button: FC<ButtonProps> = ({ text, ariaLabel, onClicked }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="w-fit h-fit px-4 py-2 min-w-32 rounded-md bg-red-500 text-white"
      onClick={onClicked}
    >
      {text}
    </button>
  );
};

export const SubmitButton: FC<ButtonProps> = ({ text, ariaLabel }) => {
  return (
    <button
      type="submit"
      aria-label={ariaLabel}
      className="w-fit h-fit px-4 py-2 min-w-32 rounded-md bg-red-500 text-white"
    >
      {text}
    </button>
  );
};

// A11Y festlegen
