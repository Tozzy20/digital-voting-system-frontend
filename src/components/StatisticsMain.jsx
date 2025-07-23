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
    <Card className="max-w-[520px] h-auto rounded-[20px] shadow-[0px_2px_10px_#00000040] overflow-hidden">
      <CardContent className="p-6">
        <h2 className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Bd',Helvetica] font-normal text-cryptblack text-xl">
          Актуальное
        </h2>

        <p className="mt-4 [font-family:'TT_Supermolot_Neue_Trl_Ext-Bd',Helvetica] font-normal text-cryptblack text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>

        <div className="flex items-center justify-between mt-4 gap-1">
          {votingInfo.map((info, index) => (
            <Card
              key={index}
              className={`${info.bgColor} w-72 rounded-lg border-none`}
            >
              <CardContent className="flex flex-col items-start gap-2.5 px-4 py-2.5">
                <p className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptlowgrey text-base">
                  {info.title}
                </p>
                <div className="flex items-center gap-4 w-full">
                  <div className="inline-flex items-center gap-2.5">
                    <CalendarIcon className="w-6 h-6" />
                    <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base whitespace-nowrap">
                      {info.date}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2.5">
                    <ClockIcon className="w-6 h-6" />
                    <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base whitespace-nowrap">
                      {info.time}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 relative">
          <button className="absolute left-0 z-10">
            <img
              className="w-5 h-9"
              alt="Previous"
              src="/src/assets/images/polygon 7.png"
            />
          </button>

          <div className="relative w-[350px] h-[350px]">
            <div className="relative w-[361px] h-[366px] -top-4 left-[-11px]">
              <img
                className="absolute w-[215px] h-[302px] top-0 left-0"
                alt="Progress background"
                src="/src/assets/images/ellipse 2055.png"
              />

              <div className="flex flex-col w-[178px] items-center gap-2.5 absolute top-[142px] left-[97px]">
                <div className="[font-family:'TT_Supermolot_Neue_Trl_Ext-XBd',Helvetica] font-normal text-cryptblack text-[40px] text-center">
                  65%
                </div>
                <div className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptlowgrey text-base text-center whitespace-nowrap">
                  Времени прошло
                </div>
              </div>

              <img
                className="absolute w-[310px] h-[350px] top-4 left-[51px]"
                alt="Progress indicator"
                src="/src/assets/images/ellipse 2054.png"
              />
            </div>
          </div>

          <button className="absolute right-0 z-10">
            <img
              className="w-5 h-9"
              alt="Next"
              src="/src/assets/images/polygon 6.png"
            />
          </button>
        </div>

        <Button className="w-72 mt-10 bg-cryptgreen hover:bg-cryptdarkgreen text-cryptwhite rounded-lg px-5 py-4 [font-family:'TT_Supermolot_Neue_Trl_Ext-Db',Helvetica] font-normal text-base">
          Проголосовать
        </Button>
      </CardContent>
    </Card>
  );
};