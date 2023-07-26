import React from "react";
;

function login() {
    return (root , render) => 
      (
        <><div className="name" aria-label="name"></div>
        <div className="e-mail" aria-label="e-mail"></div>
        <div button="on-click" aria-label="Submit"></div></>
      );
      
     };


export default login;