'use client';

import { classed } from '@tw-classed/react';

const ComboBoxWrapper = classed('div', 'flex flex-col');
const Select = classed(
  'div',
  'flex border-neutral-100 border p-[12px] rounded-[16px]'
);
const Label = classed('label', 'text-neutral-500 font-semibold');
const DropDownWrapper = classed(
  'div',
  'flex flex-col border-neutral-100 border p-[12px] rounded-[16px]'
);

const AvatarComboBox = () => {
  return (
    <ComboBoxWrapper role="">
      <Label>Priorität*</Label>
      <Select>
        <input type="text" placeholder="Priorität" />
        <span>⬇︎</span>
      </Select>
      <DropDownWrapper>
        <input type="search" name="" id="" placeholder="suchen" />
        <div className="flex w-full h-[1px] bg-slate-400"></div>
      </DropDownWrapper>
    </ComboBoxWrapper>
  );
};

export default AvatarComboBox;
