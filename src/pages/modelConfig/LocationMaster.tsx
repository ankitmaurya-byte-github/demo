import React, { useContext, useEffect, useRef, useState } from "react";
import CustomizedSteppers from "../components/ui/Stepper";
import { AnimationLogo1 } from "../components/imageGif/AnimationLogo";
import SignUp from "../components/auth/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faGear,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";
import { Button } from "../../components/ui/button";
import { maincontainer } from "../Home";
import UserCredentials from "../UserCredentials";
import ModelConfiguration from "../ModelConfiguration";
import { setLocation } from "../../store/modelConfiguration/locationSlice";
import { useAppDispatch } from "../../store/reduxHooks";
import { setModelProgress } from "../../store/modelConfiguration/modelSlice";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ConfigurationCard = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg mb-4 shadow-lg">
      {/* Email Field */}
      <div>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
      {/* Email Field */}
      <div>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
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
const LocationMaster = () => {
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [navigateBack, setNavigateBack] = useState(false);
  const [numberOfLoactions, setNumberOfLoactions] = useState(3);
  const dispatch = useAppDispatch();
  // const [locations, setLocations] = useState({});
  const ref = useRef();
  const handleNavigateBack = () => {
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, ModelConfiguration]);
    mainContent.current.scrollTo({
      left: mainContent.current.scrollWidth / mainContent.pages.length,
      behavior: "smooth",
    });
  };
  const handelLocationsubmit = () => {
    if (ref.current && ref.current.children) {
      const location = {};
      Array.from(ref.current?.children || []).forEach((child, index) => {
        if (index == 0) return;
        if ("children" in child && child.children instanceof HTMLCollection) {
          const input = { location: "", latitude: "", longitude: "" };
          Array.from(child.children).forEach((nestedChild, idx) => {
            if (
              nestedChild instanceof HTMLElement &&
              nestedChild.children[0] instanceof HTMLInputElement
            ) {
              if (idx == 0) {
                input.location = nestedChild.children[0].value;
              } else if (idx == 1) {
                input.latitude = nestedChild.children[0].value;
              } else {
                input.longitude = nestedChild.children[0].value;
              }
              console.log(nestedChild.children[0].value);
            }
          });
          (location as Record<string, typeof input>)[`input${index}`] = input;
        }
      });
      dispatch(setLocation({ locations: location }));
      // dispatch(setModelProgress("location"));
      console.log(location);
      setNavigateBack((prev) => !prev);
      mainContent.setPages((prev) => [...prev, ModelConfiguration]);
      mainContent.current.scrollTo({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
    }
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
      <div className="m-auto w-[82%]">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            className="h-8 w-8 text-orange-500 mr-2"
            icon={faGears}
          />

          <h2 className="text-white text-2xl font-bold">Location Master</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg max-w-3xl w-full">
          <div className="flex mb-4  space-x-2">
            <label className="text-lg font-semibold text-gray-300">
              Enter the Number of Locations to be Created
            </label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(40,50,86)] focus:border-transparent w-[4rem]  text-gray-900"
              placeholder="e.g., 5"
              min="1"
              value={numberOfLoactions}
              onChange={(e) => setNumberOfLoactions(Number(e.target.value))}
            />
          </div>
          <div ref={ref} className="h-[27rem] overflow-auto hide-scrollbar">
            {" "}
            <div className="grid grid-cols-3 place-items-center px-4 py-2 text-2xl text-white rounded-lg mb-4 shadow-lg">
              <div>Location</div>
              <div>Latitude</div>
              <div>Longitude</div>
            </div>
            {[...Array(numberOfLoactions)].map((_, index) => (
              <ConfigurationCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className=" gap-4 flex items-center justify-center flex-col">
        <div>
          <Button
            onClick={handelLocationsubmit}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Save & Submit
          </Button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
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

export default LocationMaster;
