import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdminNavbar from '../../components/admin/adminNav';
import AdminSidePanelEmp from '../../components/admin/adminSidePanel';
import '../../assets/css-components/admincss/adminProjects.css'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const AdminProjects = () => {
    const [userProjects,setProjects]=useState([]);
//   const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/allProjects`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setProjects(response.data);
        console.log(userProjects)

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  const DisplayData=userProjects.map(
    (info)=>{
        return(
          <MDBTableBody>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{info.current_project}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.project_lead}</p>
            </td>
            <td>
              <MDBBadge color='danger' pill>
                {info.deadline}
              </MDBBadge>
            </td>
            <td>{info.id}</td> 
            <td>
              <MDBBadge color='primary'>
              {info.project_completion_percentage}%
              </MDBBadge>
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
          <MDBTable  align='middle' style={{'margin-left':'150px','width':'100%'}}>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Project</th>
                    <th scope='col'>Project Lead</th>
                    <th scope='col'>Deadline</th>
                    <th scope='col'>Employee Id</th>
                    <th scope='col'>Completion Percentage</th>
                  </tr>
                </MDBTableHead>
                {DisplayData}
          </MDBTable>

        </div>
      </div>
    </div>
  )
}

export default AdminProjects