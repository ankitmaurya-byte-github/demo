import React, { useState } from "react";
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

const ConfigurationCard = ({ title, isConfigured }) => {
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
const LocationMaster = (props: Props) => {
  const [numberOfLoactions, setNumberOfLoactions] = useState(5);
  return (
    <div className=" h-screen grid grid-cols-[3fr_1fr] items-center justify-center  w-full ">
      <div className="">
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
              className="p-2 w-2rem border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(40,50,86)] focus:border-transparent text-gray-900"
              placeholder="e.g., 5"
              min="1"
              value={numberOfLoactions}
              onChange={(e) => setNumberOfLoactions(Number(e.target.value))}
            />
          </div>
          <div className="h-[27rem] overflow-auto hide-scrollbar">
            {" "}
            {[...Array(numberOfLoactions)].map((_, index) => (
              <ConfigurationCard
                key={index}
                title={`Location ${index + 1}`}
                isConfigured={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="place-self-end mb-24 gap-4 flex flex-col">
        <div>
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Save & Submit
          </Button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Back to main
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationMaster;
