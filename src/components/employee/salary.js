import React,{useState,useEffect} from 'react'
import '../../assets/css-components/employeecss/salary.css'
import SalaryChart from './salaryChart'
import DoughnutChart from './salaryPie'
import axios from 'axios'
const Salary = () => {
  const [userSalary,setSalary]=useState({});
  const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/salary/${userId}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setSalary(response.data);
        console.log(userSalary)
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, []);
  return (
    <div className='sal-out'>
    <div className='salary'>
        <div className='stubs'>
          <SalaryChart></SalaryChart>
        </div>
        <div className='side-box-sal'>
          <div className='amount'>
            <i class="fi fi-rr-sack-dollar sal-icon"></i>
              <h3>{userSalary.total_pay}</h3>
              <p>Total pay amount</p>
          </div>
          <div className='amount'>
            <i class="fi fi-rs-wallet sal-icon"></i>
              <h3>{userSalary.final_pay}</h3>
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