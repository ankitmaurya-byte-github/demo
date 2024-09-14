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
import { maincontainer } from "../Home";
import ModelRun from "../ModelRun";
import ModelConfiguration from "../ModelConfiguration";
import { StepperProgressContext } from "../../App";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ShipmentNorms = () => {
  const { setActiveStep } = useContext(StepperProgressContext) as {
    setActiveStep: (value: React.SetStateAction<number>) => void;
  };
  const [transferBasedOn, setTransferBasedOn] = useState("");

  const handeltransferBasedOn = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransferBasedOn(event.target.value);
  };

  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [navigateBack, setNavigateBack] = useState(false);

  const handleNavigateBack = (component: React.FC) => {
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, component]);

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
      // setTimeout(() => {
      //   mainContent.current.scrollTo({
      //     left: 0,
      //     behavior: "smooth",
      //   });
      // }, 100);
      setTimeout(() => {
        mainContent.setPages((prev) => prev.slice(1));
      }, 1000);
    }
  }, [navigateBack]);
  return (
    <div className=" grid grid-cols-[70%_30%] rounded-lg w-full items-center h-full self-center mx-auto">
      <div className="h-[73%] px-16">
        <div className="flex items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Shipment Norms</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75  p-8 rounded-lg h-full text-white w-full mx-auto">
          <div className="grid grid-cols-2 mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              Transfer Based on:
            </h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="FTL"
                  checked={transferBasedOn === "FTL"}
                  onChange={handeltransferBasedOn}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">FTL</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="PTL"
                  checked={transferBasedOn === "PTL"}
                  onChange={handeltransferBasedOn}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">PTL</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Express"
                  checked={transferBasedOn === "Express"}
                  onChange={handeltransferBasedOn}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Express</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-4 flex justify-center items-center flex-col">
        <div>
          <Button
            onClick={() => {
              setActiveStep((prev: number) => prev + 1);
              handleNavigateBack(ModelRun);
            }}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Review
          </Button>
        </div>
        <div>
          <div
            onClick={() => handleNavigateBack(ModelConfiguration)}
            className="text-yellow-600 hover:text-yellow-700 font-bold"
          >
            Back to model configuration
          </div>
        </div>
        <div>
          <div
            onClick={() => handleNavigateBack(ModelConfiguration)}
            className="text-yellow-600  hover:text-yellow-700 font-bold"
          >
            <FontAwesomeIcon size="lg" icon={faCircleArrowLeft} />
            Back to main
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentNorms;
