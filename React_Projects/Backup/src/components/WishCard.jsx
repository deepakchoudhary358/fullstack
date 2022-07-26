import React from "react";

class WishCard extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props);
        return  (
            <React.Fragment>
                <nav className="card">
                <div className="card-body">
                    
                    <h2>This class based Component</h2>
                    <p>lorem ipsum dolor sit amet, will create two projects on react, after that one on, node with mongodb, and onther on express, and one main and final, on full stack project then lear concepts, ill definactly, take job job,god helping me pn this, my aim to achive, it , let see what is my bowl, thanks once again, for this</p>
                    </div>
            </nav>
            
            </React.Fragment>
        );
        }
}

export default WishCard;