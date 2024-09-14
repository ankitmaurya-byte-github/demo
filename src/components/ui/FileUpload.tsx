import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, ChangeEvent } from "react";

function FileUpload({
  fileType,
  fileUrl,
  changeFileUrl,
}: {
  fileType: string;
  fileUrl: string;
  changeFileUrl: (url: string) => void;
}) {
  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      console.log(e.type);
    } else if (e.type === "dragleave") {
      console.log(e.dataTransfer?.files[0]);
    }
  };

  const handleDrop = (
    event: React.DragEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0] || event.dataTransfer?.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      changeFileUrl(url);
    }
  };
  return (
    <div className="flex justify-center items-center">
      {fileUrl ? (
        <div className="mt-4">
          <p className="text-gray-800 font-semibold mb-2">File Preview:</p>
          <img
            src={fileUrl}
            alt="Preview"
            className="max-w-full h-auto border border-gray-300"
          />
        </div>
      ) : (
        <label
          draggable
          onDragEnter={handleDrag}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={handleDrop}
          className="w-1/2 aspect-square max-w-md p-2 border-2 border-dashed rounded-3xl cursor-pointer border-gray-400 bg-gray-200 text-center hover:bg-gray-400 transition duration-300"
        >
          <input
            type="file"
            accept={fileType}
            onChange={handleDrop}
            className="hidden"
          />
          <div className="text-4xl text-gray-600 mb-3">
            <FontAwesomeIcon icon={faCloudArrowUp} />
          </div>
          <p className="text-gray-800 font-semibold">
            Choose a file or drag it here.
          </p>
        </label>
      )}
    </div>
  );
}

export default FileUpload;
