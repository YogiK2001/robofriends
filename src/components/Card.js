import React from "react";
// import ReactDOM from "react-dom";

const Card = ({name, email, id}) => {
    // const {name, email, id} = props;

   
    return (
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <h2 > {name} </h2>
            <p > {email} </p>
        </div>
    );
}

export default Card;