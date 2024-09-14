import React, { useContext, useEffect, useState } from "react";
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
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";
import LocationMaster from "./modelConfig/LocationMaster";
import { maincontainer } from "./Home";
import CategoryMaster from "./modelConfig/CategoryMaster";
import PriceMaster from "./modelConfig/PriceMaster";
import InventoryNorms from "./modelConfig/InventoryNorms";
import ShipmentNorms from "./modelConfig/ShipmentNorms";
import { useAppSelector } from "../store/reduxHooks";

const ModelConfiguration = (props: Props) => {
  const {
    location,
    pricemaster,
    CategoryMaster: categorymaster,
    InventoryNorms: inventorynorms,
    ShipmentNoderm,
    locationPending,
    CategoryMasterPending,
    pricemasterPending,
    InventoryNormsPending,
    ShipmentNormPending,
  } = useAppSelector((state) => state.modelConfigProcess);
  const [navigateNext, setNavigateNext] = useState(false);
  const mainContent = useContext(maincontainer);
  const setNavigate = () => {
    setNavigateNext(true);
    mainContent.current.scrollTo({
      left: mainContent.current.scrollWidth / mainContent.pages.length,
      behavior: "smooth",
    });
  };
  const handleNavigateConfigure = (title: string) => {
    mainContent.setPages((prev) => {
      const newPages = [...prev];

      switch (title) {
        case "Location Master":
          newPages.push(LocationMaster);
          break;
        case "Category Master":
          newPages.push(CategoryMaster);
          break;
        case "Price Master":
          newPages.push(PriceMaster);
          break;
        case "Inventory Norms":
          newPages.push(InventoryNorms);
          break;
        case "Price Shipment Master":
          newPages.push(ShipmentNorms);
          break;
        default:
          console.warn(`Unknown title: ${title}`);
          return prev; // Return previous state if title is invalid
      }

      return newPages;
    });

    setNavigate();
  };
  useEffect(() => {
    if (mainContent.current && navigateNext) {
      setNavigateNext(false);
      mainContent.current.scrollTo({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });

      setTimeout(() => {
        mainContent.setPages((prev) => [...prev.slice(1)]);
      }, 1000);
    }
  }, [navigateNext]);
  const ConfigurationCard = ({
    title,
    isConfigured,
    isPending,
  }: {
    title: string;
    isConfigured: boolean;
    isPending: boolean;
  }) => {
    const [buttonHover, setButtonHover] = useState(false);
    return (
      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-white text-lg">{title}</h3>
        <div className="flex items-center">
          <button
            onClick={() => handleNavigateConfigure(title)}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none"
          >
            <FontAwesomeIcon
              className={`h-8 w-8 ${
                buttonHover ? "text-orange-950" : "text-orange-700"
              } mr-2`}
              icon={faGears}
            />
            Configure
          </button>
          {isPending && (
            <FontAwesomeIcon
              className="h-6 w-6 text-blue-400 ml-4"
              icon={faHourglassHalf}
            />
          )}
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
      <div className="h-full flex flex-col items-center justify-center bg-cover bg-center">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            className="h-8 w-8 text-orange-500 mr-2"
            icon={faGears}
          />

          <h2 className="text-white text-2xl font-bold">
            Models Configurations
          </h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg max-w-3xl flex flex-col gap-4 w-full">
          <ConfigurationCard
            title="Location Master"
            isConfigured={location}
            isPending={locationPending}
          />
          <ConfigurationCard
            title="Category Master"
            isConfigured={categorymaster}
            isPending={CategoryMasterPending}
          />
          <ConfigurationCard
            title="Price Master"
            isConfigured={pricemaster}
            isPending={pricemasterPending}
          />
          <ConfigurationCard
            title="Inventory Norms"
            isConfigured={inventorynorms}
            isPending={InventoryNormsPending}
          />
          <ConfigurationCard
            title="Price Shipment Master"
            isConfigured={ShipmentNoderm}
            isPending={ShipmentNormPending}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelConfiguration;
