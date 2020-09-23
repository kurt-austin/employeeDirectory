import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'

export default ({ user }) => (

                <tr>
                    <td>{user.name.trim()}</td>
                    <td>{user.phone.trim()}</td>
                    <td>{user.email.trim()}</td>
                    <td>{user.username.trim()}</td>
                </tr>        

)