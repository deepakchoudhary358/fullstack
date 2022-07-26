import React, { useState } from 'react';

let RegisterForm = () => {
   
    let [state, setState] = useState({
        user : {
            username: '',
            email: '',
            password: '',
            designation: '',
            bio: '',
            terms: false
        }
    });

    let {user} = state;

    let updateInput = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                [event.target.name] : event.target.value
            }
        }));
    }

    let updateChecked = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                [event.target.name] : event.target.checked
            }
        }));
    }


    
    let submitRegister = (event) => {
        event.preventDefault();
        console.log(user)
    }

    return (
        <React.Fragment>
            <pre>
                {JSON.stringify(state.user)}
            </pre>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header bg-warning">
                            <div className="h4">Register here</div>
                        </div>
                        <div className="card-body bg-light align-center">
                            <form onSubmit={submitRegister}>
                                <div className="mb-3">
                                    <input onChange={updateInput} name="username" value={user.username} type="text" className="form-control" placeholder="Username" /> 
                                </div>     
                                <div className="mb-3">
                                    <input onChange={updateInput} name="email" value={user.email} type="email" className="form-control" placeholder="Email" /> 
                                </div> 
                                <div className="mb-3">
                                    <input onChange={updateInput} name="password" value={user.password} type="password" className="form-control" placeholder="Password" /> 
                                </div> 
                                <div className="mb-3">
                                    <select onChange={updateInput} name="designation" value={user.designation} className="form-control">
                                        <option value="">Select Degisnation</option>
                                        <option value="Software Enginner">Software Enginner</option>
                                        <option value="Lead Engineer">Lead Engineer</option>
                                        <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                        <option value="Priciple Engineer">Priciple Engineer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Director">Director</option>
                                    </select>                                    
                                </div> 
                                <div className="mb-3">
                                    <textarea onChange={updateInput} name="bio" value={user.bio} rows={3} placeholder="Biography" className="form-control"></textarea>
                                </div> 
                                <div className="mb-3">
                                    <input onChange={updateChecked} name="terms" checked={user.terms} type="checkbox" className="form-check-input" />  Accept Terms
                                </div> 
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-warning btn-sm" value="Register" /> 
                                </div> 
                                                         
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default RegisterForm;