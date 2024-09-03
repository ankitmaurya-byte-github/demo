import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StepperVisible } from "../App";

const Form = ({ title }: { title: string }) => {
  const { setIsVisible } = useContext(StepperVisible);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsVisible(true);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        {title}
      </h2>
      <div className="bg-gray-900/75 p-8 rounded-lg w-full shadow-lg max-w-sm ">
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 mt-[24px] flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block  text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 mt-[24px] flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FontAwesomeIcon className="h-5 w-5" icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon className="h-5 w-5" icon={faEye} />
              )}
            </div>
          </div>
          {/* Confirm Password Field */}
          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block  text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              className="mt-1 p-2 text-gray-900 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 mt-[24px] flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FontAwesomeIcon className="h-5 w-5" icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon className="h-5 w-5" icon={faEye} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
