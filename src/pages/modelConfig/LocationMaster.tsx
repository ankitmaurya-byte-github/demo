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

import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { setModelProgress } from "../../store/modelConfiguration/modelSlice";
import { addLocations } from "../../store/userThunks";
import { setLocationStatus } from "../../store/modelConfiguration/locationSlice";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ConfigurationCard = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg px-8 relative  mb-2 shadow-lg">
      <div className="absolute text-white left-3">{index + 1}</div>
      {/* location Field */}
      <div>
        <input
          type="text"
          id="location"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="eg: mumbai, india"
        />
      </div>
      {/* Latitude Field */}
      <div>
        <input
          type="text"
          id="latitude"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="eg: 19°02′11.11″ N"
        />
      </div>
      {/* Longitude Field */}
      <div>
        <input
          type="text"
          id="longitude"
          className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="eg: 72°51′34.09″ E"
        />
      </div>
    </div>
  );
};
const LocationMaster = () => {
  const { status, locations, error } = useAppSelector(
    (state) => state.modelConfiguration.LocationMaster
  );
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
    if (ref.current) {
      const location: Record<
        string,
        { location: string; latitude: string; longitude: string }
      > = {};
      console.log(ref.current);
      Array.from(ref.current.children).forEach((child, index) => {
        if (index === 0) return;
        const input = {};
        const field = ["location", "latitude", "longitude"];
        Array.from(child.children).forEach((nestedChild, idx) => {
          input[field[idx]] = nestedChild.children[0].value;
        });
        location[`input${index}`] = input;
      });
      console.log(location);

      dispatch(addLocations({ locations: location }));
      // dispatch(setModelProgress("location"));
      // console.log(location);
      // setNavigateBack((prev) => !prev);
      // mainContent.setPages((prev) => [...prev, ModelConfiguration]);
      // mainContent.current.scrollTo({
      //   left: mainContent.current.scrollWidth / mainContent.pages.length,
      //   behavior: "smooth",
      // });
    }
  };
  useEffect(() => {
    if (status === "idel") {
      if (ref.current) {
        Array.from(ref.current.children).forEach((child, index) => {
          if (index === 0) return;
          if (index > Object.keys(locations).length) return;
          const input = locations[`input${index}`];
          const field = ["location", "latitude", "longitude"];
          Array.from(child.children).forEach((nestedChild, idx) => {
            if (nestedChild.children[0]) {
              nestedChild.children[0].value = input[field[idx]];
            }
          });
        });
      }
    }
    if (mainContent.current && status === "succeeded") {
      dispatch(setModelProgress("location"));
      dispatch(setLocationStatus("idel"));

      mainContent.setPages((prev) => [...prev, ModelConfiguration]);
      mainContent.current.scroll({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      // console.log(mainContent.current);
      setNavigateBack(true);
    }
  }, [status]);
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
      <div className="m-auto w-[86%]">
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
          <div ref={ref} className="h-96 overflow-auto hide-scrollbar">
            {" "}
            <div className="grid grid-cols-3 place-items-center px-4 py-2 text-2xl text-white rounded-lg mb-4 shadow-lg">
              <div>Location</div>
              <div>Latitude</div>
              <div>Longitude</div>
            </div>
            {[...Array(numberOfLoactions)].map((_, index) => (
              <ConfigurationCard index={index} key={index} />
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
