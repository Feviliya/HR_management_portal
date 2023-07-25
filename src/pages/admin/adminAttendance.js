import React,{useState,useEffect} from 'react'
import AdminNavbar from '../../components/admin/adminNav'
import AdminSidePanelEmp from '../../components/admin/adminSidePanel'
import axios from 'axios'
import '../../assets/css-components/admincss/adminAttend.css'
import { MDBBadge,MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'
const AdminAttendance = () => {
    const [userAttendance,setAttendance]=useState([]);
      const token=localStorage.getItem('token');
      useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get/attendance`,
            {
              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":'no-cache'
              }
            }
            );
            setAttendance(response.data);
            console.log(userAttendance)
    
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    
        fetchUserDetails();
      }, []);


      const handleAccept = async (id) => {
        try {
          await axios.put(
            `http://localhost:8080/api/v1/user/update/attendance`,
            { id, leave_req_status: 'Granted' },
            {
              headers: {
                "Authorization": `Bearer ${token}`,
                "cache-control": 'no-cache'
              }
            }
          );
          // After successful update, you may want to fetch the updated data again from the backend
          // to reflect the changes immediately, you can call fetchUserDetails() again here
          // or you can just update the userAttendance state manually
          setAttendance((prevAttendance) => {
            return prevAttendance.map((attendance) => {
              if (attendance.id === id) {
                return { ...attendance, leave_req_status: 'Granted' };
              }
              return attendance;
            });
          });
        } catch (error) {
          console.error('Error updating leave request:', error);
        }
      };
    
      const handleReject = async (id) => {
        try {
          await axios.put(
            `http://localhost:8080/api/v1/user/update/attendance`,
            { id, leave_req_status: 'Declined' },
            {
              headers: {
                "Authorization": `Bearer ${token}`,
                "cache-control": 'no-cache'
              }
            }
          );
          // After successful update, you may want to fetch the updated data again from the backend
          // to reflect the changes immediately, you can call fetchUserDetails() again here
          // or you can just update the userAttendance state manually
          setAttendance((prevAttendance) => {
            return prevAttendance.map((attendance) => {
              if (attendance.id === id) {
                return { ...attendance, leave_req_status: 'Declined' };
              }
              return attendance;
            });
          });
        } catch (error) {
          console.error('Error updating leave request:', error);
        }
      };
    


      const getPendingLeaveRequests = () => {
        return userAttendance.filter(leave => leave.leave_req_status === "Pending");
      };
    
      // Get the leave requests with "Pending" status
      const pendingLeaveRequests = getPendingLeaveRequests();
      const DisplayLeave=pendingLeaveRequests.map(
        (leave)=>{
            return(
                <MDBTableBody>
              <tr>
                <td>
                  <MDBBadge color='primary' pill>
                    {leave.id}
                  </MDBBadge>
                </td>
                <td>{leave.leave_from_date}</td> 
                <td>{leave.leave_to_date}</td>
                <td>{leave.reason}</td>
                <td >
                    <Button onClick={() => handleAccept(leave.id)}>
                        Accept
                    </Button>
                </td>
                <td>
                    <Button style={{'background':'brown'}} onClick={() => handleReject(leave.id)}>
                        Reject
                    </Button>
                    
                </td>
              </tr>
            </MDBTableBody>
            )
        }
      )




      const DisplayData=userAttendance.map(
        (info)=>{
            return(
              <MDBTableBody>
              <tr>
                <td>
                  <MDBBadge color='primary' pill>
                    {info.id}
                  </MDBBadge>
                </td>
                <td>{info.days_present}</td> 
                
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
            <div className='admin-att-content'>
            <div className='attendance-table'>
              <h4>Employee Attendance</h4>
              <MDBTable  align='middle' style={{'width':'100%','border-top':'2px solid rgb(72, 100, 177)'}}>
                    <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Days present</th>
                      </tr>
                      
                    </MDBTableHead>
                    {DisplayData}
              </MDBTable>
              </div>




              <div className='leave-request'>
              <h4>Leave Requests</h4>
              <MDBTable  align='middle' style={{'width':'100%','border-top':'2px solid rgb(72, 100, 177)'}}>
                    <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>From</th>
                        <th scope='col'>To</th>
                        <th scope='col'>Reason</th>
                        <th scope='col'>Actions</th>
                      </tr>
                    </MDBTableHead>
                    {DisplayLeave}
              </MDBTable>
              </div>
            </div>
          </div>
        </div>
      )
}

export default AdminAttendance