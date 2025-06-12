'use client';

import { BarChart } from '@tremor/react';

interface AnalyticsBarChartProps {
  data: any[];
  index: string;
  categories: string[];
  colors: string[];
}

export default function AnalyticsBarChart({ 
  data, 
  index, 
  categories, 
  colors 
}: AnalyticsBarChartProps) {
  return (
    <BarChart
      className="h-72 mt-4"
      data={data}
      index={index}
      categories={categories}
      colors={colors}
    />
  );
} 