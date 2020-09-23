import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "../Jumbotron/Jumbotron.js";
import API from "../../utils/API";
import Table from "../Table/Table";

const BASEURL = "https://jsonplaceholder.typicode.com/users/";


function EmployeeDirectory() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        searchAllEmp()
    }, [])


    const searchAllEmp = () => {
        API.search(BASEURL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    };



    const searchEmp =  () => {

         API.search(BASEURL)
            .then(res => setUsers(users.filter(users => users.name.includes(`${search}`))))
            .catch(err => console.log(err))
      
        

    }

        return (



        <div className="container">
            <Jumbotron />

            <p>
                <input onChange={event => setSearch(event.target.value)} />
                <button onClick={searchEmp}> Search</button>
                <button onClick={searchAllEmp}> Reset Search</button>    
            </p>
            <Table users={users}/>
          


        </div>

    )
    


}



export default EmployeeDirectory;
