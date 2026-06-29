/**
 * Atom: ThresholdInput
 * A custom number input for setting sales threshold
 * Highlights bars above this value in green on the chart
 * Part of Atomic Design: Atoms layer
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ThresholdInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function ThresholdInput({
  value,
  onChange,
  min = 0,
  max = 200000,
}: ThresholdInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="threshold" className="text-sm font-medium text-gray-700">
        Threshold Value
      </Label>
      <div className="flex items-center gap-2">
        <Input
          id="threshold"
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          className="flex-1 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          placeholder="Enter threshold..."
        />
        <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
          ${(value / 1000).toFixed(0)}k
        </span>
      </div>
      <p className="text-xs text-gray-500">
        Bars above this value will highlight in green
      </p>
    </div>
  );
}
