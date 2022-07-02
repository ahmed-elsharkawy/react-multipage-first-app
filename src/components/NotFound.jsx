import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    let goHome = useNavigate();
    let goHomeHandler = () => {
        goHome('/home')
    }
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <button className="btn btn-success" onClick={goHomeHandler}>Go to home page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
