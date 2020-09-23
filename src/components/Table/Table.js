import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User"
// import './style.css'

function Table( { users }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>

            {users.map(usr => <User user={usr} />)} 

                   
                </tbody>
            </table>
        </div>
    );
}

export default Table;