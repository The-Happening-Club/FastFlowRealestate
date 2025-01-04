'use client';
import { useState } from 'react';

const FileUploadDropZone = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const isUploadError = true;
  return (
    <>
      <div>
        <label className="text-slate-600 font-semibold cursor-pointer">
          Dateien anhängen
          <input
            type="checkbox"
            className="ml-2"
            onChange={() => setIsOpen(!open)}
          />
        </label>
      </div>
      <div></div>
      <div
        className={`flex flex-col justify-center items-center overflow-hidden border border-slate-300 border-dashed rounded-xl bg-white ${
          open ? 'h-36 border-slate-300' : 'h-0 border-none'
        } transition-all duration-1000 ease-in-out `}
      >
        <span>
          Upload files or <input type="file" />
        </span>
      </div>
      <span className="text-slate-400 text-sm">
        Bis zu 500Mb • .pdf, .jpg, jepg, .png
      </span>
      <div>
        <span>Angehängte datein</span>
        <div className=" grid grid-flow-col auto-cols-[minmax(200px,_auto)] overflow-x-auto  bg-slate-100 rounded-xl p-4 gap-4">
          {/* grid eintragen */}
          <div className="flex flex-col h-fit px-2 py-2 rounded-xl bg-slate-300 gap-2">
            <div className="relative flex gap-2 overflow-hidden">
              <div className="h-5 w-5 bg-slate-400 rounded-md gap-2"></div>
              <span>Upload Name</span>
            </div>
            <div className="h-2 bg-slate-100 w-full rounded-full overflow-hidden">
              <div
                className={`flex h-full bg-blue-500 ${
                  isUploading ? 'w-full' : 'w-0'
                } transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col h-fit px-2 py-2 rounded-xl bg-slate-300 gap-2">
            <div className="relative flex gap-2 overflow-hidden">
              <div className="h-5 w-5 bg-slate-400 rounded-md gap-2"></div>
              <span>Upload Name</span>
            </div>
            <div className="h-2 bg-slate-100 w-full rounded-full overflow-hidden">
              <div
                className={`flex h-full bg-blue-500 ${
                  isUploading ? 'w-full bg-blue-500' : 'w-0 bg-blue-500'
                } transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col h-fit px-2 py-2 rounded-xl bg-slate-300 gap-2">
            <div className="relative flex gap-2 overflow-hidden">
              <div className="h-5 w-5 bg-slate-400 rounded-md gap-2"></div>
              <span>Upload Name</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setIsUploading(!isUploading)}>
        test
      </button>
    </>
  );
};

export default FileUploadDropZone;

// Custom Checkbox
