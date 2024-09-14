import React, { useContext, useEffect, useRef, useState } from "react";
import CustomizedSteppers from "../components/ui/Stepper";
import { AnimationLogo1 } from "../components/imageGif/AnimationLogo";
import SignUp from "../components/auth/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleArrowLeft,
  faCircleCheck,
  faGear,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";
import { Button } from "../../components/ui/button";
import ModelConfiguration from "../ModelConfiguration";
import { maincontainer } from "../Home";
import SalesPattern from "./SalesPattern";
import { useAppDispatch } from "../../store/reduxHooks";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ConfigurationCard = ({ index, title, isConfigured }) => {
  return (
    <div className="flex relative items-center justify-around py-2 bg-gray-900 rounded-lg shadow-lg">
      {/* warehouse Field */}
      <div className="absolute text-white left-5 font-bold">{index + 1}</div>
      <div>
        <input
          type="text"
          id="warehouse"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="ware house name"
        />
      </div>
      {/* inventory days Field */}
      <div>
        <input
          type="text"
          id="inventoryDays"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="inventory days"
        />
      </div>
    </div>
  );
};
const InventoryNorms2 = (props: Props) => {
  const [numberOfWarehouse, setNumberOfWarehouse] = useState(5);
  const dispatch = useAppDispatch();
  const ref = useRef();
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [navigateBack, setNavigateBack] = useState(false);
  const handelNavigateNext = () => {
    // dispatch()
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, SalesPattern]);
    mainContent.current?.scrollTo({
      left: mainContent.current.scrollWidth / mainContent.pages.length,
      behavior: "smooth",
    });
  };
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
    <div className=" h-full grid grid-cols-[3fr_1fr] items-center justify-center  w-full ">
      <div className="m-auto w-[82%]">
        <div className="flex items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Inventory Norms</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg max-w-3xl w-full">
          <div className="flex mb-4  space-x-2">
            <label className="text-lg font-semibold text-gray-300">
              Enter the Number of Warehouse to be Created
            </label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(40,50,86)] focus:border-transparent w-[4rem]  text-gray-900"
              placeholder="e.g., 5"
              min="1"
              value={numberOfWarehouse}
              onChange={(e) => setNumberOfWarehouse(Number(e.target.value))}
            />
          </div>
          <div
            ref={ref}
            className="h-[24rem] flex flex-col gap-2 overflow-auto hide-scrollbar"
          >
            <div className="flex mb-1">
              <div className="text-white font-bold text-xl text-center w-full">
                Warehouse Name
              </div>
              {/* Email Field */}
              <div className=" text-white text-xl text-center font-bold  w-full ">
                Inventory Days
              </div>
            </div>
            {[...Array(numberOfWarehouse)].map((_, index) => (
              <ConfigurationCard
                key={index}
                index={index}
                title={`Location ${index + 1}`}
                isConfigured={true}
              />
            ))}
            <div className="flex items-center justify-around py-2 bg-gray-900 rounded-lg shadow-lg">
              {/* warehouse Field */}
              <div className="mt-1 text-center  p-2 text-white block w-full   rounded-md shadow-sm  sm:text-sm">
                + Add more warehouse
              </div>
              {/* inventory days Field */}
              <div className="mt-1 text-center p-2 text-white block w-full   rounded-md shadow-sm sm:text-sm">
                + Add more inventory
              </div>
            </div>
            <div
              onClick={() => setNumberOfWarehouse((prev) => prev + 1)}
              className="text-white font-bold hover:bg-gray-700 flex  h-16 items-center justify-center p-4 cursor-pointer bg-gray-900 rounded-lg shadow-lg"
            >
              + Add more Category
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-4 flex justify-center items-center flex-col">
        <div>
          <Button
            onClick={handelNavigateNext}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Review
          </Button>
        </div>
        <div>
          <div
            onClick={() => handleNavigateBack(ModelConfiguration)}
            className="text-yellow-600 hover:text-yellow-700 text-center font-bold"
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

export default InventoryNorms2;
