import React from "react";
import { Card, CardContent } from "/src/components/ui/card";

export const ContentMain = () => {
  const statsCards = [
    {
      value: "3.000",
      label: "голосований",
      width: "w-xs",
      image: null,
    },
    {
      value: "4.000.000",
      label: "транзакций",
      width: "w-lg",
      image: "/src/assets/images/main0.png",
    },
    {
      value: "150",
      label: "администраторов",
      width: "w-xs",
      image: null,
    },
    {
      value: "1.500",
      label: "уникальных пользователей",
      width: "w-lg",
      image: "/src/assets/images/main00.png",
    },
  ];

  return (
    <section className="flex items-center px-[8%] gap-2.5 m-4">
      {statsCards.map((card, index) => (
        <Card
          key={`stat-card-${index}`}
          className={`relative ${card.width} h-[200px] bg-white rounded-[20px] shadow-[0px_2px_10px_#00000040]`}
        >
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-2.5 absolute top-[66px] left-6">
              <div className="relative mt-[-1.00px] text-cryptblack text-[32px] whitespace-nowrap tracking-[0] leading-[normal]">
                {card.value}
              </div>
              <div className="relative w-fit text-cryptblack text-base whitespace-nowrap tracking-[0] leading-[normal]">
                {card.label}
              </div>
            </div>

            {card.image && (
              <img
                className={`absolute ${index === 1 ? "w-[200px] h-[200px] right-0" : "w-[185px] h-[200px] right-0"}`}
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