import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Grocery Center
            </h1>
            <p className="leading-relaxed text-base">
              Grocery Center is a simple React-tailwindcss web app that lists
              some sites selling the same product
            </p>
            <Link
              className="text-indigo-500 inline-flex items-center mt-4"
              to="/About"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <Link className="text-gray-600 hover:text-gray-800" to="/Atta">
                  Atta
                </Link>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <Link className="text-gray-600 hover:text-gray-800" to="/Rice">
                  Rice
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
