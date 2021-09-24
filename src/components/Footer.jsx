import React from "react";
import "../css.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 fixed justify-center">
      <center>
        <div className="flex justify-center">
          <span className="img-footer mr-15">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-black p-2 bg-white border-2 rounded-full border-black"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
          </span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <h4>
            &copy; Jayan Sunil 2021{" "}
            {/*<Link to="/">
              {" "}
              <p className="up-arrow justify-self-end">
                <i className="fas fa-angle-double-up "></i>
              </p>
  </Link>*/}{" "}
          </h4>
        </div>
      </center>
    </footer>
  );
};

export default Footer;
