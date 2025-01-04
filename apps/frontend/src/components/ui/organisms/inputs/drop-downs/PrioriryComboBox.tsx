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
const Option = classed('div', 'div');

const PrioriryComboBox = () => {
  return (
    <ComboBoxWrapper role="">
      <Label>Priorität*</Label>
      <Select>
        <input type="text" placeholder="Priorität" />
        <span>⬇︎</span>
      </Select>
      <DropDownWrapper>
        <div>
          <div></div>
        </div>
      </DropDownWrapper>
    </ComboBoxWrapper>
  );
};

export default PrioriryComboBox;
