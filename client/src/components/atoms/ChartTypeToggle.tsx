/**
 * Atom: ChartTypeToggle
 * A toggle button to switch between Bar Chart and Line Chart
 * Part of Atomic Design: Atoms layer
 */

import { Button } from "@/components/ui/button";
import { BarChart3, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

type ChartType = "bar" | "line";

interface ChartTypeToggleProps {
  chartType: ChartType;
  onChange: (type: ChartType) => void;
}

export function ChartTypeToggle({ chartType, onChange }: ChartTypeToggleProps) {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
      <Button
        onClick={() => onChange("bar")}
        variant={chartType === "bar" ? "default" : "ghost"}
        size="sm"
        className={cn(
          "transition-all duration-200",
          chartType === "bar"
            ? "bg-cyan-500 hover:bg-cyan-600 text-white"
            : "text-gray-600 hover:text-gray-900"
        )}
      >
        <BarChart3 className="w-4 h-4 mr-2" />
        Bar
      </Button>
      <Button
        onClick={() => onChange("line")}
        variant={chartType === "line" ? "default" : "ghost"}
        size="sm"
        className={cn(
          "transition-all duration-200",
          chartType === "line"
            ? "bg-cyan-500 hover:bg-cyan-600 text-white"
            : "text-gray-600 hover:text-gray-900"
        )}
      >
        <LineChart className="w-4 h-4 mr-2" />
        Line
      </Button>
    </div>
  );
}
