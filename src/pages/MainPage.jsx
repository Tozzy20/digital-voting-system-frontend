import React from "react";
import { Badge } from "/src/components/ui/badge";
import { Card, CardContent } from "/src/components/ui/card";
import {HeaderMain} from "/src/components/main/HeaderMain";
import { ContentMain } from "/src/components/main/ContentMain";
import { StatisticsMain } from "/src/components/main/StatisticsMain";
import { UserMain } from "/src/components/main/UserMain";
import { VotingMain } from "/src/components/main/VotingMain";
import { Link } from 'react-router-dom';

const MainPage = () => {
  const votingChartData = [
    { height: "h-[159px]", color: "bg-[#bd3636]" },
    { height: "h-[42px]", color: "bg-[#ffe3e3]" },
    { height: "h-[117px]", color: "bg-[#e77b7b]" },
    { height: "h-[75px]", color: "bg-[#f1a4a4]" },
    { height: "h-[159px]", color: "bg-[#bd3636]" },
    { height: "h-[42px]", color: "bg-[#ffe3e3]" },
    { height: "h-[117px]", color: "bg-[#e77b7b]" },
    { height: "h-[75px]", color: "bg-[#f1a4a4]" },
    { height: "h-[159px]", color: "bg-[#bd3636]" },
    { height: "h-[42px]", color: "bg-[#ffe3e3]" },
    { height: "h-[117px]", color: "bg-[#e77b7b]" },
    { height: "h-[75px]", color: "bg-[#f1a4a4]" },
  ];

  const chartDates = ["01.04", "01.05", "01.06", "01.07"];

  return (
    <div
      className=" font-supermolot flex flex-col items-center relative w-full bg-[#eff2f7]"
      data-model-id="2475:12451"
    >
      <HeaderMain />

      <div className="relative w-full overflow-hidden mask-image">
        <img
          className="w-full max-w-[80%] mx-auto object-cover rounded-2xl"
          alt="Image"
          src="/src/assets/images/main.png"
        />

        <div className="absolute text-white top-[840px] left-80 text-cryptwhite text-5xl tracking-[0] leading-[normal]">
          КРИПТОГОЛОСОВАНИЕ
        </div>

        <div className="absolute text-white top-[890px] left-80 text-cryptwhite text-5xl tracking-[0] leading-[normal]">
          НА БЛОКЧЕЙНЕ
        </div>

        <div className="absolute text-white font-mak top-[62px] left-80  text-cryptwhite text-[40px] whitespace-nowrap tracking-[0] leading-[normal]">
          Главная
        </div>

        <div className="absolute top-[33px] left-80 text-cryptdarkgrey text-base whitespace-nowrap tracking-[0] leading-[normal]">
          Главная
        </div>
      </div>

        <ContentMain />
 
      
      <div className="flex gap-4">
        <div>
          <UserMain />
        </div>

        <div>
          <StatisticsMain />
        </div>
      </div>

      <div className="flex gap-4 px-[4%] mt-8 w-full max-w-[80%] mx-auto">
      {/* Левая колонка: две карточки */}
      <div className="flex flex-col w-full max-w-[473px] gap-2.5">
        <Card className="w-full rounded-[20px] overflow-hidden shadow-[0px_2px_10px_#00000040]">
          <CardContent className="p-0 relative">
            <div className="flex flex-col w-[327px] items-start gap-2.5 p-6">
              <div className="relative self-stretch mt-[-1.00px] text-cryptblack text-xl text-center tracking-[0] leading-[normal]">
                Количество голосующих
              </div>
                  <div className="relative self-stretch text-cryptlowgrey text-base tracking-[0] leading-[normal]">
                Динамика голосующих по дням
              </div>
            </div>

            <div className="flex w-[425px] h-[159px] items-end gap-[5px] mx-6 mt-24">
              {votingChartData.map((bar, index) => (
                <div
                  key={`bar-${index}`}
                  className={`relative flex-1 grow ${bar.height} ${bar.color} rounded`}
                />
              ))}
            </div>

            <div className="flex w-[425px] items-center justify-between mx-6 mt-[82px] m-6">
              {chartDates.map((date, index) => (
                <div
                  key={`date-${index}`}
                  className="relative w-fit mt-[-1.00px] text-cryptlowgrey text-base whitespace-nowrap tracking-[0] leading-[normal]"
                >
                  {date}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full rounded-[20px] overflow-hidden shadow-[0px_2px_10px_#00000040]">
          <CardContent className="p-0 relative">
            <div className="flex flex-col w-[327px] items-start gap-2.5 p-6">
              <div className="relative self-stretch mt-[-1.00px] text-cryptblack text-xl text-center tracking-[0] leading-[normal]">
                Количество голосующих
              </div>
              <div className="relative self-stretch text-cryptlowgrey text-base tracking-[0] leading-[normal]">
               Всего проголосовало
              </div>
            </div>

            <div className="inline-flex items-start justify-end gap-2.5 mx-6 mt-[114px]">
              <div className="relative w-fit mt-[-1.00px] text-cryptblack text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
                1500
              </div>
              <Badge className="bg-cryptlightgreen text-cryptdarkgreen p-1 h-auto">
                <span className="text-base">+16%</span>
              </Badge>
            </div>

            <div className="m-6 mx-6 mt-[150px] text-cryptlowgrey text-base whitespace-nowrap tracking-[0] leading-[normal]">
              В период с 10.06.2025 по 10.07.2025
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Правый блок: VotingMain */}
      <div className="flex-1">
        <VotingMain />
      </div>

      </div>
    </div>
  );
};

export default MainPage;