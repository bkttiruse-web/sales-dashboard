import React from "react";

interface FilterControlsProps {
  currentYear: number;
  onYearChange: (year: number) => void;
  threshold: number;
  onThresholdChange: (val: number) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  currentYear,
  onYearChange,
  threshold,
  onThresholdChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex gap-2">
        {[2022, 2023, 2024].map(year => (
          <button
            key={year}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              currentYear === year
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onYearChange(year)}
          >
            {year} Sales
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1 w-full md:w-64">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Highlight Threshold ($)
        </label>
        <input
          type="number"
          value={threshold}
          onChange={e => onThresholdChange(Number(e.target.value))}
          placeholder="e.g. 5000"
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterControls;
