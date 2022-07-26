import React, {useState} from "react";
import { useEffect } from "react";
import UserService from "../services/UserService";

let UserList = () => {

    let [state, setState] = useState({
        users: []
    })

    useEffect(() => {
        UserService.getAllUsers()
        .then((response) => { 
            setState(() => ({
                users: response.data
            }));
         })
        .catch((error) => { console.error();});
    });

    return (
        <React.Fragment>
            <div className="container mt-6">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card shadow-lg text-center">
                            <div className="card-header bg-warning">
                                <p className="h4">User List</p>
                            </div>
                            <div className="card-body"> 
                                <table>
                                    <thead>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Street</th>
                                            <th>City</th>
                                            <th>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            state.users.length > 0 && 
                                            state.users.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.address.street}</td>
                                                        <td>{user.address.city}</td>
                                                        <td>{user.website}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UserList;