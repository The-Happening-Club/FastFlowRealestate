'use client';

import { useState, useRef, FC } from 'react';
import { useClickOutside } from '../../../../../libs/helpers/useClickOutside';

import { classed } from '@tw-classed/react';
import {
  ClassedLabel,
  inFocusStyle,
  PriorityOptionStyle,
} from '../styles/classedStyles';
import { ComboBoxWrapper } from '../styles/classedStyles';
import { DropDownWrapper } from '../styles/classedStyles';

import { BaseAnimation } from '../styles/classedStyles';

import { PriorityData } from './data/PriorityData';

import { ChevronToggle } from '../../../atoms/ChevronToggleIcon';
import { CheckMark } from '../../../atoms/icons/CheckMark';
import { PriorityIndicator } from '../../../molecules/PriorityIndicator';

const SelectWrapper = classed(
  'div',
  `flex z-20 bg-white items-center justify-between border-neutral-100 border p-[12px] rounded-[16px] gap-[16px] min-w-[164px] ${BaseAnimation}`
);

const SelectValueWarapper = classed(
  'div',
  'flex items-center gap-2  ${BaseAnimation}'
);

interface PriorityComboBoxProps {
  value: string;
  onSelect: (value: string) => void;
}
export interface PriorityComboBoxRef {
  reset: () => void;
}

const PriorityComboBox: FC<PriorityComboBoxProps> = ({ onSelect, value }) => {
  const [optionValue, setOptionValue] = useState<{
    color: string;
    value: string;
  }>({ color: value, value: value });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropDownRef, () => setIsOpen(false));

  const handleSelect = (color: string, value: string) => {
    setOptionValue((prev) => ({ ...prev, color: color, value: value }));
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <ComboBoxWrapper role="combobox" style={isOpen ? { zIndex: 99999 } : {}}>
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
            className={`${value == '' ? 'text-neutral-200' : 'text-black'} `}
          >
            <PriorityIndicator
              color={value ? optionValue.color : ''}
              priority={value ? optionValue.value : ''}
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

      {isOpen && (
        <DropDownWrapper
          className={`${
            isOpen
              ? `opacity-100 top-full outline outline-2 outline-primary`
              : 'opacity-0 top-0 pointer-events-none'
          }`}
        >
          {PriorityData.map((prio) => (
            <div
              key={prio.value}
              className={`${PriorityOptionStyle} ${BaseAnimation}`}
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
          ))}
        </DropDownWrapper>
      )}
    </ComboBoxWrapper>
  );
};

export default PriorityComboBox;

// arrow navigation
//aria labels optimazation
