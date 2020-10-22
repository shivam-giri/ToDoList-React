import React from "react";
import "./Footer.css";

const FooterComponet = () => {
  return (
    <div className="card1 text-center ">
      <div className="card-header ">Featured</div>
      <div className="card-body">
        <h5 className="card-title">My React Footer Part </h5>
        <p className="card-text">Add the footer part</p>
        <a href="#" className="btn btn-dark">
          END
        </a>
      </div>
      <div className="card-footer text-muted bg-black">Ending</div>
    </div>
  );
};

export default FooterComponet;
