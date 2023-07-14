import React from 'react'
import '../../assets/css-components/employeecss/connect.css'
import { Link } from 'react-router-dom'
const Connect = () => {
  return (
    <div className='connect'>
        <table class="table align-middle mb-0 bg-white" style={{'padding':'20px'}}>
        <thead class="bg-light">
            <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <div class="d-flex align-items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"
                    alt=""
                    style={{width: 45, height: 45}}
                    class="rounded-circle"
                    />
                <div class="ms-3">
                    <p class="fw-bold mb-1">John Doe</p>
                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1">Software engineer</p>
                <p class="text-muted mb-0">IT department</p>
            </td>
            <td>
                <span className='activity'>Active</span>
            </td>
            <td>Senior</td>
            
            <td>
                <button type="button" class="btn btn-link btn-rounded btn-sm fw-bold">
                    <Link to='mailto:john.doe@gmail.com'>Connect</Link>
                
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex align-items-center">
                <img
                    src="data:image/png;base64,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"
                    class="rounded-circle"
                    alt=""
                    style={{width: 45, height: 45}}
                    />
                <div class="ms-3">
                    <p class="fw-bold mb-1">Alex Ray</p>
                    <p class="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1">Consultant</p>
                <p class="text-muted mb-0">Finance</p>
            </td>
            <td>
                <span className='activity'
                    >Onboarding</span
                >
            </td>
            <td>Junior</td>
            <td>
                <button
                        type="button"
                        class="btn btn-link btn-rounded btn-sm fw-bold"
                        data-mdb-ripple-color="dark"
                        >
                <Link to='mailto:alex.ray@gmail.com'>Connect</Link>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex align-items-center">
                <img
                    src="data:image/jpeg;base64,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"
                    class="rounded-circle"
                    alt=""
                    style={{width: 45, height: 45}}
                    />
                <div class="ms-3">
                    <p class="fw-bold mb-1">Kate Hunington</p>
                    <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1">Designer</p>
                <p class="text-muted mb-0">UI/UX</p>
            </td>
            <td>
                <span className='activity'>Awaiting</span>
            </td>
            <td>Senior</td>
            <td>
                <button
                        type="button"
                        class="btn btn-link btn-rounded btn-sm fw-bold"
                        data-mdb-ripple-color="dark"
                        >
                <Link to='mailto:kate.hunington@gmail.com'>Connect</Link>
                </button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Connect