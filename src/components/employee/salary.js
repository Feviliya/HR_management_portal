import React from 'react'
import '../../assets/css-components/employeecss/salary.css'
import SalaryChart from './salaryChart'
import DoughnutChart from './salaryPie'
const Salary = () => {
  return (
    <div className='sal-out'>
    <div className='salary'>
        <div className='stubs'>
          <SalaryChart></SalaryChart>
        </div>
        <div className='side-box-sal'>
          <div className='amount'>
            <i class="fi fi-rr-sack-dollar sal-icon"></i>
              <h3>Rs.26,000 /-</h3>
              <p>Total pay amount</p>
          </div>
          <div className='amount'>
            <i class="fi fi-rs-wallet sal-icon"></i>
              <h3>Rs.22,000 /-</h3>
              <p>Final paying amount</p>
          </div>
        </div>
    </div>
    <div className='side-chart'>

        <DoughnutChart ></DoughnutChart>
        <div className='amount-desc'>
          <p>Basic salary accrues from day to day and is payable monthly by credit transfer into a member of staff’s nominated bank/building society account normally on 26th day of each calendar month, subject to the deduction of tax, national insurance and any other agreed or lawfully required deductions, including the deduction of pension contributions where appropriate.</p>
        </div>
    </div>
    </div>
    
  )
}

export default Salary