import React from "react";
import { Card, CardContent } from "/src/components/ui/card";

export const ContentMain = () => {
  const statsCards = [
    {
      value: "3.000",
      label: "голосований",
      width: "w-full",
      image: null,
      mobileWidth: "w-full",
    },
    {
      value: "4.000.000",
      label: "транзакций",
      width: "w-full",
      image: "/src/assets/images/main0.png",
      mobileWidth: "w-full",
    },
    {
      value: "150",
      label: "администраторов",
      width: "w-full",
      image: null,
      mobileWidth: "w-full",
    },
    {
      value: "1.500",
      label: "уникальных пользователей",
      width: "w-full",
      image: "/src/assets/images/main00.png",
      mobileWidth: "w-full",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center px-4 md:px-[8%] gap-4 md:gap-2.5 my-4 mx-4">
      {statsCards.map((card, index) => (
        <Card
          key={`stat-card-${index}`}
          className={`relative ${card.width} md:${card.width} h-[160px] md:h-[200px] bg-white rounded-[15px] md:rounded-[20px] shadow-[0px_2px_10px_#00000040] w-full`}
        >
          <CardContent className="p-0 h-full">
            <div className="flex flex-col items-start gap-2 absolute top-6 md:top-[66px] left-4 md:left-6">
              <div className="relative text-cryptblack text-2xl md:text-[32px] whitespace-nowrap tracking-[0] leading-[normal]">
                {card.value}
              </div>
              <div className="relative w-fit text-cryptblack text-sm md:text-base whitespace-nowrap tracking-[0] leading-[normal]">
                {card.label}
              </div>
            </div>

            {card.image && (
              <img
                className={`absolute w-[120px] h-[160px] md:w-[200px] md:h-[200px] right-0 bottom-0 md:bottom-auto`}
                alt="Visualization element"
                src={card.image}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};