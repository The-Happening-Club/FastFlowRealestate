'use client';

import { useState, useRef, FC } from 'react';
import { useClickOutside } from '../../../../../libs/helpers/useClickOutside';

import { classed } from '@tw-classed/react';
import { ClassedLabel, inFocusStyle } from '../styles/classedStyles';
import { ComboBoxWrapper } from '../styles/classedStyles';
import { DropDownWrapper } from '../styles/classedStyles';

import { BaseAnimation } from '../styles/classedStyles';

import { PriorityData } from './data/PriorityData';

import { ChevronToggle } from '../../../atoms/ChevronToggleIcon';
import { CheckMark } from '../../../atoms/icons/CheckMark';
import { PriorityIndicator } from '../../../molecules/PriorityIndicator';

const SelectWrapper = classed(
  'div',
  `flex z-20 bg-white items-center justify-between border-neutral-100 border p-[12px] rounded-[16px] gap-[16px] min-w-[144px] ${BaseAnimation}`
);

const SelectValueWarapper = classed(
  'div',
  'flex items-center gap-2  ${BaseAnimation}'
);

interface UserComboBoxProps {
  value: string;
  onSelect: (value: string) => void;
}
export interface UserComboBoxRef {
  reset: () => void;
}

const UserComboBox: FC<UserComboBoxProps> = ({ onSelect, value }) => {
  const [optionValue, setOptionValue] = useState<{
    color: string;
    value: string;
  }>({ color: '', value: value });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropDownRef, () => setIsOpen(false));

  const handleSelect = (color: string, value: string) => {
    setOptionValue((prev) => ({ ...prev, color: color, value: value }));
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <ComboBoxWrapper role="combobox" style={{ zIndex: 99999 }}>
      <div className="flex flex-col gap-[8px]">
        <ClassedLabel>Priorität</ClassedLabel>
        <SelectWrapper
          className={`${isOpen ? inFocusStyle : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-labelledby="priority-label"
          tabIndex={0}
          ref={dropDownRef}
        >
          <SelectValueWarapper
            className={`${
              optionValue.value == '' ? 'text-neutral-200' : 'text-black'
            } `}
          >
            <PriorityIndicator
              color={optionValue.color}
              priority={optionValue.value}
            />
            <span>{value ? optionValue.value : 'Priotrität'}</span>
          </SelectValueWarapper>

          {isOpen ? (
            <ChevronToggle color="#cdd0d2" spin="0" />
          ) : (
            <ChevronToggle color="#1143d4" spin="180" />
          )}
        </SelectWrapper>
      </div>

      <DropDownWrapper
        className={`${
          isOpen
            ? 'opacity-100 top-full'
            : 'opacity-0 top-0 pointer-events-none'
        }`}
      >
        {PriorityData.length !== 0 ? (
          PriorityData.map((prio) => (
            <div
              key={prio.value}
              className={`flex items-center justify-between hover:bg-neutral-100 px-[6px] rounded-[4px] ${BaseAnimation}`}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => handleSelect(prio.color, prio.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleSelect(prio.color, prio.value)
              }
            >
              <div className="flex items-center gap-[8px]">
                <PriorityIndicator color={prio.color} priority={prio.value} />
                <span>{prio.value}</span>
              </div>
              {optionValue.value === prio.value && (
                <CheckMark color="#5b5c5d" size="16" />
              )}
            </div>
          ))
        ) : (
          <span>Loading Spinner</span>
        )}
      </DropDownWrapper>
    </ComboBoxWrapper>
  );
};

export default UserComboBox;

// arrow navigation
