import React,{useEffect,useState} from 'react'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
const EmpList = () => {
  const[dataList,setData]=useState([]);
  
  const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/userDetails`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [token,userId]);
  const DisplayData=dataList.map(
    (info)=>{
      return (
          
          <MDBTableBody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={info.profile_url}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> 
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{info.name}</p>
                    <p className='text-muted mb-0'>{info.email}</p>
                  </div>
                </div>
              </td>
              <td>
              <p className='fw-normal mb-1'>{info.id}</p>

              </td>
              <td>
                <p className='fw-normal mb-1'>{info.department}</p>
              </td>
              <td>
                <MDBBadge color='primary' pill>
                  {info.date_of_join}
                </MDBBadge>
              </td>
              <td>{info.phone}</td> 
            </tr>
          </MDBTableBody>
      )
    }
  )
  return (
    <MDBTable align='middle' style={{'margin-left':'100px'}}>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Id</th>
              <th scope='col'>Department</th>
              <th scope='col'>Date of Join</th>
              <th scope='col'>Phone</th>
            </tr>
          </MDBTableHead>
          {DisplayData}
    </MDBTable>
  )
  
}

export default EmpList