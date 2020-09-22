import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'

function Table() {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-3">Name</th>
                        <th scope="col-3">Phone</th>
                        <th scope="col-3">Email</th>
                        <th scope="col-3">Username</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody> */}
            </table>
        </div>
    );
}

export default Table;