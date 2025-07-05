import axios from "axios";
import { useEffect, useState } from "react";

function Success()
{
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/api/users')
        .then(res=>setUsers(res.data))
        .catch(err=>console.error("Error fetching users:", err));
    })
    return(
    <div>
        <h1>Registered Users</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>PhoneNumber</th>
                    <th>City</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Gender</th>
                    <th>Position</th>
                </tr>
            </thead>
            <body>
                {users.map((u,index)=>(
                    <tr key={index}>
                        <td>{u.full_name}</td>
                        <td>{u.email}</td>
                        <td>{u.country}</td>
                        <td>{u.phonenumber}</td>
                        <td>{u.city}</td>
                        <td>{u.password}</td>
                        <td>{u.confirmPassword}</td>
                        <td>{u.gender}</td>
                        <td>{u.position}</td>
                    </tr>
                ))}
            </body>
        </table>
    </div>
        )
}
export default Success;
