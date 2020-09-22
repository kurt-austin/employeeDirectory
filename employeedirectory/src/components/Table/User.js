import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default ({ user }) => (
    
    <div className="table-responsive">
        <table className="table table-striped table-class">
            {/* <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>{user.name.trim()}</td>
                    <td>{user.phone.trim()}</td>
                    <td>{user.email.trim()}</td>
                    <td>{user.username.trim()}</td>
                </tr>

            </tbody>
        </table>
        </div>
        

)