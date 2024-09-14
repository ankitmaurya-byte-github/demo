import React, { useContext, useEffect, useRef, useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import { Button } from "../components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { setInfo } from "../store/slice";
import ModelConfiguration from "./ModelConfiguration";
import { maincontainer } from "./Home";
import { StepperProgressContext } from "../App";
import axios from "axios";
import { addUserDetails } from "../store/userThunks";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
const UserCredentials = (props: Props) => {
  const { status, error } = useAppSelector((state) => state.information);
  const mainContent = useContext(maincontainer) as MainContainerContext;
  const { setActiveStep } = useContext(StepperProgressContext) as {
    setActiveStep: (value: React.SetStateAction<number>) => void;
  };
  const dispatch = useAppDispatch();

  const ref1 = useRef<React.LegacyRef<HTMLFormElement>>();
  const ref2 = useRef<React.LegacyRef<HTMLFormElement>>();
  const [naviagateNext, setNavigateNext] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const handelCredentialsSubmit = () => {
    const userInfo: Record<string, string> = {};
    const organisationInfo: Record<string, string> = {};
    console.log(ref2.current);
    if (ref1.current instanceof HTMLFormElement) {
      Array.from(ref1.current).forEach((element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement
        ) {
          userInfo[element.id] = element.value;
        }
      });
    }
    if (ref2.current instanceof HTMLFormElement) {
      Array.from(ref2.current).forEach((element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement ||
          element instanceof HTMLTextAreaElement
        ) {
          organisationInfo[element.id] = element.value;
        }
      });
    }
    console.log(userInfo);
    console.log(organisationInfo);

    dispatch(addUserDetails({ userInfo, organisationInfo }));
    // mainContent.setPages((prev) => [...prev, ModelConfiguration]);
    // mainContent.current.scrollTo({
    //   left: mainContent.current.scrollWidth / mainContent.pages.length,
    //   behavior: "smooth",
    // });
    // console.log(mainContent.current);
    // setNavigateNext(true);
  };
  useEffect(() => {
    if (mainContent.current && status === "succeeded") {
      mainContent.setPages((prev) => [...prev, ModelConfiguration]);
      mainContent.current.scroll({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      // console.log(mainContent.current);
      setNavigateNext(true);
    }
  }, [status]);
  useEffect(() => {
    if (mainContent.current && naviagateNext) {
      setNavigateNext(false);
      console.log(mainContent.pages);
      mainContent.current.scrollTo({
        left: mainContent.current.scrollWidth / mainContent.pages.length,
        behavior: "smooth",
      });
      setActiveStep((prev: number) => prev + 1);
      setTimeout(() => {
        mainContent.setPages((prev) => [...prev.slice(1)]);
      }, 1000);
    }
  }, [naviagateNext]);
  return (
    <div className="w-full grid gap-4 h-full  place-items-center grid-cols-[1fr_2fr_2fr] ">
      <div className="justify-center gap-4 flex flex-col">
        <div>
          <Button
            onClick={handelCredentialsSubmit}
            className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
          >
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

      {/*user information*/}
      <div className="h-full w-full  flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          User's Info
        </h2>
        <div className="bg-gray-900/75 h-[30rem] p-8 rounded-lg w-full shadow-lg max-w-sm ">
          <form ref={ref1} className="space-y-4">
            {/* username  */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            {/* first Name  */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your First Name"
              />
            </div>
            {/* Last Name  */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="lastname"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Last Name"
              />
            </div>
            {/* roles */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                Role
              </label>
              <select
                id="role"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      {/* organisationInfo /> */}
      <div className="h-full w-full  flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Organisation's Info
        </h2>
        <div className="bg-gray-900/75  h-[30rem]   p-8 rounded-lg w-full shadow-lg max-w-sm  scrollbar-hide">
          <form
            style={{ scrollbarWidth: "none" }}
            ref={ref2}
            className="space-y-4 overflow-scroll h-full scrollbar-hide"
          >
            {/* Company name Field */}
            <div>
              <label
                htmlFor="companyname"
                className="block text-sm font-medium text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your company name"
              />
            </div>
            {/* Company name Field */}
            <div>
              <label
                htmlFor="companyemail"
                className="block text-sm font-medium text-white"
              >
                Contact Email
              </label>
              <input
                type="text"
                id="companyemail"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your company Email"
              />
            </div>
            {/* address 1 Field */}
            <div>
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-white"
              >
                Address 1
              </label>
              <textarea
                id="address1"
                className="mt-1 resize-none p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your address Eg: 3180 Danforth Ave, Toronto,Ontario "
              ></textarea>
            </div>
            {/* address 2 Field */}
            <div>
              <label
                htmlFor="address2"
                className="block text-sm font-medium text-white"
              >
                Address 2 (Optional)
              </label>
              <textarea
                id="address2"
                className="mt-1 resize-none p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your address Eg: 3180 Danforth Ave, Toronto,Ontario "
              ></textarea>
            </div>
            {/* adress pincode number */}
            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-white"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Adress pincode"
              />
            </div>

            {/* Company contact number */}
            <div>
              <label
                htmlFor="contactnumber"
                className="block text-sm font-medium text-white"
              >
                Contact Number
              </label>
              <input
                type="number"
                id="contactnumber"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Contact number"
              />
            </div>
            {/* countries */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-white"
              >
                country
              </label>
              <select
                id="country"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a country</option>
                <option value="user">India</option>
                <option value="admin">Usa</option>
              </select>
            </div>
            {/* states */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-white"
              >
                state
              </label>
              <select
                id="state"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a state</option>
                <option value="user">India</option>
                <option value="admin">Usa</option>
              </select>
            </div>
            {/* city */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-white"
              >
                city
              </label>
              <select
                id="city"
                className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a city</option>
                <option value="user">India</option>
                <option value="admin">Usa</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserCredentials;
