import React, { useState } from 'react';
import { OptionProps } from './OrderForm';
import { RequiredAstrix } from './ClassedFormTags';
import { ClassedLabel } from '../ui/organisms/inputs/styles/classedStyles';
// Detect Click outside
// Chevron Down and Up
// Change Color of Option
// Detect outside click

interface OptionInputProps {
  label: string;
  optionData: string[];
  required: boolean;
  onChange: (value: string) => void;
}

//default option unavailable
export const OptionInput: React.FC<OptionInputProps> = ({
  label,
  optionData,
  required,
  onChange,
}) => {
  const [isSelected, setIsSelected] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== `wähle ein ${label}`) {
      setIsSelected(event.target.value);
      onChange(event.target.value);
      setIsError(false);
    } else {
      setIsSelected('');
      setIsError(true);
    }
  };

  return (
    <div role="wrapper" className="flex flex-col gap-2">
      <ClassedLabel htmlFor="">
        {label}
        {required ? <RequiredAstrix> *</RequiredAstrix> : ''}
      </ClassedLabel>
      <select
        required
        className={`px-[12px] py-[12px] rounded-[14px] text-[16px] border bg-white border-slate-200 h-[50px] ${
          isSelected ? '' : 'text-slate-400'
        } ${
          isError
            ? 'border focus:outline-red-500 border-red-500 text-red-500'
            : ''
        }`}
        onChange={handleChange}
      >
        <option>
          {!isError ? `wähle ein ${label}` : 'Bitte wähle eine Option aus…'}
        </option>
        {optionData.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
      <span className={`${isError ? '' : 'hidden'} text-red-500`}>
        * Sie müssen eine der Optionen auswählen!
      </span>
    </div>
  );
};

export const OptionDropDown = ({
  label,
  options,
  onSetOption,
}: {
  label: string;
  options: OptionProps[];
  onSetOption: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('');

  const handleSetPrio = (value: string) => {
    setOption(value);
    onSetOption(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full">
      <ClassedLabel>
        {label} <RequiredAstrix> *</RequiredAstrix>
      </ClassedLabel>
      <div className="relative px-[12px] py-[12px] font-light rounded-[14px] text-[16px] border bg-white border-slate-200">
        <div className="text-slate-400" onClick={() => setIsOpen(!isOpen)}>
          {option ? (
            <div className="flex items-center gap-2">
              <div className={`h-4 w-4 ${option} rounded-full`}></div> {option}
            </div>
          ) : (
            `lege die ${label} fest`
          )}
        </div>
        <div className={`${isOpen ? 'relative' : 'hidden'}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-2 hover:bg-slate-300"
              id={option.value}
              onClick={() => handleSetPrio(option.value)}
            >
              <div className={`h-4 w-4 ${option.color} rounded-full`}></div>{' '}
              {option.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// muss komplett überarbeitet werden
interface SmartAdressListOptionInputProps {
  name: string;
  email: string;
  properties: string[];
}

export const SmartAdressListOptionInput = (
  listData: [SmartAdressListOptionInputProps]
) => {
  return (
    <>
      <input type="text" placeholder="Wähle eine Adresse" />
      <datalist>
        {listData.map((option, index) => (
          <option key={index} value={option.email}>
            {option.name}
          </option>
        ))}
      </datalist>
    </>
  );
};

export const AssigneInput = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">Zuweisungen</label>

      <div>
        <input list="assignee" />
        <datalist id="assignee">
          <option value={'Andreas Sanchez Paetzmann'}>CEO</option>
          <option value={'Jesus Sanchez Gonzalez'}>CEO</option>
          <option value={'Michaela Paetzmann'}>CEO</option>
        </datalist>
      </div>
    </div>
  );
};

// A11Y festlegen
// Option label Color festlegen
// Focus Styles festlegen
// Colorway anpassen
// Placeholder color anpassen
