import React, {useState} from "react";

let WishMessage = () => {

    let [state, setState] = useState({
        message: 'Hello'
    });

    let goodMorning = () => {
        setState((state) => ({
            message: 'Good Morning'
        }));    
    }

    let goodAfternoon = () => {
        setState((state) => ({
            message: 'Good Afternoon'
        }));    
    }

    let goodEvening = () => {
        setState((state) => ({
            message: 'Good Evening'
        }));    
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">WishMessage</p>
                            </div>
                            <div className="card-body">
                                <h5 className="display-3">{state.message}</h5>
                                <button onClick={goodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={goodAfternoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={goodEvening} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default WishMessage;