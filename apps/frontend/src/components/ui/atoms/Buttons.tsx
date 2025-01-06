'use client';

import React, { FC } from 'react';
interface ButtonProps {
  text: string;
  ariaLabel: string;
  bgColor: 'primary' | 'secondary';
  disabled?: boolean;
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
      color = 'bg-primary';
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
      className={`w-fit h-fit text-[18px] px-[24px] py-[12px] font-normal min-w-32 rounded-[16px] ${color} text-white transition-colors duration-300 ease-in-out`}
      onClick={onClicked}
    >
      {text}
    </button>
  );
};

export const SubmitButton: FC<ButtonProps> = ({
  text,
  bgColor,
  ariaLabel,
  disabled,
}) => {
  let color = '';
  switch (bgColor) {
    case 'primary':
      color = 'bg-primary hover:bg-blue-300 hover:text-primary';
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
      disabled={disabled}
      className={`w-fit h-fit text-[18px] px-[24px] py-[12px] font-normal min-w-32 rounded-[16px] ${color} text-white transition-colors duration-300 ease-in-out disabled:bg-button-primary-disabled`}
    >
      {text}
    </button>
  );
};

// A11Y festlegen
