'use client';

import { useState, useRef, FC, useEffect } from 'react';
import { useClickOutside } from '../../../../../libs/helpers/useClickOutside';

import { classed } from '@tw-classed/react';
import { ClassedLabel, inFocusStyle } from '../styles/classedStyles';
import { ComboBoxWrapper } from '../styles/classedStyles';
import { DropDownWrapper } from '../styles/classedStyles';

import { BaseAnimation } from '../styles/classedStyles';

import { UserData } from './data/UserData';

import { ChevronToggle } from '../../../atoms/ChevronToggleIcon';
import { CheckMark } from '../../../atoms/icons/CheckMark';

const SelectWrapper = classed(
  'div',
  `flex z-20 bg-white items-center justify-between border-neutral-100 border p-[12px] rounded-[16px] gap-[16px] min-w-[144px] ${BaseAnimation}`
);

interface UserComboBoxProps {
  value: UserDataProps[];
  user: UserDataProps;
  onSelect: (value: UserDataProps[]) => void;
}
export interface UserComboBoxRef {
  reset: () => void;
}

export interface UserDataProps {
  id: string;
  name: string;
  surname: string;
  company: string;
  role: string;
}

const UserComboBox: FC<UserComboBoxProps> = ({ onSelect, value, user }) => {
  const [optionValue, setOptionValue] = useState<UserDataProps[]>(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropDownRef, () => handleClose());

  const handleSelfAssignee = () => {
    handleSelect(user);
    onSelect(optionValue);
  };

  const handleSelect = (value: UserDataProps) => {
    setOptionValue((prev) => {
      const alreadyAssigned = prev.find((assignee) => assignee.id === value.id);
      const updatedValue = alreadyAssigned
        ? prev.filter((item) => item.id !== value.id)
        : [...prev, value];
      return updatedValue;
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    onSelect(optionValue);
  };

  useEffect(() => {
    if (!Array.isArray(value)) return;
    if (value.length == 0) {
      console.log('reset');
      setOptionValue([]);
    }
  }, [value]);
  const getChevronColor = () => (isOpen ? '#cdd0d2' : '#1143d4');
  const getChevronSpin = () => (isOpen ? '0' : '180');
  return (
    <ComboBoxWrapper role="combobox" style={isOpen ? { zIndex: 99999 } : {}}>
      <div className="flex flex-col gap-[8px]">
        <ClassedLabel>
          Zuweisen{' '}
          {optionValue.every((self) => self.id !== user.id) && (
            <>
              -{' '}
              <span
                className="text-primary font-medium underline cursor-pointer"
                tabIndex={0}
                onClick={handleSelfAssignee}
                onKeyDown={(e) => e.key === 'Enter' && handleSelfAssignee}
              >
                selbst zuweisen
              </span>
            </>
          )}
        </ClassedLabel>
        <SelectWrapper
          className={`${isOpen ? inFocusStyle : ''}`}
          onClick={isOpen ? handleClose : () => setIsOpen(true)}
          onKeyDown={
            isOpen ? handleClose : (e) => e.key === 'Enter' && setIsOpen(true)
          }
          aria-expanded={isOpen}
          aria-labelledby="priority-label"
          tabIndex={0}
          ref={dropDownRef}
        >
          <span className="text-neutral-300">
            Auftrag bis zu fünf Personen zuweisen...
          </span>

          <ChevronToggle color={getChevronColor()} spin={getChevronSpin()} />
        </SelectWrapper>
      </div>

      <DropDownWrapper
        className={`${
          isOpen
            ? 'opacity-100 top-full'
            : 'opacity-0 top-0 pointer-events-none'
        }`}
      >
        {UserData.length !== 0 ? (
          UserData.map((assignee) => (
            <div
              key={assignee.id}
              className={`flex items-center justify-between hover:bg-neutral-100 px-[6px] rounded-[4px] ${BaseAnimation}`}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => handleSelect(assignee)}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(assignee)}
            >
              <div className="flex items-center gap-[8px]">
                <div className="h-10 w-10 bg-neutral-200 rounded-full"></div>
                <div className="flex flex-col">
                  <span>
                    {`${assignee.name}, 
                  ${assignee.surname}`}
                  </span>
                  <span className="text-[14px] text-neutral-300">
                    {`${assignee.role} - ${assignee.company}`}
                  </span>
                </div>
              </div>
              {optionValue.find((item) => item.id === assignee.id) && (
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
// loading Spinner
// arias und accessibility
// Error State if you add more then 5 Users
