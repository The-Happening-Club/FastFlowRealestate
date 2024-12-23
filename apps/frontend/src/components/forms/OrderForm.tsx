"use client";
import React, { useState } from "react";
import { LableDropDown, OptionInput } from "./FormInputs";
import { classed } from "@tw-classed/react";
import { Button, SubmitButton } from "../ui/Buttons";

const ClassedInputWrapper = classed("div", "flex flex-col gap-2");
const ClassedDoubleInputWrapper = classed("div", "flex gap-4");
const ClassedInputLabel = classed("label", "text-slate-900 font-semibold");

export interface OptionProps {
  value: string;
  color?: string;
}
const objektData: string[] = ["weg 239", "235 taufkirchen", "weg blabal"];

const prioData: OptionProps[] = [
  { value: "ohne", color: "bg-blue-400" },
  { value: "niedrig", color: "bg-emerald-400" },
  { value: "mittel", color: "bg-yellow-400" },
  { value: "hoch", color: "bg-red-400" },
];
const statusData: OptionProps[] = [
  { value: "aufgenommen", color: "bg-slate-400" },
  { value: "in Arbeit", color: "bg-orange-400" },
  { value: "warten", color: "bg-blue-400" },
  { value: "erledigt", color: "bg-emerald-400" },
];

const OrderForm = () => {
  const initialFormData = {
    title: "",
    discription: "",
    deadline: "",
    objekt: "",
    priority: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSetPriority = (priority: string) => {
    setFormData({ ...formData, priority });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      formData.title +
        formData.discription +
        formData.priority +
        formData.deadline
    );
    setFormData(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[600px] rounded-xl bg-slate-100 text-black p-7 gap-4 drop-shadow-lg"
    >
      <header className="text-3xl font-semibold text-slate-800">
        Neuen Auftrag anlegen
      </header>

      <OptionInput label="Objekt" optionData={objektData} />

      <ClassedInputWrapper>
        <ClassedInputLabel htmlFor="">Auftrags Titel</ClassedInputLabel>
        <input
          type="text"
          name="title"
          id="title"
          value={formData?.title}
          onChange={handleChange}
          className="px-2 py-2 rounded-md"
          required
        />
      </ClassedInputWrapper>

      <ClassedInputWrapper className="flex flex-col gap-2">
        <ClassedInputLabel htmlFor="">Kurze Beschreibung</ClassedInputLabel>
        <textarea
          name="discription"
          id="discription"
          className="resize-none px-2 py-2 rounded-md h-48"
          value={formData?.discription}
          cols={33}
          onChange={handleChange}
          required
        ></textarea>
      </ClassedInputWrapper>

      <ClassedDoubleInputWrapper>
        <ClassedInputLabel htmlFor="deadline" className="flex flex-col w-full">
          Deadline
          <input
            type="date"
            id="deadline"
            name="deadlinea"
            onChange={handleChange}
            className="px-2 py-2 rounded-md font-normal"
            required
          />
        </ClassedInputLabel>
        <ClassedInputLabel htmlFor="reminder" className="flex flex-col w-full">
          Reminder
          <input
            type="date"
            id="reminder"
            name="reminder"
            className="px-2 py-2 rounded-md font-normal"
            onChange={handleChange}
          />
        </ClassedInputLabel>
      </ClassedDoubleInputWrapper>

      <ClassedDoubleInputWrapper>
        <LableDropDown
          label="Prio"
          onSetPrio={handleSetPriority}
          options={prioData}
        />
        <LableDropDown
          label="Status"
          onSetPrio={handleSetPriority}
          options={statusData}
        />
      </ClassedDoubleInputWrapper>

      <div className="flex justify-end gap-4 pt-8">
        <SubmitButton ariaLabel="neuen Auftrag anlegen" text="Anlegen" />
        <Button ariaLabel="Auftrags Erstellung abbrechen" text="Abbrechen" />
      </div>
    </form>
  );
};

export default OrderForm;

// TO-DO:

// Derect form Inputs
// Change Inputs to Components
// Change TextArea
// Style Form
// Set Base Colors in Global CSS
// Button Componente
// Reminder Optional machen
// A11Y festlegen

/* From input? 
titel:
Types möglichkeit labels selber hinzu zufügen?
*/
