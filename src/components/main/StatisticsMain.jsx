import React from "react";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Button } from "/src/components/ui/button";
import { Card, CardContent } from "/src/components/ui/card";

export const StatisticsMain = () => {
  const votingInfo = [
    {
      title: "Начало голосования",
      date: "06.07.2025",
      time: "10:00",
      bgColor: "bg-[#f6fff8]",
    },
    {
      title: "Окончание голосования",
      date: "06.07.2025",
      time: "10:00",
      bgColor: "bg-[#fff6f6]",
    },
  ];

  return (
    <Card className="w-full max-w-full md:max-w-[520px] h-auto md:h-[100%] rounded-[15px] md:rounded-[20px] bg-white shadow-[0px_2px_10px_#00000040] overflow-hidden mx-4">
      <CardContent className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl">
          Актуальное
        </h2>

        <p className="mt-3 md:mt-4 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-3 md:gap-1">
          {votingInfo.map((info, index) => (
            <Card
              key={index}
              className={`${info.bgColor} w-full md:w-72 rounded-lg border-none`}
            >
              <CardContent className="flex flex-col items-start gap-2 md:gap-2.5 px-3 md:px-4 py-2">
                <p className="text-sm md:text-base">
                  {info.title}
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full">
                  <div className="inline-flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-normal text-cryptblack text-sm md:text-base whitespace-nowrap">
                      {info.date}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-normal text-cryptblack text-sm md:text-base whitespace-nowrap">
                      {info.time}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6 md:mt-10 relative">
          <button className="absolute left-0 md:left-0 z-10">
            <img
              className="w-4 h-7 md:w-5 md:h-9"
              alt="Previous"
              src="/src/assets/images/polygon 7.png"
            />
          </button>

          <div className="relative w-64 h-64 md:w-[350px] md:h-[350px]">
            <div className="relative w-[240px] h-[240px] md:w-[361px] md:h-[366px] -top-2 md:-top-4 left-[-8px] md:left-[-11px]">
              <img
                className="absolute w-[120px] h-[160px] md:w-[215px] md:h-[302px] top-0 left-0"
                alt="Progress background"
                src="/src/assets/images/ellipse 2055.png"
              />

              <div className="flex flex-col w-[120px] md:w-[178px] items-center gap-1 md:gap-2.5 absolute top-[90px] md:top-[142px] left-[60px] md:left-[97px]">
                <div className="font-normal text-cryptblack text-3xl md:text-[40px] text-center">
                  65%
                </div>
                <div className="font-normal text-cryptlowgrey text-xs md:text-base text-center whitespace-nowrap">
                  Времени прошло
                </div>
              </div>

              <img
                className="absolute w-[200px] h-[220px] md:w-[310px] md:h-[350px] top-2 md:top-4 left-[35px] md:left-[51px]"
                alt="Progress indicator"
                src="/src/assets/images/ellipse 2054.png"
              />
            </div>
          </div>

          <button className="absolute right-0 md:right-0 z-10">
            <img
              className="w-4 h-7 md:w-5 md:h-9"
              alt="Next"
              src="/src/assets/images/polygon 6.png"
            />
          </button>
        </div>

        <Button className="w-full md:w-72 mt-6 md:mt-25 bg-green-400 hover:bg-green-500 text-white rounded-lg px-4 py-3 md:px-5 md:py-4 font-normal text-base">
          Проголосовать
        </Button>
      </CardContent>
    </Card>
  );
};