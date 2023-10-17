import React, { useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";

function Home() {
  const [year, SetYear] = useState("");
  const [month, SetMonth] = useState("");
  const [day, SetDay] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [click, setClick] = useState(false);

  // days
  const diffDays = currentDay - day;
  const wholeDay = diffDays <= 0 ? diffDays * -1 : diffDays;

  // months
  // december is driving me nuts , can't wrap my head around it
  const diffMonths = currentMonth - month;
  const finalMonth =
    currentMonth < month
      ? month < 12
        ? currentMonth + 1
        : month > 11
        ? currentMonth
        : month
      : diffMonths;

  // Years
  const diffYears = currentYear - year;
  const finalYear = currentMonth < finalMonth ? diffYears - 1 : diffYears;

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="bg-Offwhite h-screen mt-0 pt-[20px] ">
      <div className="bg-White mt-[50px] md:mt-[80px] md:w-[70%] lg:w-[50%] mx-5 md:mx-auto rounded-md rounded-br-[100px]">
        <div className="pt-10 flex justify-start ml-8 font-bold text-2xl tracking-wider">
          <div className="flex   flex-col">
            <label className="text-start ml-4 font-bold my-2 text-Smokeygrey">
              Day
            </label>
            <input
              placeholder="DD"
              type="text"
              value={day}
              onChange={(e) => SetDay(e.target.value)}
              className="w-[70px] md:w-[100px] h-[50px] text-center font-bold mx-4  rounded-md hover:cursor-pointer border border-Smokeygrey hover:border-Purple "
            />
          </div>
          <div className="flex  flex-col ">
            <label className="text-start ml-4 font-bold my-2 text-Smokeygrey">
              Month
            </label>
            <input
              placeholder="MM"
              type="text"
              value={month}
              onChange={(e) => SetMonth(e.target.value)}
              className="w-[70px] md:w-[100px]  h-[50px] text-center font-bold mx-4  rounded-md hover:cursor-pointer border border-Smokeygrey hover:border-Purple"
            />
          </div>
          <div className="flex  flex-col ">
            <label className="text-start ml-4 font-bold my-2 text-Smokeygrey">
              Year
            </label>
            <input
              placeholder="YYYY"
              type="text"
              value={year}
              onChange={(e) => SetYear(e.target.value)}
              className="w-[70px] md:w-[100px]  h-[50px] text-center font-bold mx-4  rounded-md hover:cursor-pointer border border-Smokeygrey hover:border-Purple"
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="ml-10 w-[80%] h-[2px] bg-Offblack/10  my-5 ">
            <img
              src={Arrow}
              alt="Arrow"
              className="bg-Purple hover:bg-Offblack  rounded-full w-[50px] hover:cursor-pointer md:hidden mx-auto mt-[-15px] "
              onClick={handleClick}
            />
          </div>
          <img
            src={Arrow}
            alt="Arrow"
            className="bg-Purple  hover:bg-Offblack rounded-full w-[50px] hover:cursor-pointer hidden md:block"
            onClick={handleClick}
          />
        </div>

        {click ? (
          <div className="ml-8  pb-8 text-start text-5xl md:text-7xl font-black lowercase ">
            <span className="text-Purple flex my-3 ml-3">
              {finalYear}
              <p className="text-Offblack mx-2">YEARS</p>
            </span>
            <span className="text-Purple flex my-3 ml-3">
              {finalMonth}
              <p className="text-Offblack mx-2">MONTHS</p>
            </span>
            <span className="text-Purple flex my-3 ml-3">
              {wholeDay}
              <p className="text-Offblack mx-2">DAYS</p>
            </span>
          </div>
        ) : (
          <div className=" ml-8 pb-8 text-5xl md:text-7xl font-bold lowercase tracking-wide">
            <section className="flex">
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <p className="mx-2">YEARS</p>
            </section>
            <section className="flex">
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <p className="mx-2">MONTHS</p>
            </section>
            <section className="flex">
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <div className="bg-Purple w-[20px] h-[10px] mx-2 md:mt-10 mt-6"></div>
              <p className="mx-2">DAYS</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
