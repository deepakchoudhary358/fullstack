import React, {useState}  from "react";
 

let Teacher = () => {

    let [state, setState] = useState(
        {
            teachers : [
                {
                subject: 'Math',
                time: 25
                },
                {
                    subject: 'Hindi',
                    time: 12
                    }
            ]
        }
    ); 
        let {teachers} = state;

    return  (
        <div className="card">
               <div className="card-body">
                <h2> Teacher : {teachers[0].subject}</h2>
                <h2> Teacher : {teachers[0].time}</h2>
                </div>
               </div>
    )
}

export default Teacher;