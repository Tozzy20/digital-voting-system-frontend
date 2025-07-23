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
    <section className="max-w-[100%] bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_10px_#00000040] p-6">
      <h2 className="text-cryptblack text-xl mb-6">
        Мои голосования
      </h2>

      <div className="flex flex-col gap-4">
        {votingCards.map((card) => (
          <Card
            key={card.id}
            className="w-full border border-solid border-[#ededed] rounded-[20px] overflow-hidden"
          >
            <CardContent className="p-6 max-h-[317px]">
              <div className="flex flex-col gap-6">
                <h3 className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Bd',Helvetica] font-normal text-cryptblack text-base">
                  {card.title}
                </h3>

                <div className="flex flex-wrap justify-between">
                  <div className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptlowgrey text-base">
                    {card.groupName}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt="Longitude"
                      src="/src/assets/images/user0.png"
                    />
                    <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base whitespace-nowrap">
                      {card.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between gap-4">
                  <div className="flex flex-col gap-2.5 max-w-[399px]">
                    <Badge className="flex items-center justify-center gap-2.5 p-2.5 bg-cryptyellow text-[#564e13] rounded-lg font-normal hover:bg-cryptyellow">
                      <img
                        className="w-6 h-6"
                        alt="Identification"
                        src="/src/assets/images/user3.png"
                      />
                      <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Md',Helvetica] text-base whitespace-nowrap">
                        {card.status}
                      </span>
                    </Badge>

                    <Badge className="flex items-center justify-center gap-2.5 p-2.5 bg-[#f3f3f3] text-cryptblack rounded-lg font-normal hover:bg-[#f3f3f3]">
                      <img
                        className="w-6 h-6"
                        alt="File zip"
                        src="/src/assets/images/user4.png"
                      />
                      <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Md',Helvetica] text-base whitespace-nowrap">
                        {card.type}
                      </span>
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2.5 bg-[#fff6f6] rounded-lg p-4">
                    <div className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptlowgrey text-base">
                      Окончание регистрации
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          className="w-6 h-6"
                          alt="Calendar"
                          src="/src/assets/images/user2.png"
                        />
                        <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base whitespace-nowrap">
                          {card.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <img
                          className="w-6 h-6"
                          alt="Clock"
                          src="/src/assets/images/user1.png"
                        />
                        <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base whitespace-nowrap">
                          {card.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <Button className="bg-cryptblue text-cryptwhite px-5 py-4 rounded-lg hover:bg-cryptblue/90">
                    <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Db',Helvetica] font-normal text-base">
                      Зарегистрироваться
                    </span>
                  </Button>
                  <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Db',Helvetica] font-normal text-cryptred text-base">
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
        className="mt-6 p-0 h-auto [font-family:'TT_Supermolot_Neue_Trl_Ext-Db',Helvetica] font-normal text-cryptblack text-base"
      >
        Показать больше
      </Button>
    </section>
  );
};