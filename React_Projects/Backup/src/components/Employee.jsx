// import React from "react";

// class Employee extends React.Component {
//     // eslint-disable-next-line no-useless-constructor
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         console.log(this.props);
//         return  (
//             <div className="card">
//                 <div className="card-body">
                    
//                 <h2>Employee Name : {this.props.name} </h2>
//                 <h2> Age : {this.props.age} years</h2>
//                 </div>
//             </div>
//         );
//     }
// }


//export default Employee;

import React  from "react";

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees : [
                {
                name: 'Deepak',
                age: 29
            },
            {
                name: 'Manoj',
                age: 35
            }
        ]
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="card">
               <div className="card-body">
                <span>Name: {this.state.employees[0].name}</span><br />
                <span>Age: {this.state.employees[0].age} years</span><br />
                
                </div>
                </div>

                <div className="card">
               <div className="card-body">
                <span>Name: {this.state.employees[1].name}</span><br />
                <span>Age: {this.state.employees[1].age} years</span><br />
                
                </div>
                </div>
            </React.Fragment>
        );
    } 
}

export default Employee;