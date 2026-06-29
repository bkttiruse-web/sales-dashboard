"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface DataPoint {
  month: string;
  sales: number;
}

interface SalesChartProps {
  data: DataPoint[];
  threshold: number;
}

export const SalesChart: React.FC<SalesChartProps> = ({ data, threshold }) => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const processedData = data.map(item => ({
    ...item,
    aboveThreshold: item.sales >= threshold ? item.sales : 0,
  }));

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">
          Sales Analytics Performance
        </h3>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${chartType === "bar" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setChartType("bar")}
          >
            Bar Chart
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${chartType === "line" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setChartType("line")}
          >
            Line Chart
          </button>
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={processedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="sales"
                fill="#3b82f6"
                name="Standard Sales"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="aboveThreshold"
                fill="#10b981"
                name="Target Reached"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          ) : (
            <LineChart data={processedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Sales Trend"
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
