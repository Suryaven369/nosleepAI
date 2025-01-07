"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ToggleSwitch } from "./toggle-switch"

interface SeriesOptionsProps {
  isSeriesPart: boolean
  seriesTotal: number
  onSeriesChange: (isSeriesPart: boolean) => void
  onTotalChange: (total: number) => void
}

export function SeriesOptions({ 
  isSeriesPart, 
  seriesTotal, 
  onSeriesChange, 
  onTotalChange 
}: SeriesOptionsProps) {
  return (
    <div className="space-y-4">
      <ToggleSwitch 
        checked={isSeriesPart}
        onChange={onSeriesChange}
        label="Part of a Series"
      />
      
      {isSeriesPart && (
        <div className="flex items-center space-x-2">
          <Label>Number of Parts:</Label>
          <Input
            type="number"
            min={2}
            max={10}
            value={seriesTotal}
            onChange={(e) => onTotalChange(parseInt(e.target.value, 10))}
            className="w-20 bg-background/50 border-red-900/20"
          />
        </div>
      )}
    </div>
  )
}