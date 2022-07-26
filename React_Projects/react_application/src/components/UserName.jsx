import React, { useState }  from "react";
 

let UserName = () => {

    let [state, setState] = useState(
        {
            username: 'John'
        }
    );

    let updateInput = (event) => {
        setState((state) => ({
            username: event.target.value
        }));
    };

    return  (
        <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-hear bg-primary text-white">
                            <p className="h4">User Name</p>
                        </div>
                        <div className="card-body bg-light">
                            <form>
                                <div className="mb-3">
                                    <input onChange={updateInput} value={state.username} type="text" className="form-control" />
                                </div>
                                <h3>{state.username}</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserName;