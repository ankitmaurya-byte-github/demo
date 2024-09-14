import React, { useContext, useEffect, useState } from "react";
// import { CloudUploadIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleArrowLeft,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/ui/button";
import SelectDays from "../../components/ui/SelectDays";
import ModelConfiguration from "../ModelConfiguration";
import { maincontainer } from "../Home";
import InventoryNorms2 from "./InventoryNorms2";
import { Warehouse } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { addInventoryNorms } from "../../store/userThunks";
import { setInventoryNormsStatus } from "../../store/modelConfiguration/inventoryNorms";
import { setModelProgress } from "../../store/modelConfiguration/modelSlice";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const InventoryNorms = () => {
  const { status, inventoryNorms, error } = useAppSelector(
    (state) => state.modelConfiguration.InventoryNorms
  );
  const [navigateBack, setNavigateBack] = useState(false);
  const dispatch = useAppDispatch();
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const [normBasis, setNormsBasis] = useState("");
  const [level, setLevel] = useState("");
  const [days, setDays] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const handelNormBasis = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNormsBasis(event.target.value);
    if (event.target.value === "Sales Pattern") {
      setLevel("global");
    }
  };
  const handelLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(event.target.value);
    if (event.target.value === "category") {
      setWarehouse("All warehouses");
    }
  };
  const handeWareHouseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWarehouse(event.target.value);
  };
  const handelDaysChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDays(e.target.value);
  };
  const handleNavigateBack = () => {
    setNavigateBack((prev) => !prev);
    mainContent.setPages((prev) => [...prev, ModelConfiguration]);
    mainContent.current.scrollTo({
      left: mainContent.current.scrollWidth / mainContent.pages.length,
      behavior: "smooth",
    });
  };
  useEffect(() => {
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
  useEffect(() => {
    if (status === "idel") {
      setNormsBasis(inventoryNorms.normbasis);
      setLevel(inventoryNorms.level);
      setDays(inventoryNorms.days);
      setWarehouse(inventoryNorms.warehouse);
    }
    if (mainContent.current && status === "succeeded") {
      dispatch(setInventoryNormsStatus("idel"));
      dispatch(setModelProgress("InventoryNormsPending"));
      mainContent.setPages((prev) => [...prev, InventoryNorms2]);
      mainContent.current.scroll({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      // console.log(mainContent.current);
      setNavigateBack(true);
    }
  }, [status]);
  const handelSaveNorms = () => {
    dispatch(
      addInventoryNorms({ normbasis: normBasis, level, days, warehouse })
    );
  };
  return (
    <div className="grid grid-cols-[70%_30%] rounded-lg w-full self-center mx-auto">
      <div>
        <div className="flex items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Inventory Norms</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg text-white w-full mx-auto">
          <div className="grid gap-10 grid-cols-2 mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              Want to define Inventory Norms Basis:
            </h3>
            <div className="grid grid-cols-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Inventory days"
                  checked={normBasis === "Inventory days"}
                  onChange={handelNormBasis}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Inventory days</span>
              </label>
              <label className="flex mt-0 items-center">
                <input
                  type="checkbox"
                  value="Sales Pattern"
                  checked={normBasis === "Sales Pattern"}
                  onChange={handelNormBasis}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Sales Pattern</span>
              </label>
            </div>
          </div>
          <div className="grid gap-10 grid-cols-2  justify-center mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              Inventory level based on Global & Category:
            </h3>
            <div className="grid grid-cols-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="global"
                  checked={level === "global"}
                  onChange={handelLevelChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Global</span>
              </label>
              <label className="flex mt-0 items-center">
                <input
                  type="checkbox"
                  value="category"
                  checked={level === "category"}
                  onChange={handelLevelChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Category</span>
              </label>
            </div>
          </div>
          <div className="grid gap-10 grid-cols-2  justify-center mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              How many days of inventory you wanna set ?
            </h3>
            <SelectDays handleDaysChanges={handelDaysChanges} />
          </div>
          <div className="grid gap-10 grid-cols-2  justify-center mb-6">
            <h3 className="mb-4 justify-self-center text-lg font-semibold">
              Do you want to set inventory days same for all warehouses?
            </h3>
            <div className="grid grid-cols-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="All warehouses"
                  checked={warehouse === "All warehouses"}
                  onChange={handeWareHouseChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">All warehouses</span>
              </label>
              <label className="flex mt-0 items-center">
                <input
                  type="checkbox"
                  value="Diffrent for each warehouses"
                  checked={warehouse === "Diffrent for each warehouses"}
                  onChange={handeWareHouseChange}
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2">Diffrent for each warehouses</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-4 flex justify-center items-center flex-col">
        <div>
          <Button
            onClick={handelSaveNorms}
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
          <div
            onClick={handleNavigateBack}
            className="text-yellow-600 hover:text-yellow-700 font-bold"
          >
            Back to model configuration
          </div>
        </div>
        <div>
          <div
            onClick={handleNavigateBack}
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
export default InventoryNorms;
