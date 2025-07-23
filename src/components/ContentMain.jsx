import React from "react";
import { Card, CardContent } from "/src/components/ui/card";

export const ContentMain = () => {
  const statsCards = [
    {
      value: "3.000",
      label: "голосований",
      width: "w-[232px]",
      image: null,
    },
    {
      value: "4.000.000",
      label: "транзакций",
      width: "w-[473px]",
      image: "/src/assets/images/main0.png",
    },
    {
      value: "150",
      label: "администраторов",
      width: "w-[232px]",
      image: null,
    },
    {
      value: "1.500",
      label: "уникальных пользователей",
      width: "w-[473px]",
      image: "/src/assets/images/main00.png",
    },
  ];

  return (
    <section className="flex items-center gap-2.5 m-4">
      {statsCards.map((card, index) => (
        <Card
          key={`stat-card-${index}`}
          className={`relative ${card.width} h-[200px] bg-cryptwhite rounded-[20px] overflow-hidden shadow-[0px_2px_10px_#00000040]`}
        >
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-2.5 absolute top-[66px] left-6">
              <div className="relative w-fit mt-[-1.00px] text-cryptblack text-[32px] whitespace-nowrap tracking-[0] leading-[normal]">
                {card.value}
              </div>
              <div className="relative w-fit text-cryptblack text-base whitespace-nowrap tracking-[0] leading-[normal]">
                {card.label}
              </div>
            </div>

            {card.image && (
              <img
                className={`absolute ${index === 1 ? "w-[200px] h-[200px] top-0 left-[273px]" : "w-[185px] h-[200px] top-0 left-72"}`}
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