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
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { addCategories } from "../../store/userThunks";
import { setModelProgress } from "../../store/modelConfiguration/modelSlice";
import { setCategoryStatus } from "../../store/modelConfiguration/categorySlice";

interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const ConfigurationCard = () => {
  return (
    <div className="flex h-full items-center justify-center  bg-gray-900 rounded-lg shadow-lg">
      {/* Email Field */}
      <div className="h-[70%]">
        <input
          type="email"
          id="email"
          className=" p-1 h-full text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};
const CategoryMaster = () => {
  const [numberOfCategory, setNumberOfCategory] = useState(5);
  const { status, categories, error } = useAppSelector(
    (state) => state.modelConfiguration.CategoryMaster
  );
  const dispatch = useAppDispatch();
  const ref = useRef();
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
    if (status === "idel" && ref.current) {
      const inputs = ref.current.querySelectorAll("input");
      inputs.forEach((input: { value: string }, index: number) => {
        input.value = categories[index].name;
      });
    }
    if (mainContent.current && status === "succeeded") {
      dispatch(setModelProgress("CategoryMaster"));
      dispatch(setCategoryStatus("idel"));

      mainContent.setPages((prev) => [...prev, ModelConfiguration]);
      mainContent.current.scroll({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      // console.log(mainContent.current);
      setNavigateBack(true);
    }
  }, [status]);
  const handelNavigateNext = () => {
    let categories: [{ name: string }] = [];
    if (ref.current) {
      const inputs = ref.current.querySelectorAll("input");
      inputs.forEach((input: { value: string }, index: number) => {
        categories.push({ name: input.value });
      });
      dispatch(addCategories(categories));
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
    <div className=" h-full grid grid-cols-[3fr_1fr] items-center justify-center  w-full ">
      <div className="m-auto h-[91%] ">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            className="h-8 w-8 text-orange-500 mr-2"
            icon={faGears}
          />

          <h2 className="text-white text-2xl font-bold">Category Master</h2>
        </div>
        <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg  max-w-3xl w-full">
          <div className="flex mb-4  space-x-2">
            <label className="text-lg font-semibold text-gray-300">
              Number of Category name :
            </label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(40,50,86)] focus:border-transparent w-[4rem]  text-gray-900"
              placeholder="e.g., 5"
              min="1"
              value={numberOfCategory}
              onChange={(e) => setNumberOfCategory(Number(e.target.value))}
            />
          </div>
          <div
            ref={ref}
            className="h-96 grid grid-cols-3 gap-4
          gap-y-2 overflow-y-auto auto-rows-[3.5rem] scrollbar-hide"
          >
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
              className="text-white font-bold hover:bg-gray-700 flex h-full items-center justify-between p-4 cursor-pointer bg-gray-900 rounded-lg  shadow-lg"
            >
              + Add more Category
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-4 flex justify-self-center  items-center flex-col">
        <div>
          <Button
            onClick={handelNavigateNext}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
            Review
          </Button>
        </div>
        {/* <div>
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Edit
          </Button>
        </div> */}
        <div>
          <div
            onClick={handleNavigateBack}
            className="cursor-pointer px-2rem text-yellow-600 text-center hover:text-yellow-700 font-bold"
          >
            Back to model configuration
          </div>
        </div>
        <div>
          <div
            onClick={handleNavigateBack}
            className=" cursor-pointer text-yellow-600 hover:text-yellow-700 font-bold"
          >
            <FontAwesomeIcon size="lg" icon={faCircleArrowLeft} />
            Back to main
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMaster;
