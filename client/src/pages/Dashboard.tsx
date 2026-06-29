/**
 * Dashboard Page
 * Main page component that orchestrates the Sales Analytics Dashboard
 * Manages state for year selection, threshold, and chart type
 */

import { useState, useMemo } from "react";
import { SalesChart } from "@/components/organisms/SalesChart";
import { FilterControls } from "@/components/molecules/FilterControls";
import {
  getSalesDataByYear,
  getAvailableYears,
  SalesDataPoint,
} from "@/lib/mockData";

type ChartType = "bar" | "line";

export default function Dashboard() {
  const availableYears = useMemo(() => getAvailableYears(), []);
  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);
  const [threshold, setThreshold] = useState<number>(80000);
  const [chartType, setChartType] = useState<ChartType>("bar");

  // Get sales data for the selected year
  const chartData: SalesDataPoint[] = useMemo(
    () => getSalesDataByYear(selectedYear),
    [selectedYear]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Sales Analytics Dashboard
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Real-time sales performance monitoring and analysis
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Chart */}
          <div className="lg:col-span-2">
            <SalesChart
              data={chartData}
              chartType={chartType}
              threshold={threshold}
              year={selectedYear}
            />
          </div>

          {/* Right Column: Controls */}
          <div className="lg:col-span-1">
            <FilterControls
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
              availableYears={availableYears}
              threshold={threshold}
              onThresholdChange={setThreshold}
              chartType={chartType}
              onChartTypeChange={setChartType}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Total Sales */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Sales</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${(
                chartData.reduce((sum, item) => sum + item.sales, 0) / 1000
              ).toFixed(0)}
              k
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {selectedYear} annual total
            </p>
          </div>

          {/* Average Sales */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Average Sales</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              ${(
                chartData.reduce((sum, item) => sum + item.sales, 0) /
                chartData.length /
                1000
              ).toFixed(0)}
              k
            </p>
            <p className="text-xs text-gray-500 mt-2">Per month average</p>
          </div>

          {/* Above Threshold */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Above Threshold</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              {chartData.filter((item) => item.sales > threshold).length}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Months exceeding ${(threshold / 1000).toFixed(0)}k
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 text-sm">
            Sales Analytics Dashboard • Built with React, TypeScript & Recharts
          </p>
        </div>
      </footer>
    </div>
  );
}
