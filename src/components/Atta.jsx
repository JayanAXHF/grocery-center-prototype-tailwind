import React from "react";

import "../css.css";
import "../index.css";

const Atta = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Atta
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Patanjali Atta at Grofers
                </h2>
                <p className="leading-relaxed text-base a-tags">
                  <a
                    href="https://grofers.com/prn/patanjali-traditional-whole-wheat-with-bran-chakki-atta/prid/55388?lat=28.635571&lon=77.20391"
                    target="#"
                    className="a-tags"
                  >
                    Patanjali Traditional Whole Wheat with Bran Chakki Atta (MRP
                    : ₹340)
                  </a>
                </p>
                <button className="button">
                  <a
                    href="https://grofers.com/prn/patanjali-traditional-whole-wheat-with-bran-chakki-atta/prid/55388?lat=28.635571&lon=77.20391"
                    target="#"
                  >
                    Buy / Check
                  </a>
                </button>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  PATANJALI Whole Wheat Atta 10 kg
                </h2>
                <p className="leading-relaxed text-base a-tags">
                  <a
                    href="https://www.flipkart.com/patanjali-whole-wheat-atta/p/itmf9a535dea9f6d?pid=FLREW8SHHHYRP4NN&lid=LSTFLREW8SHHHYRP4NNDSS9N6&marketplace=GROCERY&cmpid=content_flour_12825718239_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,516793455547,,,,c,,,,,,,&ef_id=Cj0KCQjwv5uKBhD6ARIsAGv9a-y73ktrnmPYDiaRkfS7vFWdJ-UUbjW3FYWdrdwOXMnQzfgkUMMj3B0aAlaZEALw_wcB:G:s&s_kwcid=AL!739!3!516793455547!!!u!293946777986!&gclid=Cj0KCQjwv5uKBhD6ARIsAGv9a-y73ktrnmPYDiaRkfS7vFWdJ-UUbjW3FYWdrdwOXMnQzfgkUMMj3B0aAlaZEALw_wcB"
                    target="#"
                    className="a-tags"
                  >
                    Patanjali Whole wheat atta at flipkart (Price : ₹340)
                  </a>
                </p>
                <br />
                <button className="button">
                  <a
                    href="https://www.flipkart.com/patanjali-whole-wheat-atta/p/itmf9a535dea9f6d?pid=FLREW8SHHHYRP4NN&lid=LSTFLREW8SHHHYRP4NNDSS9N6&marketplace=GROCERY&cmpid=content_flour_12825718239_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,516793455547,,,,c,,,,,,,&ef_id=Cj0KCQjwv5uKBhD6ARIsAGv9a-y73ktrnmPYDiaRkfS7vFWdJ-UUbjW3FYWdrdwOXMnQzfgkUMMj3B0aAlaZEALw_wcB:G:s&s_kwcid=AL!739!3!516793455547!!!u!293946777986!&gclid=Cj0KCQjwv5uKBhD6ARIsAGv9a-y73ktrnmPYDiaRkfS7vFWdJ-UUbjW3FYWdrdwOXMnQzfgkUMMj3B0aAlaZEALw_wcB"
                    target="#"
                  >
                    Buy / Check
                  </a>
                </button>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Patanjali Atta (10kg)
                </h2>

                <p className="leading-relaxed text-base a-tags">
                  {" "}
                  {/* eslint-disable-next-line*/}
                  <a
                    href="https://groceries.tryitfirst.in/patanjali-whole-wheat-atta-10-kg.html"
                    className="a-tags"
                  ></a>
                  Patanjali Whole Wheat Atta -10 KG (PRICE : ₹410 )
                </p>
                <br />
                <button className="button">
                  <a
                    href="https://groceries.tryitfirst.in/patanjali-whole-wheat-atta-10-kg.html"
                    target="#"
                  >
                    Buy / Check
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Atta;
