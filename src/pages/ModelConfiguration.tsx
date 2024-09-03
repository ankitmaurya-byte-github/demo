import React from "react";
import CustomizedSteppers from "../components/ui/Stepper";
import { AnimationLogo1 } from "../components/imageGif/AnimationLogo";
import { Button } from "../components/ui/button";
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

const ModelConfiguration = (props: Props) => {
  const ConfigurationCard = ({ title, isConfigured }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg mb-4 shadow-lg">
        <h3 className="text-white text-lg">{title}</h3>
        <div className="flex items-center">
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none">
            <FontAwesomeIcon
              className="h-8 w-8 text-orange-500 mr-2"
              icon={faGears}
            />
            Configure
          </button>
          {isConfigured && (
            <FontAwesomeIcon
              className="h-6 w-6 text-green-500 ml-4"
              icon={faCircleCheck}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full  w-full ">
      <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            className="h-8 w-8 text-orange-500 mr-2"
            icon={faGears}
          />

          <h2 className="text-white text-2xl font-bold">
            Models Configurations
          </h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg max-w-3xl w-full">
          <ConfigurationCard title="Location Master" isConfigured={true} />
          <ConfigurationCard title="Category Master" isConfigured={false} />
          <ConfigurationCard title="Inventory Norms" isConfigured={false} />
          <ConfigurationCard
            title="Price Shipment Master"
            isConfigured={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelConfiguration;
