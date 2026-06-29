/**
 * Mock Sales Data
 * Contains monthly sales data for 2022, 2023, and 2024
 * Used for chart visualization and filtering
 */

export interface SalesDataPoint {
  month: string;
  sales: number;
  year: number;
}

export interface YearSalesData {
  year: number;
  data: SalesDataPoint[];
}

export const mockSalesData: YearSalesData[] = [
  {
    year: 2022,
    data: [
      { month: "Jan", sales: 45000, year: 2022 },
      { month: "Feb", sales: 52000, year: 2022 },
      { month: "Mar", sales: 48000, year: 2022 },
      { month: "Apr", sales: 61000, year: 2022 },
      { month: "May", sales: 55000, year: 2022 },
      { month: "Jun", sales: 67000, year: 2022 },
      { month: "Jul", sales: 72000, year: 2022 },
      { month: "Aug", sales: 68000, year: 2022 },
      { month: "Sep", sales: 74000, year: 2022 },
      { month: "Oct", sales: 79000, year: 2022 },
      { month: "Nov", sales: 85000, year: 2022 },
      { month: "Dec", sales: 92000, year: 2022 },
    ],
  },
  {
    year: 2023,
    data: [
      { month: "Jan", sales: 58000, year: 2023 },
      { month: "Feb", sales: 62000, year: 2023 },
      { month: "Mar", sales: 71000, year: 2023 },
      { month: "Apr", sales: 68000, year: 2023 },
      { month: "May", sales: 75000, year: 2023 },
      { month: "Jun", sales: 82000, year: 2023 },
      { month: "Jul", sales: 88000, year: 2023 },
      { month: "Aug", sales: 85000, year: 2023 },
      { month: "Sep", sales: 91000, year: 2023 },
      { month: "Oct", sales: 95000, year: 2023 },
      { month: "Nov", sales: 102000, year: 2023 },
      { month: "Dec", sales: 115000, year: 2023 },
    ],
  },
  {
    year: 2024,
    data: [
      { month: "Jan", sales: 72000, year: 2024 },
      { month: "Feb", sales: 78000, year: 2024 },
      { month: "Mar", sales: 85000, year: 2024 },
      { month: "Apr", sales: 92000, year: 2024 },
      { month: "May", sales: 88000, year: 2024 },
      { month: "Jun", sales: 98000, year: 2024 },
      { month: "Jul", sales: 105000, year: 2024 },
      { month: "Aug", sales: 112000, year: 2024 },
      { month: "Sep", sales: 108000, year: 2024 },
      { month: "Oct", sales: 118000, year: 2024 },
      { month: "Nov", sales: 125000, year: 2024 },
      { month: "Dec", sales: 135000, year: 2024 },
    ],
  },
];

/**
 * Get sales data for a specific year
 */
export function getSalesDataByYear(year: number): SalesDataPoint[] {
  const yearData = mockSalesData.find((item) => item.year === year);
  return yearData ? yearData.data : [];
}

/**
 * Get all available years
 */
export function getAvailableYears(): number[] {
  return mockSalesData.map((item) => item.year).sort();
}
