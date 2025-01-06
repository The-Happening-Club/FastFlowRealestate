import { classed } from '@tw-classed/react';
export const BaseAnimation = 'transition-all duration-500 ease-in-out ';

export const inFocusStyle =
  'focus:outline focus:outline-2 focus:outline-primary';

export const ClassedLabel = classed('label', 'text-neutral-500 font-semibold');

export const ComboBoxWrapper = classed(
  'div',
  `relative flex flex-col cursor-pointer ${BaseAnimation}`
);

export const DropDownWrapper = classed(
  'div',
  `absolute border-neutral-100 border flex flex-col py-[12px] rounded-[16px] gap-[8px] overflow-hidden  w-full bg-white px-[6px] mt-[8px] ${BaseAnimation}`
);

export const PriorityOptionStyle =
  'flex items-center justify-between hover:bg-neutral-100 px-[6px] rounded-[4px]';
