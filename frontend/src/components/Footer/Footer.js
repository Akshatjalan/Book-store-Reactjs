import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../../assets/circles.png";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-medium pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <img src={logo} alt="Book Store App" height="50px" />
              <strong>Book-IT</strong>
            </h6>
            <p>
              Book-IT is an online React web application where the customer can
              purchase books online. Through this book store the users can
              search for a book by its title and later can add to the shopping
              cart and finally purchase using credit card transaction.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Products</strong>
            </h6>
            <p>
              <a href="#">Book-IT</a>
            </p>
            <p>
              <a href="https://akshatjalan.github.io/akshat/">Portfolio</a>
            </p>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <p>
              <i className="fa fa-envelope mr-3" /> &nbsp;jalanakshat2@gmail.com
            </p>
            <p>
              <a
                className="btn-floating btn-sm rgba-white-slight mx-1"
                href="https://www.linkedin.com/in/akshat-jalan/"
              >
                <i className="fab fa-linkedin-in" /> &nbsp;LinkedIn
              </a>
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Made by
              <a href=""> Akshat Jalan </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="http://github.com/Akshatjalan"
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.linkedin.com/in/akshat-jalan/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.instagram.com/akshatxjalan/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
