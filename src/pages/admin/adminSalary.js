import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdminNavbar from '../../components/admin/adminNav';
import AdminSidePanelEmp from '../../components/admin/adminSidePanel';
import '../../assets/css-components/admincss/adminProjects.css'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button ,TextField} from '@mui/material';
const AdminSalary = () => {
    const [usercourse,setCourse]=useState([]);
    const [id,setId]=useState();
    const [finalpay,setFinal]=useState();
    const [total,setTotal]=useState();
//   const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/salary`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setCourse(response.data);

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/user/add/salary`,
      {
        id:id,
        final_pay:finalpay,
        total_pay:total
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache'
        }
      }
      );
      console.log("changed")

    } catch (error) {
      console.error('Error fetching user details:', error);
    }
    
}
  const DisplayData=usercourse.map(
    (info)=>{
        return(
          <MDBTableBody>
          <tr>
            <td>
                <p className='fw-bold mb-1'>{info.id}</p>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.final_pay}</p>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.total_pay}</p>
            </td>
          </tr>
        </MDBTableBody>
        )
    }
  )
  return (
    <div id='admin-projects'>
      <AdminNavbar></AdminNavbar>
      <div style={{'display':'flex'}}>
        <AdminSidePanelEmp></AdminSidePanelEmp>
        <div className='table-project'>
          <MDBTable  align='middle' style={{'margin-left':'200px','width':'150vh'}}>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Final pay</th>
                    <th scope='col'>Total pay</th>
                  </tr>
                </MDBTableHead>
                {DisplayData}
          </MDBTable>
          <form style={{'margin-left':'30px'}} className='add-user-box' onSubmit={handleSubmit}>
                    <div className='left-user'>
                        <TextField className='add-user-field' onChange={(e)=>{setId(e.target.value)}} label="Id" value={id} variant="outlined" required></TextField>
                        <TextField className='add-user-field'  onChange={(e)=>{setFinal(e.target.value)}} value={finalpay} label="Final pay" variant="outlined" required></TextField>
                    </div>
                    <div className='right-user'>
                        <TextField className='add-user-field' onChange={(e)=>{setTotal(e.target.value)}} value={total} label="Total pay" variant='outlined' required></TextField>
                        <Button type='submit' variant='contained'>Change</Button>
                    </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminSalary