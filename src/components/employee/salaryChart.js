import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SalaryChart() {
  return (
    <BarChart
    series={[
        { data: [30000, 33000, 35000], stack: 'A', label: 'Total pay' },
        { data: [25000, 32000, 23000], stack: 'B', label: 'Final pay' },
      ]}

      
      xAxis={[{ scaleType: 'band', data: ['April', 'May', 'June'] ,categoryGapRatio: 0.3,
      
      barGapRatio: 0.3}]}
      width={500}
      height={350}
    />
  );
}