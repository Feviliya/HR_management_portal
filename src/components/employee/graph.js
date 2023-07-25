import React from 'react'

import {Line} from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const PerformanceGraph = () => {
    const data={
        labels:["March","April","May","June","July"],
        datasets:[{
            data:[80,30,60,50,100],
            backgroundColor:'transparent',
            borderColor:'black',
            pointBorderColor:'transparent',
            pointBorderWidth:3
        }
        ]
    }
    const options={
        plugins:{
            legend:false
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:1,
                max:100,
                ticks:{
                    stepSize:10,
                    callback:(value)=>value+'%'
                },
                grid:{
                    borderDash:[10]
                }
            }
        }
    }
  return (
    <div>
        <Line data={data} options={options}></Line>
    </div>
  )
}

export default PerformanceGraph