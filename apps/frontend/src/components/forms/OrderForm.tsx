'use client';

import React, { useState } from 'react';
import { OptionInput } from './FormInputs';
import { classed } from '@tw-classed/react';
import { Button, SubmitButton } from '../ui/atoms/Buttons';
// import { Switch } from '@headlessui/react';
import { RequiredAstrix } from './ClassedFormTags';
import FileUploadDropZone from '../ui/organisms/FileUploadDropZone';
import PriorityDropDown from '../ui/organisms/inputs/comboboxen/PriorityComboBox';
// import UserComboBox from '../ui/organisms/inputs/comboboxen/UserComboBox';
import { ClassedLabel } from '../ui/organisms/inputs/styles/classedStyles';

const ClassedInputWrapper = classed('div', 'flex flex-col gap-2');
const ClassedDoubleInputWrapper = classed('div', 'flex gap-4');
const ClassedInputLabel = classed('label', 'text-slate-600  font-semibold');
// const emailData = [
//   {
//     email: 'hanusiev@ghv.de',
//     name: 'Maria Hanusievic',
//     objekt: ['Taufkirchen - WEG534'],
//   },
//   {
//     email: 'schmidt@ghv.de',
//     name: 'Max Schmidt',
//     objekt: ['München - WEG128', 'Taufkirchen - WEG534'],
//   },
//   {
//     email: 'musterfrau@ghv.de',
//     name: 'Erika Musterfrau',
//     objekt: ['Berlin - WEG342'],
//   },
//   {
//     email: 'braun@ghv.de',
//     name: 'Lisa Braun',
//     objekt: ['Hamburg - WEG785', 'München - WEG128'],
//   },
//   {
//     email: 'meyer@ghv.de',
//     name: 'Paul Meyer',
//     objekt: ['Frankfurt - WEG214', 'Berlin - WEG342'],
//   },
//   {
//     email: 'kaufmann@ghv.de',
//     name: 'Sophia Kaufmann',
//     objekt: ['Stuttgart - WEG656'],
//   },
//   {
//     email: 'weber@ghv.de',
//     name: 'Jan Weber',
//     objekt: ['Köln - WEG423', 'Frankfurt - WEG214'],
//   },
//   {
//     email: 'leonhardt@ghv.de',
//     name: 'Clara Leonhardt',
//     objekt: ['Leipzig - WEG908', 'Hamburg - WEG785'],
//   },
//   {
//     email: 'fischer@ghv.de',
//     name: 'Markus Fischer',
//     objekt: ['Dresden - WEG511'],
//   },
//   {
//     email: 'wagner@ghv.de',
//     name: 'Nina Wagner',
//     objekt: ['Bremen - WEG719', 'Köln - WEG423'],
//   },
//   { email: 'huber@ghv.de', name: 'Karl Huber', objekt: ['Hannover - WEG333'] },
//   {
//     email: 'schneider@ghv.de',
//     name: 'Anna Schneider',
//     objekt: ['Dortmund - WEG202', 'Hannover - WEG333'],
//   },
//   {
//     email: 'vogt@ghv.de',
//     name: 'Tim Vogt',
//     objekt: ['Essen - WEG607', 'Düsseldorf - WEG405'],
//   },
//   { email: 'jung@ghv.de', name: 'Laura Jung', objekt: ['Düsseldorf - WEG405'] },
//   {
//     email: 'hoefler@ghv.de',
//     name: 'Daniel Höfler',
//     objekt: ['Nürnberg - WEG101', 'Essen - WEG607'],
//   },
//   {
//     email: 'gruber@ghv.de',
//     name: 'Monika Gruber',
//     objekt: ['Berlin - WEG342', 'Hamburg - WEG785'],
//   },
//   {
//     email: 'kraus@ghv.de',
//     name: 'Oliver Kraus',
//     objekt: ['Stuttgart - WEG656', 'Taufkirchen - WEG534'],
//   },
//   {
//     email: 'peters@ghv.de',
//     name: 'Julia Peters',
//     objekt: ['München - WEG128', 'Frankfurt - WEG214'],
//   },
//   {
//     email: 'loew@ghv.de',
//     name: 'Sebastian Löw',
//     objekt: ['Nürnberg - WEG101'],
//   },
//   {
//     email: 'schulz@ghv.de',
//     name: 'Hannah Schulz',
//     objekt: ['Hannover - WEG333', 'Leipzig - WEG908'],
//   },
// ];

export interface OptionProps {
  value: string;
  color?: string;
}
const objektData: string[] = ['weg 239', '235 taufkirchen', 'weg blabal'];

const OrderForm = () => {
  // type / interface festlegen
  const initialFormData = {
    title: '',
    discription: '',
    deadline: '',
    priority: '',
    reminder: [],
    objekt: '',
    assignee: [],
    status: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [enabled, setEnabled] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSetOption = (key: string, optionValue: string) => {
    const update = { ...formData, [key]: optionValue };
    console.log(update);
    setFormData(update);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.priority) {
      const update = { ...formData, ['priority']: 'ohne' };
      setFormData(update);
    }
    alert(
      formData.title +
        formData.discription +
        formData.priority +
        formData.deadline +
        formData.objekt +
        formData.reminder
    );
    setFormData(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[600px] rounded-xl bg-primitive-white border border-slate-200 text-black p-7 gap-[24px] drop-shadow-lg transition-all duration-500 ease-in-out"
    >
      <div className="flex w-full justify-between">
        <header className="text-3xl font-semibold  text-primary">
          Neuen Auftrag anlegen
        </header>
        <div className="relative flex group hover:gap-2 transition-all duration-500 ease-in-out cursor-pointer">
          <div className="relative left-[36px] group-hover:left-0 flex h-10 w-10 bg-slate-400 rounded-full border border-primary z-20 transition-all duration-500 ease-in-out">
            <div className="group-hover:flex relative hidden left-5 -top-1 justify-center items-center h-4 w-4 bg-slate-300 rounded-full transition-all duration-300 ease-in-out">
              x
            </div>
          </div>
          <div className="relative left-[16px] group-hover:left-0 flex h-10 w-10 bg-slate-400 rounded-full border border-primary z-10 transition-all duration-300 ease-in-out">
            <div className="group-hover:flex relative hidden left-5 -top-1 justify-center items-center h-4 w-4 bg-slate-300 rounded-full transition-all duration-300 ease-in-out">
              x
            </div>
          </div>
          <div className="relative flex h-10 w-10 bg-slate-400 rounded-full border border-primary z-0">
            <div className="group-hover:flex relative hidden left-5 -top-1 justify-center items-center h-4 w-4 bg-slate-300 rounded-full transition-all duration-300 ease-in-out">
              x
            </div>
          </div>

          {/* maximum assignee count then circle with plus sign */}
        </div>
      </div>
      <ClassedInputWrapper>
        <ClassedLabel htmlFor="">
          Auftrags Titel <RequiredAstrix> *</RequiredAstrix>
        </ClassedLabel>
        <input
          type="text"
          name="title"
          id="title"
          value={formData?.title}
          onChange={handleChange}
          className="px-[12px] py-[12px] rounded-[14px] text-[16px] border bg-white border-slate-200 focus:outline-primary"
          placeholder="Bitte füge eine Titel zu deinem Auftrag hinzu."
          required
        />
      </ClassedInputWrapper>

      <ClassedInputWrapper className="flex flex-col gap-2">
        <ClassedInputLabel htmlFor="">
          Auftrags Beschreibung <RequiredAstrix> *</RequiredAstrix>
        </ClassedInputLabel>
        <textarea
          name="discription"
          id="discription"
          className="resize-none h-48 px-[12px] py-[12px] rounded-[14px] text-[16px] border bg-white border-slate-200"
          value={formData?.discription}
          cols={33}
          onChange={handleChange}
          placeholder="Bitte füge eine Beschreibung des Auftrags hinzu."
          required
        ></textarea>
      </ClassedInputWrapper>

      <OptionInput
        label="Objekt"
        optionData={objektData}
        required={true}
        onChange={(value) => {
          handleSetOption('objekt', value);
        }}
      />

      <ClassedDoubleInputWrapper>
        <ClassedInputWrapper>
          <ClassedLabel htmlFor="deadline">Deadline</ClassedLabel>
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={handleChange}
            className="px-[12px] py-[12px] font-light rounded-[14px] text-[16px] border bg-white border-slate-200"
          />
        </ClassedInputWrapper>
        <PriorityDropDown
          value={formData.priority}
          onSelect={(value) => handleSetOption('priority', value)}
        />
        {/* <ClassedInputLabel
            htmlFor="reminder"
            className="flex flex-col w-full"
          >
            Reminder
            <input
              type="date"
              id="reminder"
              name="reminder"
              className="px-[12px] py-[12px] font-light rounded-[14px] text-[16px] border bg-white border-slate-200"
              onChange={handleChange}
            />
          </ClassedInputLabel> */}
      </ClassedDoubleInputWrapper>

      <ClassedDoubleInputWrapper>
        {/* <UserComboBox
          onSelect={(value) => handleSetOption('assignee', value)}
        /> */}
      </ClassedDoubleInputWrapper>
      <FileUploadDropZone />
      {/* <div>
          <AssigneInput />
        </div>

        <div className="flex justify-end gap-2">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <label htmlFor="">Email generieren</label>
        </div>

        <div
          className={`overflow-hidden transition-all duration-800 ease-in-out flex gap-4 ${
            enabled ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
          }`}
        >
          <input list="emails" placeholder="Suche oder tippe eine email ein" />
          <datalist id="emails">
            {emailData.map((address, index) => (
              <option key={index} value={address.email}>
                {address.name} | {address.objekt}
              </option>
            ))}
          </datalist>
          <button
            type="button"
            className="flex justify-center items-center h-8 w-8 bg-slate-400 hover:bg-primary text-white text-3xl rounded-full"
          >
            +
          </button>
          <div>emails added</div>
        </div> */}
      <div className="flex justify-end gap-4 pt-8">
        <Button
          bgColor={'secondary'}
          ariaLabel="Auftrags Erstellung abbrechen"
          text="Abbrechen"
        />
        <SubmitButton
          bgColor={'primary'}
          ariaLabel="neuen Auftrag anlegen"
          text="Anlegen"
          disabled={false}
        />

        {/* <NotificationDialog
            isErrorOrSucces={false}
            errorMessage="OOOps da ist was schiefgelaufen"
            error="404"
          /> */}
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
// errorhandling
// Success / Error Modal
// Form in ReactPDF umwandeln und als email verschicken wenn gewohlt
// aline
// Stories Schreiben
//sustainable
// custom slider
// Custom Objekte Dropdown Sortiert nach Ort
// Deadline darf beim eintragen nicht in der vergangenheit liegen
// Reminder darf nicht in der vergangengenheit liegen und muss mehrere optionen haben
// icons für accesibility
// If all inputs are valid enable button
/* From input? 
titel:
Types möglichkeit labels selber hinzu zufügen?
*/
