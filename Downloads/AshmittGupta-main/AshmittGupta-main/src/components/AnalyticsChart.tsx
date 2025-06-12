'use client';

import { LineChart } from '@tremor/react';

interface AnalyticsChartProps {
  data: any[];
  index: string;
  categories: string[];
  colors: string[];
  type: 'duration' | 'percentage';
}

export default function AnalyticsChart({ 
  data, 
  index, 
  categories, 
  colors,
  type
}: AnalyticsChartProps) {
  const valueFormatter = (value: number) => {
    if (type === 'duration') {
      return `${value} min`;
    }
    return `${value}%`;
  };

  return (
    <LineChart
      className="h-72 mt-4"
      data={data}
      index={index}
      categories={categories}
      colors={colors}
      valueFormatter={valueFormatter}
    />
  );
} 