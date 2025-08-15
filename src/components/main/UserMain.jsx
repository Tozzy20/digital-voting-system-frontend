import React from "react";
import { Badge } from "/src/components/ui/badge";
import { Button } from "/src/components/ui/button";
import { Card, CardContent } from "/src/components/ui/card";

export const UserMain = () => {
  const votingCards = [
    {
      id: 1,
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      groupName: "Наименование группы людей",
      location: "(UTC+3) Россия - Москва",
      date: "06.07.2025",
      time: "10:00",
      status: "Голосование на этапе регистрации",
      type: "Тайное",
    },
    {
      id: 2,
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      groupName: "Наименование группы людей",
      location: "(UTC+3) Россия - Москва",
      date: "06.07.2025",
      time: "10:00",
      status: "Голосование на этапе регистрации",
      type: "Тайное",
    },
  ];

  return (
    <section className="w-full bg-white rounded-[15px] md:rounded-[20px] overflow-hidden shadow-[0px_2px_10px_#00000040] p-4 md:p-6 mx-4">
      <h2 className="text-cryptblack text-lg md:text-xl mb-4 md:mb-6">
        Мои голосования
      </h2>

      <div className="flex flex-col gap-4">
        {votingCards.map((card) => (
          <Card
            key={card.id}
            className="w-full border border-solid border-[#ededed] rounded-[15px] md:rounded-[20px] overflow-hidden"
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-cryptblack text-sm md:text-base">
                  {card.title}
                </h3>

                <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-3">
                  <div className="font-normal text-sm md:text-base">
                    {card.groupName}
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 md:w-6 md:h-6"
                      alt="Longitude"
                      src="/src/assets/images/user0.png"
                    />
                    <span className="font-normal text-sm md:text-base whitespace-nowrap">
                      {card.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-2.5">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-2.5">
                    <div className="flex flex-col gap-2 md:gap-2.5 w-full md:max-w-[400px]">
                      <Badge className="flex items-center justify-center gap-2 p-2 md:gap-2.5 md:p-2.5 text-[#564e13] bg-[#FFFBD0] rounded-lg md:rounded-lg font-normal">
                        <img
                          className="w-5 h-5 md:w-6 md:h-6"
                          alt="Identification"
                          src="/src/assets/images/user3.png"
                        />
                        <span className="text-sm md:text-base whitespace-nowrap">
                          {card.status}
                        </span>
                      </Badge>

                      <Badge className="flex items-center justify-center gap-2 p-2 md:gap-2.5 md:p-2.5 bg-[#f3f3f3] rounded-lg md:rounded-lg font-normal hover:bg-[#f3f3f3]">
                        <img
                          className="w-5 h-5 md:w-6 md:h-6"
                          alt="File zip"
                          src="/src/assets/images/user4.png"
                        />
                        <span className="text-sm md:text-base whitespace-nowrap">
                          {card.type}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-2.5 bg-[#fff6f6] rounded-lg p-3 md:p-4 w-full">
                      <div className="text-sm md:text-base">
                        Окончание регистрации
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-2">
                          <img
                            className="w-5 h-5 md:w-6 md:h-6"
                            alt="Calendar"
                            src="/src/assets/images/user2.png"
                          />
                          <span className="text-sm md:text-base whitespace-nowrap">
                            {card.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            className="w-5 h-5 md:w-6 md:h-6"
                            alt="Clock"
                            src="/src/assets/images/user1.png"
                          />
                          <span className="text-sm md:text-base whitespace-nowrap">
                            {card.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-4">
                  <Button className="w-full md:w-auto bg-blue-500 px-4 py-3 md:px-5 md:py-4 rounded-lg hover:bg-blue-300">
                    <span className="text-white text-sm md:text-base">
                      Зарегистрироваться
                    </span>
                  </Button>
                  <span className="text-cryptred text-red-500 text-sm md:text-base">
                    Вы не зарегистрированы
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="link"
        className="mt-4 md:mt-6 p-0 h-auto [font-family:'TT_Supermolot_Neue_Trl_Ext-Db',Helvetica] font-normal text-cryptblack text-sm md:text-base"
      >
        Показать больше
      </Button>
    </section>
  );
};