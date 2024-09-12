import React, { useState, DragEvent, ChangeEvent } from "react";
import { ImageIcon, PlusIcon, UploadFilesIcon } from "../icons/icons";


{/* Hinzu fügen von Option die Fotos nochmal in groß anzuschauen, Icons sollen sich an den File Type anpassen */}
const DragAndDropArea = () => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files); // Convert to array
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]); // Add to existing files
      console.log("Files dropped:", droppedFiles);
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files); // Convert FileList to Array
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Add to existing files
      console.log("Files selected:", selectedFiles);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`flex flex-col justify-center items-center gap-4 bg-slate-200 rounded-xl border-2 border-dashed h-48 ${
          dragging ? "border-blue-default bg-blue-light" : "border-slate-300"
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {files.length > 0 ? (
          <div className="relative flex w-full h-full gap-4 p-4">
            {files.map((file, index) => (
              <div key={index} className="flex flex-col w-20 h-20  gap-2">

                    <div className="absolute flex bg-slate-50 rounded-full aspect-square w-5 h-5 justify-center items-center top-1 border-blue-default border-2">
                        <PlusIcon size="10" strokeColor="#4c66ff"/>
                    </div>

                <ImageIcon size="30" fillColor="#4c66ff"/>
                <div className="overflow-hidden overflow-ellipsis">
                     <span className=" whitespace-nowrap overflow-hidden overflow-ellipsis">{file.name}</span> 
                </div>
                </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-1/2 justify-center items-center">
            <UploadFilesIcon size="40" fillColor="#4c66ff" />
            <span>Drag & Drop oder klicken zum hochladen</span>
          </div>
        )}
      </div>

      {/* Hidden input for click-to-upload */}
      <input
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        multiple
        id="fileInput"
      />

      {/* Button to trigger file input */}
      <label
        htmlFor="fileInput"
        className="mt-4 cursor-pointer bg-blue-default w-48 text-center text-white px-4 py-2 rounded-md"
      >
        {files.length > 0 ? "Mehr Dateien hinzufügen" : "Datein aussuchen"}
      </label>
    </div>
  );
};

export default DragAndDropArea;