import React, { useState } from "react";

let LoginForm = () => {

    let [state, setState] = useState({
        user: {
            username: '',
            password: ''
        }
    });

    let {user} = state;

    let updateUsername = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                username: event.target.value
            }
        }));
    };

    let updatePassword = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                password: event.target.value
            }
        }));
    };

    let submitLogin = (event) => {
        event.preventDefault();
        console.log(user);
    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(state )}</pre>
            <div className="container-mt-3">
              <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <p className="h4">Login here</p>
                        </div>
                        <div className="card-body bg-light">
                            <form onSubmit={submitLogin}>
                                <div className="mb-3">
                                    <input onChange={updateUsername} value={user.username} type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input onChange={updatePassword} value={user.password} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-success btn-sm" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;