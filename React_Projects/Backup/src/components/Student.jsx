import React from "react";

let Student =  (props) => {
    return (
        <div className="card">
                <div className="card-body">
                    
                <h2>Employee Name : {props.name} </h2>
                <h2> Age : {props.age} years</h2>
                </div>
            </div>
    )
}

export default Student;