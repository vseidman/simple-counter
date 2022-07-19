//import react into the bundle
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (<div className="box">
        <div className="clock"><i className="far fa-clock"></i></div>
        <div className="fourth-digit">{props.fourthDigit}</div>
        <div className="third-digit">{props.thirdDigit}</div>
        <div className="second-digit">{props.secondDigit}</div>
        <div className="first-digit">{props.firstDigit}</div>
    </div>);
}
SimpleCounter.protoTypes = {
fourthDigit: PropTypes.number,
thirdDigit: PropTypes.number,
secondDigit: PropTypes.number,
firstDigit: PropTypes.number
};

let counter = 0

setInterval(() => {
    let one = Math.floor((counter / 1) % 10);
    let two = Math.floor((counter / 10) % 10);
    let three = Math.floor((counter / 100) % 10);
    let four = Math.floor((counter / 1000) % 10);
    
    
    counter ++; 

    ReactDOM.render(<SimpleCounter firstDigit={one} secondDigit={two} thirdDigit={three} fourthDigit={four} />, document.querySelector("#app"));
}, 1000);


