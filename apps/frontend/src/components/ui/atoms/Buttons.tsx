'use client';

import React, { FC } from 'react';
interface ButtonProps {
  text: string;
  ariaLabel: string;
  bgColor: 'primary' | 'secondary';
  onClicked?: () => void;
}
export const Button: FC<ButtonProps> = ({
  text,
  ariaLabel,
  bgColor,
  onClicked,
}) => {
  let color = '';
  switch (bgColor) {
    case 'primary':
      color = 'bg-blue-500';
      break;
    case 'secondary':
      color = 'bg-slate-300 hover:bg-red-500';
      break;
    default:
      color = 'bg-slate-500';
      break;
  }
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`w-fit h-fit px-4 py-2 min-w-32 rounded-md ${color} text-white transition-colors duration-300 ease-in-out`}
      onClick={onClicked}
    >
      {text}
    </button>
  );
};

export const SubmitButton: FC<ButtonProps> = ({ text, bgColor, ariaLabel }) => {
  let color = '';
  switch (bgColor) {
    case 'primary':
      color = 'bg-blue-500 hover:bg-blue-300 hover:text-blue-500';
      break;
    case 'secondary':
      color = 'bg-red-500';
      break;
    default:
      color = 'bg-slate-500';
      break;
  }
  return (
    <button
      type="submit"
      aria-label={ariaLabel}
      className={`w-fit h-fit px-4 py-2 min-w-32 rounded-md ${color} text-white transition-colors duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

// A11Y festlegen
