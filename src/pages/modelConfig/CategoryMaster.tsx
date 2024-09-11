import React, { useContext, useEffect, useState } from "react";
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

interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ConfigurationCard = ({ title, isConfigured }) => {
  return (
    <div className="flex h-16  items-center justify-between p-4 bg-gray-900 rounded-lg mb-4 shadow-lg">
      {/* Email Field */}
      <div>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};
const CategoryMaster = () => {
  const [numberOfCategory, setNumberOfCategory] = useState(5);
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [navigateBack, setNavigateBack] = useState(false);
  const handleNavigateBack = () => {
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, ModelConfiguration]);
    mainContent.current.scrollTo({
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
    <div className=" h-screen grid grid-cols-[3fr_1fr] items-center justify-center  w-full ">
      <div className="m-auto">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            className="h-8 w-8 text-orange-500 mr-2"
            icon={faGears}
          />

          <h2 className="text-white text-2xl font-bold">Category Master</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg max-w-3xl w-full">
          <div className="flex mb-4  space-x-2">
            <label className="text-lg font-semibold text-gray-300">
              Category name :
            </label>
          </div>
          <div className="h-[27rem] grid grid-cols-3 gap-4 overflow-y-auto auto-rows-[4rem] scrollbar-hide">
            {" "}
            {[...Array(numberOfCategory)].map((_, index) => (
              <ConfigurationCard
                key={index}
                title={`Category ${index + 1}`}
                isConfigured={true}
              />
            ))}
            <div
              onClick={() => setNumberOfCategory((prev) => prev + 1)}
              className="text-white font-bold hover:bg-gray-700 flex h-16 items-center justify-between p-4 cursor-pointer bg-gray-900 rounded-lg mb-4 shadow-lg"
            >
              + Add more Category
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-4 flex justify-self-center  items-center flex-col">
        <div>
          <Button
            onClick={handleNavigateBack}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Save
          </Button>
        </div>
        <div>
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Edit
          </Button>
        </div>
        <div>
          <div className="cursor-pointer px-2rem text-yellow-600 text-center hover:text-yellow-700 font-bold">
            Back to model configuration
          </div>
        </div>
        <div>
          <div className=" cursor-pointer text-yellow-600 hover:text-yellow-700 font-bold">
            <FontAwesomeIcon size="lg" icon={faCircleArrowLeft} />
            Back to main
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
