import React from "react";

const SelectDays: React.FC<{
  handleDaysChanges: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ handleDaysChanges }) => {
  return (
    <div className="relative inline-block w-32">
      <select
        className="form-select block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 text-sm"
        onChange={handleDaysChanges}
      >
        <option value="">Days</option>
        {[...Array(20)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1} {index + 1 === 1 ? "day" : "days"}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        {/* <svg
          className="w-4 h-4 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default SelectDays;
