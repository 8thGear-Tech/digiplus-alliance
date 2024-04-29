import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import digiplusalliancelogo from "../assets/images/digiplusalliancelogo.png";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (props) => {
  //   const { heading } = props;
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid NavBar">
        <div className="d-flex">
          <Link to="/">
            <img
              // src=""
              src={digiplusalliancelogo}
              alt=""
              // width={60}
              // height={70}
              className="me-4 mt-2"
            />
          </Link>
          <div className="d-flex align-items-center">
            {" "}
            {/* <h5>DigiPlus Alliance</h5> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar0 = () => {
  return (
    <div className="container-fluid mb-1">
      <div className="row">
        {/* {text.landingpage.map((navbar) => { */}
        {/* return ( */}
        <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
          {/* <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0" key={navbar.id}> */}
          <NavBar></NavBar>
          {/* <NavBar {...navbar}></NavBar> */}
        </div>
        {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
};
