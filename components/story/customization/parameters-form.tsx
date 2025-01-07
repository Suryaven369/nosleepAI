"use client"

import { Card } from "@/components/ui/card"
import { FilterGroup } from "./filter-group"
import { ThemeFilter } from "./theme-filter"
import { SeriesOptions } from "./series-options"
import { StoryParameters } from "@/lib/types/story-parameters"
import { LOCATIONS, TIME_PERIODS, PERSPECTIVES } from "./parameter-groups"

interface ParametersFormProps {
  value: StoryParameters
  onChange: (value: StoryParameters) => void
}

export function ParametersForm({ value, onChange }: ParametersFormProps) {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-6">
        <ThemeFilter
          value={value.theme}
          onChange={(theme) => onChange({ ...value, theme })}
        />

        <FilterGroup
          title="Setting"
          options={Object.entries(LOCATIONS).map(([key, label]) => ({ key, label }))}
          value={value.setting}
          onChange={(setting) => onChange({ ...value, setting })}
        />

        <FilterGroup
          title="Time Period"
          options={Object.entries(TIME_PERIODS).map(([key, label]) => ({ key, label }))}
          value={value.timePeriod}
          onChange={(timePeriod) => onChange({ ...value, timePeriod })}
        />

        <FilterGroup
          title="Perspective"
          options={Object.entries(PERSPECTIVES).map(([key, label]) => ({ key, label }))}
          value={value.perspective}
          onChange={(perspective) => onChange({ ...value, perspective })}
        />

        <SeriesOptions
          isSeriesPart={value.isSeriesPart || false}
          seriesTotal={value.seriesTotal || 2}
          onSeriesChange={(isSeriesPart) => onChange({ ...value, isSeriesPart })}
          onTotalChange={(seriesTotal) => onChange({ ...value, seriesTotal })}
        />
      </div>
    </Card>
  )
}