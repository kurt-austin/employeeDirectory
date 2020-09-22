import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "../Jumbotron/Jumbotron.js";
import API from "../../utils/API";
import API2 from "../../utils/API2";
import User from "../Table/User";
import Table from "../Table/Table";
let foundName;
let apiReturn;
let url;

const BASEURL = "https://jsonplaceholder.typicode.com/users/";


function EmployeeDirectory() {
    const [users, setUsers] = useState([])
    // const [user, setUser] = useState(null)
    const [search, setSearch] = useState([])

    useEffect(() => {
        searchAllEmp()
    }, [])


    const searchAllEmp = () => {
        API.search(BASEURL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    };



    const searchEmp = async () => {

        await API.search(BASEURL)
            .then(res => apiReturn = res.data)
            .catch(err => console.log(err));

        //    console.log(`${search}`)
        //    console.log(apiReturn)
        foundName = apiReturn.find(item => item.name.includes(`${search}`));
        //  const foundEmail = apiReturn.find(item=> item.email.includes(`${search}`));
        //  const userName = apiReturn.find(item=>item.username.includes(`${search}`));
        url = BASEURL + foundName.id;
        searchEmpAgain(url);


    }

    function searchEmpAgain(url) {
        API2.search(url)
            .then(response => {
                console.log(url)
                setUser(response.data)
                // console.log(response.data)
                console.log(users)
            })
            .catch(err => console.log(err))

    }

    //    if (!foundName){
    return (



        <div className="container">
            <Jumbotron />

            <p>
                <input onChange={event => setSearch(event.target.value)} />
                <button onClick={searchEmp}> Search</button>
                {/* {user.map(usr => <User user={usr} />)}   */}
            </p>
            <Table />

            {users.map(usr => <User user={usr} />)}


        </div>

    )
    // } else{
    // return (

    // <div className="container">
    //         <Jumbotron />

    //         <p>
    //             <input onChange={event => setSearch(event.target.value)} />
    //             <button onClick={searchEmp}> Search</button>
    //             {/* {user.map(usr => <User user={usr} />)}   */}
    //         </p>
    //         <Table />
    //         {user.map(usr => <User user={usr} />)}
    //     {/* {users.map(usr => <User user={usr} />)}    */}


    //     </div>

    // )



}



export default EmployeeDirectory;
