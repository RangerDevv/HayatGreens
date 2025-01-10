"use client";

import React, { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";

// import all the images
import vegSpread from "../assets/image/vegspread.jpg";
import farm from "../assets/image/farm.jpg";
import leaf from "../assets/image/leaf.jpeg";
import recycleTruck from "../assets/image/recycletruck.jpg";
import vegetableFood from "../assets/image/vegetableFood.jpg";
import vegetableFood2 from "../assets/image/vegfood2.jpg";
import vegetableFood3 from "../assets/image/vegfood3.jpg";
import truch from "../assets/image/truck.jpeg";
import chefCooking from "../assets/image/chefcooking.jpg";
import servingFood from "../assets/image/servingfood.jpg";
import diningFood from "../assets/image/diningin.jpg";
import deliveringFood from "../assets/image/deliveringFood.jpg";

const Approach = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".divAnimation");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-fadeIn");
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    const spinnableElements = document.querySelectorAll(".spinnable");
    const spinObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-spin");
        }
      });
    });

    spinnableElements.forEach((element) => spinObserver.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
                    @keyframes appear {
                        from {
                            opacity: 0;
                            scale: 0.5;
                        }
                        to {
                            opacity: 1;
                            scale: 1;
                        }
                    }
                    .animation-fadeIn {
                        animation: appear 1s ease-in-out;
                    }

                    @keyframes spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    .animation-spin {
                        animation: spin 2s ease-in-out;
                    }
                `}
      </style>
      <main className="flex flex-col pb-10" data-scroll-container>
        <section
          className=" w-full flex flex-row gap-5 justify-between px-10 pb-32 mb-16"
          data-scroll-section
        >
          <div className="divAnimation rounded-3xl border-black flex-grow border-2 flex flex-col justify-end p-5 gap-3 pb-14">
            <h1 className="sm:text-2xl md:text-6xl lg:text-8xl w-[90%] text-balance font-bold text-green-700">
              Our Approach and Commitments
            </h1>
            <p className="text-3xl w-[80%]">
              At Hayat Greens we make sure to deliver the most premium food
              possible sourced ethically and sustainably to ensure customer
              satisfaction in all areas
            </p>
          </div>
          <div className="min-w-[40%] max-w-[40%] rounded-3xl flex flex-col gap-5 flex-shrink">
            <div className="divAnimation w-full border-black flex-grow rounded-3xl border-2 flex flex-col justify-end overflow-hidden gap-2">
              <img
                src={vegSpread.src}
                alt="Farm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="divAnimation w-full border-black rounded-3xl border-2 flex-shrink flex flex-col overflow-hidden p-5">
              <h1 className="text-[3.5rem] font-bold">Learn About Our</h1>
              <div className="flex flex-row gap-2 flex-grow">
                <div className="border-2 border-black hover:border-[#35c05f] active:border-[#288f47] py-5 px-4 rounded-l-3xl flex flex-col justify-center items-center w-full group cursor-pointer">
                  <h2 className="text-[1.6rem] group-hover:text-[#35c05f] group-active:text-[#288f47] underline underline-offset-4 text-nowrap">
                    Sustainability
                  </h2>
                </div>
                <div className="border-2 border-black hover:border-[#35c05f] active:border-[#288f47] py-5 px-4 flex flex-col justify-center items-center w-full group cursor-pointer">
                  <h2 className="text-[1.6rem] group-hover:text-[#35c05f] group-active:text-[#288f47] underline underline-offset-4 text-nowrap">
                    Farm-to-Plate
                  </h2>
                </div>
                <div className="border-2 border-black hover:border-[#35c05f] active:border-[#288f47] py-5 px-4 rounded-r-3xl flex flex-col justify-center items-center w-full group cursor-pointer">
                  <h2 className="text-[1.6rem] group-hover:text-[#35c05f] group-active:text-[#288f47] underline underline-offset-4 text-center">
                    Ways to Eat
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col -mt-32 px-10 bg-[#FAECAD] bg-opacity-30 justify-center gap-8"
          id="sustainability"
          data-scroll-section
        >
          <h1 className="flex text-[3.5rem] font-bold text-green-700">
            Our Sustainable and Eco-Friendly Practices
          </h1>
          <div className="w-full flex flex-row gap-5 justify-between h-[42rem]">
            <div className="min-w-[38%] max-w-[38%] rounded-3xl flex flex-col gap-5 flex-shrink">
              <div className="w-full h-[45%] gap-5 flex flex-row">
                <div className="divAnimation w-full border-black rounded-3xl border-2 flex flex-col p-5 justify-end gap-3">
                  <SlGlobe size={70} color="green" className="spinnable" />
                  <h1 className="text-[1.8rem] font-semibold text-balance">
                    Going Green in More Ways Than One
                  </h1>
                </div>
                <div className="divAnimation w-full border-black rounded-3xl border-2 flex flex-row justify-center items-center overflow-hidden">
                  <img
                    src={leaf.src}
                    alt="Farm"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="divAnimation w-full border-black rounded-3xl border-2 flex-grow p-5  flex flex-col justify-center gap-3">
                <h1 className="text-4xl font-semibold">
                  We Minimize CO2 Emissions
                </h1>
                <p className="text-2xl w-[95%]">
                  We ensure efficient transportation of our fresh resources and
                  limit CO2 by strictly monitoring our partners' CO2 output. Our
                  route optimization is second to none, ensuring our delivery
                  trucks emit the least CO2 possible.
                </p>
              </div>
            </div>
            <div className="divAnimation rounded-3xl border-green-500 min-w-[24%] border-2 flex flex-col justify-between p-5">
              <div className="flex-grow flex flex-row justify-center items-center">
                <FaChartPie size={180} color="green" className="spinnable" />
              </div>
              <div>
                <h1 className="text-4xl text-balance font-semibold">
                  Not convinced? Our numbers speak for themselves!
                </h1>
                <button className="bg-[#D6FA32] text-black px-10 h-12 rounded-full mt-2 text-xl shadow-lg w-fit flex flex-row items-center justify-between gap-3">
                  Open Table{" "}
                  <span>
                    <FiExternalLink size={24} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex-grow flex-col flex gap-5">
              <div className="divAnimation rounded-3xl border-2 flex-grow w-full border-black p-5 flex flex-col justify-center gap-3">
                <h1 className="text-4xl font-semibold">We Don't Waste</h1>
                <p className="text-2xl w-[95%]">
                  Any excess food we have left over that is still edible goes
                  straight to donations, limiting any waste we may have at the
                  end of the day.
                </p>
              </div>
              <div className="divAnimation rounded-3xl border-2 flex w-full h-[60%] border-black flex-row justify-center items-center overflow-hidden">
                <img
                  src={recycleTruck.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col px-10 mb-10 justify-center gap-8"
          id="farm-to-table"
          data-scroll-section
        >
          <h1 className="flex text-[3.5rem] font-bold text-green-700">
            From the Farm to the Table
          </h1>
          <div className="w-full flex flex-row gap-5 justify-between h-[42rem]">
            <div
              className="divAnimation flex-grow flex-col flex gap-5 h-full w-full rounded-3xl border-black border-2
                            p-0 overflow-hidden"
            >
              <div className="border-b-2 border-black w-full h-[46%]">
                <img
                  src={farm.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex-grow px-5 pb-10 flex flex-col items-start gap-5 justify-between">
                <div className="w-full flex-shrink flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">
                    Step 1: Sourcing and Cultivation
                  </h1>
                  <p className="text-lg">
                    At Hayat Greens, we make sure to source and cultivate our
                    foods from vegan and vegetarian farms, ensuring that our
                    food is not cross contaminated with unwanted substances. We
                    pledge that our food is GMO free, providing our customers
                    with the fresh experience they deserve.
                  </p>
                </div>
                <button className="p-2 px-3 border-neutral-200 border rounded-full bg-[#D6FA32] shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="divAnimation flex-grow flex-col flex gap-5 h-full w-full rounded-3xl border-black border-2
                            p-0 overflow-hidden"
            >
              <div className="border-b-2 border-black w-full h-[46%]">
                <img
                  src={truch.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex-grow px-5 pb-10 flex flex-col items-start gap-5 justify-between">
                <div className="w-full flex-shrink flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">
                    Step 2: Transporting our Produce
                  </h1>
                  <p className="text-lg">
                    {" "}
                    Our trucks take the most optimal paths, limiting their CO2
                    output while also making stops at donation centers if we are
                    ever overstocked. Although we cannot be 100% electric, we
                    opt for suppliers who can send our ingredients with more
                    efficient, electric vehicles.
                  </p>
                </div>
                <button className="p-2 px-3 border-neutral-200 border rounded-full bg-[#D6FA32] shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="divAnimation flex-grow flex-col flex gap-5 h-full w-full rounded-3xl border-black border-2
                            p-0 overflow-hidden"
            >
              <div className="border-b-2 border-black w-full h-[46%]">
                <img
                  src={chefCooking.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex-grow px-5 pb-10 flex flex-col items-start gap-5 justify-between">
                <div className="w-full flex-shrink flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">
                    Step 3: Preparation in the Kitchen
                  </h1>
                  <p className="text-lg">
                    If you can think of a way to prepare food our chefs can do
                    it! These high-quality chefs are handpicked to deliver the
                    highest caliber of meals while also taking the time and
                    effort to cater to individual customers' needs. Our chefs
                    are also trained to not mix any non vegan ingredients with
                    vegan ones.
                  </p>
                </div>
                <button className="p-2 px-3 border-neutral-200 border rounded-full bg-[#D6FA32] shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="divAnimation flex-grow flex-col flex gap-5 h-full w-full rounded-3xl border-black border-2
                            p-0 overflow-hidden"
            >
              <div className="border-b-2 border-black w-full h-[46%]">
                <img
                  src={servingFood.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex-grow px-5 pb-10 flex flex-col items-start gap-5 justify-between">
                <div className="w-full flex-shrink flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">
                    Step 4: The Final Plate
                  </h1>
                  <p className="text-lg">
                    After our tedious process of cultivating, shipping, and
                    preparing your food, you as the customer finally get the
                    taste you deserve. Our waiters make sure to note any
                    preferences you may have, from cooking methods to custom
                    modifications.
                  </p>
                </div>
                <button className="p-2 px-3 border-neutral-200 border rounded-full bg-[#D6FA32] shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col bg-[#FAECAD] bg-opacity-30 px-10 mb-10 justify-center gap-8"
          id="process"
          data-scroll-section
        >
          <h1 className="flex text-[3.5rem] font-bold text-green-700">
            Ready to Eat? Choose How!
          </h1>
          <div className="w-full flex flex-row gap-5 justify-between h-[42rem]">
            <div className="flex-grow flex-col flex gap-5 h-full">
              <div className="divAnimation rounded-3xl border-black w-full border-2 h-[55%] overflow-hidden">
                <img
                  src={diningFood.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="divAnimation rounded-3xl border-black w-full border-2 flex-grow p-5 flex flex-col justify-start gap-2">
                <h1 className="text-[2.4rem] font-semibold underline decoration-wavy decoration-green-700">
                  Order Take-Out
                </h1>
                <p className="text-[1.6rem] w-full text-balance flex-shrink">
                  Enjoy our food from the comfort and convenience of your home.
                </p>
                <a href="/order">
                  <button className="bg-[#D6FA32] text-black px-10 h-12 rounded-full text-xl shadow-lg w-fit">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-col-reverse flex gap-5 h-full min-w-[28.5%]">
              <div className="divAnimation rounded-3xl border-black w-full border-2 h-[55%] overflow-hidden">
                <img
                  src={deliveringFood.src}
                  alt="Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="divAnimation rounded-3xl border-black w-full border-2 flex-grow p-5 flex flex-col justify-start gap-2">
                <h1 className="text-[2.4rem] font-semibold underline decoration-wavy decoration-green-700">
                  Reserve a Table
                </h1>
                <p className="text-[1.6rem] w-full text-balance flex-shrink">
                  Explore our countless facilities and enjoy the in-person
                  experience.
                </p>
                <a href="/order">
                  <button className="bg-[#D6FA32] text-black px-10 h-12 rounded-full text-xl shadow-lg w-fit">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
            <div className="divAnimation max-w-[43%] flex-col flex gap-5 rounded-3xl border-green-700 w-full border-2 h-full overflow-hidden">
              <img
                src={vegetableFood3.src}
                alt="Farm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Approach;
