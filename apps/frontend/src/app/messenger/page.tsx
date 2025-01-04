'use client';
import { useState } from 'react';

type MessageInterface = {
  type: 'SELF' | 'OTHER';
};

export default function MessengerPage() {
  const [messeges, setMesseges] = useState<string[]>([]);
  const [messege, setMessege] = useState<string>('');

  const handleSendMessege = (messege: string) => {
    if (messege) {
      setMesseges([...messeges, messege]);
      setMessege('');
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-svh w-svw bg-slate-600">
      <div className="flex justify-end items-center bg-slate-100 w-[1920px] h-[1080px] rounded-3xl overflow-hidden">
        <div className=" flex flex-col h-full bg-slate-200 w-96 overflow-hidden">
          <div className="flex h-20 bg-slate-300 m-2 rounded-xl items-center gap-2 p-2">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <span className="text-slate-700 font-bold">WEG 236</span>
            <span className="text-slate-700">Rohrbruch</span>
          </div>
          <div className="flex h-20 bg-slate-300 m-2 rounded-xl items-center gap-2 p-2">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <span className="text-slate-700 font-bold">WEG 236</span>
            <span className="text-slate-700">Rohrbruch</span>
          </div>
          <div className="relative flex h-20 bg-slate-300 m-2 rounded-xl items-center gap-2 p-2">
            <div className="flex w-fit max-w-20 relative">
              <div className="relative w-10 h-10 bg-slate-400 rounded-full border-2 aspect-square border-blue-500"></div>
              <div className="relative -left-1/4 w-10 h-10 bg-slate-400 rounded-full border-2 aspect-square border-blue-500"></div>
              <div className="relative -left-1/2 w-10 h-10 bg-slate-400 rounded-full border-2 aspect-square border-blue-500"></div>
            </div>
            <span className="text-slate-700 font-bold">WEG 236</span>
            <span className="text-slate-700">Rohrbruch</span>
            <div className="relative w-5 h-5 rounded-full bg-red-500 flex justify-center items-center -right-[70px] -top-9">
              1
            </div>
          </div>
          <div className="flex h-20 bg-slate-300 m-2 rounded-xl items-center gap-2 p-2">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <span className="text-slate-700 font-bold">WEG 236</span>
            <span className="text-slate-700">Rohrbruch</span>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-end items-end transition-all duration-500 ease-in-out">
          <div className="flex flex-col w-full h-full justify-end items-end transition-all duration-500 ease-in-out">
            <div className="flex max-w-56 h-fit text-white p-4 m-4 rounded-3xl even:text-black odd:text-white even:bg-red-500 odd:bg-blue-500">
              Hallo mama hier schicke ich dir kurz die infos über die WEG 236
            </div>

            {messeges.map((message, i) => (
              <div
                key={i}
                className="flex max-w-56 h-fit text-white p-4 m-4 rounded-3xl even:text-black odd:text-white even:bg-slate-200 odd:bg-blue-500 animate-fadeIn"
              >
                {message}
              </div>
            ))}
          </div>
          <div className="flex w-full bg-white p-6 z-10">
            <input
              type="text"
              className="w-full h-20 text-black"
              placeholder="type your message"
              onChange={(e) => setMessege(e.target.value)}
              value={messege}
            />
            <button
              className="h-14 w-14 rounded-full bg-blue-500"
              onClick={() => handleSendMessege(messege)}
            >
              ⬆︎
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// A11Y festlegen
// Image & Doc Upload
// Live Updating Messages
// Safe Messages
// Animation refine
