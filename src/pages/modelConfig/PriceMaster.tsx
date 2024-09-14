import React, { useContext, useEffect, useState } from "react";
// import { CloudUploadIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/ui/button";
import ModelConfiguration from "../ModelConfiguration";
import { maincontainer } from "../Home";
import FileUpload from "../../components/ui/FileUpload";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const PriceMaster = () => {
  const [fileType, setFileType] = useState(".Xlxs");
  const [priceBasedOn, setPriceBasedOn] = useState("Ton");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const handleFileTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileType(event.target.value);
  };
  const changeFileUrl = (fileUrlFromChild: string) => {
    setFileUrl(fileUrlFromChild);
  };
  const handlePriceBasedOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceBasedOn(event.target.value);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      console.log(url);
    }
  };
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [navigateBack, setNavigateBack] = useState(false);
  const handleNavigateBack = () => {
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, ModelConfiguration]);
    mainContent.current?.scrollTo({
      left: mainContent.current.scrollWidth / mainContent.pages.length,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    console.log("navigateBack" + navigateBack);
    if (mainContent.current && navigateBack) {
      setNavigateBack((prev) => !prev);
      console.log(mainContent.pages);
      mainContent.current.scrollTo({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      setTimeout(() => {
        mainContent.setPages((prev) => prev.slice(1));
      }, 1000);
    }
  }, [navigateBack]);
  return (
    <div className=" grid grid-cols-[70%_30%] rounded-lg w-full self-center mx-auto">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Price Master</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg text-white w-full mx-auto">
          <div className="grid grid-cols-2 mb-6">
            <div className="grid grid-rows-[1fr_3fr]">
              <h3 className="  justify-self-center text-lg font-semibold">
                Upload price file:
              </h3>
              <FileUpload
                fileType={fileType}
                fileUrl={fileUrl || ""}
                changeFileUrl={changeFileUrl}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value=".Xlxs"
                  checked={fileType === ".Xlxs"}
                  onChange={handleFileTypeChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Xlxs</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value=".csv"
                  checked={fileType === ".csv"}
                  onChange={handleFileTypeChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">CSV</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value=".sql"
                  checked={fileType === ".sql"}
                  onChange={handleFileTypeChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">SQL</span>
              </label>

              <label className="mt-4 max-w-28 flex items-center bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 cursor-pointer">
                <input
                  type="file"
                  accept={fileType}
                  multiple
                  onChange={handleUpload}
                  className="hidden"
                />
                <FontAwesomeIcon icon={faCloudArrowUp} className="mr-2" />
                Upload
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2  justify-center mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              Price Based on:
            </h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Kg"
                  checked={priceBasedOn === "Kg"}
                  onChange={handlePriceBasedOnChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Kg</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Each"
                  checked={priceBasedOn === "Each"}
                  onChange={handlePriceBasedOnChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Each</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Ton"
                  checked={priceBasedOn === "Ton"}
                  onChange={handlePriceBasedOnChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Ton</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Ltrs"
                  checked={priceBasedOn === "Ltrs"}
                  onChange={handlePriceBasedOnChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Ltrs</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Case"
                  checked={priceBasedOn === "Case"}
                  onChange={handlePriceBasedOnChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Case</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-4 flex  flex-col justify-center items-center">
        <div>
          <Button
            onClick={handleNavigateBack}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Save & Submit
          </Button>
          <FontAwesomeIcon
            className="text-yellow-600"
            size="lg"
            icon={faCircleArrowRight}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className="text-yellow-600"
            size="lg"
            icon={faCircleArrowLeft}
          />
          <Button
            onClick={handleNavigateBack}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Back to main
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PriceMaster;
