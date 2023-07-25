import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AdminNavbar from '../../components/admin/adminNav';
import AdminSidePanelEmp from '../../components/admin/adminSidePanel';
import '../../assets/css-components/admincss/adminProjects.css'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const AdminCourse = () => {
    const [usercourse,setCourse]=useState([]);
//   const userId = localStorage.getItem('user');
  const token=localStorage.getItem('token');
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/user/get/allCourses`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache'
          }
        }
        );
        setCourse(response.data);
        console.log(usercourse)

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  const DisplayData=usercourse.map(
    (info)=>{
        return(
          <MDBTableBody>
          <tr>
            <td>
                <p className='fw-bold mb-1'>{info.id}</p>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.current_course}</p>
            </td>
            <td>
              <MDBBadge color='danger' pill>
                {info.completion_status}%
              </MDBBadge>
            </td>
            <td>

              <p className='fw-normal mb-1'>{info.courses_completed}</p>
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
          <MDBTable  align='middle' style={{'margin-left':'270px','width':'100%'}}>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Current course</th>
                    <th scope='col'>Completion status</th>
                    <th scope='col'>Courses Completed</th>
                  </tr>
                </MDBTableHead>
                {DisplayData}
          </MDBTable>

        </div>
      </div>
    </div>
  )
}

export default AdminCourse