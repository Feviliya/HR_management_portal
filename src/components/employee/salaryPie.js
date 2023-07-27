import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

import '../../assets/css-components/employeecss/salary.css'
const data = [
  { id: 0, value: 20, label: 'State',color:'rgb(203, 237, 187)', },
  { id: 1, value: 30, label: 'Medicare',color:'rgb(198, 171, 245)' },
  { id: 2, value: 10, label: 'Tax',color:'rgb(227, 179, 190)' },
  { id: 3, value: 45, label: 'Pay',color:'rgb(297, 279, 180)' },
];

export default function PieActiveArc() {
  return (
    <PieChart  className='pi-ch' width={500}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 40, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={250}
    />
  );
}