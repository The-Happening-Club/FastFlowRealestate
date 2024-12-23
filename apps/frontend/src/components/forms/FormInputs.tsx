import React, { useState } from "react";
import { OptionProps } from "./OrderForm";

// Detect Click outside
// Chevron Down and Up
// Change Color of Option

interface OptionInputProps {
  label: string;
  optionData: string[];
}

export const OptionInput: React.FC<OptionInputProps> = ({
  optionData,
  label,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-slate-900 font-semibold">
        {label}
      </label>
      <select defaultValue="Objeke" required className="px-2 py-2 rounded-md">
        <option>--wähle ein {label}--</option>
        {optionData.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export const LableDropDown = ({
  onSetPrio,
  options,
  label,
}: {
  onSetPrio: (priority: string) => void;
  options: OptionProps[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prio, setPrio] = useState("");

  const handleSetPrio = (newPriority: string) => {
    setPrio(newPriority);
    onSetPrio(newPriority);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full">
      <label className="px-2 py-2 rounded-md font-semibold">{label}</label>
      <div className="relative bg-white w-full px-2 py-2 rounded-md">
        <div onClick={() => setIsOpen(!isOpen)}>
          {prio ? (
            <div className="flex items-center gap-2">
              <div className={`h-4 w-4 bg-blue-300 rounded-full`}></div> {prio}
            </div>
          ) : (
            `lege die ${label} fest`
          )}
        </div>
        <div className={`${isOpen ? "relative" : "hidden"}`}>
          {options.map((option, index) => (
            <div
              role="option"
              key={index}
              className="flex items-center gap-2 hover:bg-slate-300"
              id={option.value}
              onClick={() => handleSetPrio(option.value)}
            >
              <div className={`h-4 w-4 ${option.color} rounded-full`}></div>{" "}
              {option.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// A11Y festlegen
