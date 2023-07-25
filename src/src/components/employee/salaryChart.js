import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SalaryChart() {
  return (
    <BarChart
    series={[
        { data: [30000, 33000, 35000, 25000], stack: 'A', label: 'Salary' },
        { data: [5000, 2000, 5000, 2000], stack: 'B', label: 'Tax' },
      ]}

      
      xAxis={[{ scaleType: 'band', data: ['April', 'May', 'June','July'] ,categoryGapRatio: 0.3,
      
      barGapRatio: 0.3}]}
      width={500}
      height={350}
    />
  );
}