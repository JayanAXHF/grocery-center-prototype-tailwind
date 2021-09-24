import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
        Hi, my name is Jayan ...
      </h1>
      Grocery Store is a pet-project that shows a list of websites selling the
      <br />
      same product. Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
      <br />
      Deserunt reprehenderit nostrum neque libero nulla sapiente harum numquam?
      <br />
      Necessitatibus deserunt enim libero omnis voluptatem, blanditiis
      <br />
      similique, porro aliquam natus nam explicabo ea magni!
      <br />
      <br />
      <br />
      <Link className="text-indigo-500 inline-flex items-center mt-4" to="/">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            {" "}
            &nbsp;
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </p>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <p>Home</p> &nbsp;{" "}
      </Link>
    </div>
  );
};

export default About;
