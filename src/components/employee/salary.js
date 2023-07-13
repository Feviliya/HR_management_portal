import React from 'react'
import '../../assets/css-components/employeecss/salary.css'
const Salary = () => {
  return (
    <div className='salary'>
        <div className='stubs'>
            <h4>Pay period
                
            </h4>
            <p>July 30</p>
            <h4>Tax withholding
                
            </h4>
            <p>1.2%</p>
            <h4>Bonus</h4>
            <p>Rs.2500/-</p>
        </div>
        <div className='amount'>
            <h1>Rs.30,000 /-</h1>
            <p>Tax: Rs. 2000 /-</p>
        </div>
    </div>
  )
}

export default Salary