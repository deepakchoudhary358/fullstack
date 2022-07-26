import React, { useState } from "react";

let AuthUser = () => {

    let [state, setState] = useState({
        isLoggedIn: false
    });

    let login = () => {
        setState((state) => ({
            isLoggedIn: true
        }))
    }

    let logout = () => {
        setState((state) => ({
            isLoggedIn: false
        }))
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card shadow-lg">
                            <div className="card-header bg-secondary text-white">
                                {
                                    state.isLoggedIn ?
                                        <p className="h3">Welcome Deepak Choudhary</p> :
                                        <p className="h3">Welcome Guest!</p>
                                }
                            </div>
                            {
                                state.isLoggedIn ?
                                   <button onClick={logout} className="btn btn-warning btn-sm">Logout</button> :
                                   <button onClick={login} className="btn btn-success btn-sm">Login</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AuthUser;