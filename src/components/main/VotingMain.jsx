import React from "react";
import { Card, CardContent } from "/src/components/ui/card";

export const VotingMain = () => {

  const statusTypes = [
    { color: "bg-[#FFD17D]", label: "Запланировано" },
    { color: "bg-[#437DE9]", label: "Активно" },
    { color: "bg-[#EE5B5B]", label: "Завершено" },
  ];

  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const calendarWeeks = [
    [
      { day: "30", status: "cryptred", isCurrentMonth: false },
      { day: "01", status: null, isCurrentMonth: true },
      { day: "02", status: "cryptred", isCurrentMonth: true },
      { day: "03", status: "cryptblue", isCurrentMonth: true },
      { day: "04", status: "cryptorange", isCurrentMonth: true },
      { day: "05", status: "cryptorange", isCurrentMonth: true },
      { day: "06", status: null, isCurrentMonth: true },
    ],
    [
      { day: "07", status: "cryptred", isCurrentMonth: true },
      { day: "08", status: null, isCurrentMonth: true },
      { day: "09", status: "cryptred", isCurrentMonth: true },
      { day: "10", status: "cryptblue", isCurrentMonth: true },
      { day: "11", status: "cryptorange", isCurrentMonth: true },
      { day: "12", status: "cryptorange", isCurrentMonth: true },
      { day: "13", status: null, isCurrentMonth: true },
    ],
    [
      { day: "14", status: "cryptred", isCurrentMonth: true },
      { day: "15", status: null, isCurrentMonth: true },
      { day: "16", status: "cryptred", isCurrentMonth: true },
      { day: "17", status: "cryptblue", isCurrentMonth: true },
      { day: "18", status: "cryptorange", isCurrentMonth: true },
      { day: "19", status: "cryptorange", isCurrentMonth: true },
      { day: "20", status: null, isCurrentMonth: true },
    ],
    [
      { day: "21", status: "cryptred", isCurrentMonth: true },
      { day: "22", status: null, isCurrentMonth: true },
      { day: "23", status: "cryptred", isCurrentMonth: true },
      { day: "24", status: "cryptblue", isCurrentMonth: true },
      { day: "25", status: "cryptorange", isCurrentMonth: true },
      { day: "26", status: "cryptorange", isCurrentMonth: true },
      { day: "27", status: null, isCurrentMonth: true },
    ],
    [
      { day: "28", status: "cryptred", isCurrentMonth: true },
      { day: "29", status: null, isCurrentMonth: true },
      { day: "30", status: "cryptred", isCurrentMonth: true },
      { day: "31", status: "cryptblue", isCurrentMonth: true },
      { day: "01", status: "cryptorange", isCurrentMonth: false },
      { day: "02", status: "cryptorange", isCurrentMonth: false },
      { day: "03", status: null, isCurrentMonth: false },
    ],
    [
      { day: "04", status: "cryptred", isCurrentMonth: false },
      { day: "05", status: null, isCurrentMonth: false },
      { day: "06", status: "cryptred", isCurrentMonth: false },
      { day: "07", status: "cryptblue", isCurrentMonth: false },
      { day: "08", status: "cryptorange", isCurrentMonth: false },
      { day: "09", status: "cryptorange", isCurrentMonth: false },
      { day: "10", status: null, isCurrentMonth: false },
    ],
  ];

  return (
    <Card className="w-full h-auto rounded-[20px] shadow-[0px_2px_10px_#00000040]">
      <CardContent className="p-8">
        <h2 className="font-normal text-cryptblack text-xl mb-6">
          Календарь голосований
        </h2>

        <div className="flex items-center gap-5 mb-4">
          {statusTypes.map((status, index) => (
            <div key={index} className="flex items-end gap-2.5">
              <div className={`w-5 h-5 ${status.color} rounded-[10px]`} />
              <span className="font-normal text-cryptblack text-base">
                {status.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-5 px-5 py-4 rounded-lg border border-solid border-[#cccccc]">
            <span className="[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] font-normal text-cryptblack text-base">
              Июль 2025
            </span>
            <div className="flex items-center gap-2">
              <img
                className="w-[7.5px] h-[12.12px]"
                alt="Previous month"
                src="/src/assets/images/polygon 5.png"
              />
              <img
                className="w-[7.5px] h-[12.12px]"
                alt="Next month"
                src="/src/assets/images/polygon 4.png"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] w-full">
          <div className="flex gap-[5px] w-full">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="flex-1 h-16 bg-cryptultralightblue rounded-xl flex items-center justify-center"
              >
                <span className="font-normal text-cryptblack text-xl">
                  {day}
                </span>
              </div>
            ))}
          </div>

          {calendarWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex gap-[5px] w-full">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`relative flex-1 h-16 rounded-xl border border-solid ${
                    day.isCurrentMonth ? "border-[#cccccc]" : "border-[#f3f3f3]"
                  }`}
                >
                  <span
                    className={`absolute top-[27px] left-3 text-xl ${
                      day.isCurrentMonth
                        ? "[font-family:'TT_Supermolot_Neue_Trl_Ext-Md',Helvetica] text-cryptblack"
                        : "[font-family:'TT_Supermolot_Neue_Trl_Ext-Rg',Helvetica] text-cryptlowgrey"
                    } font-normal`}
                  >
                    {day.day}
                  </span>
                  {day.status && (
                    <div
                      className={`absolute w-4 h-4 top-2.5 left-[97px] bg-${day.status} rounded-lg`}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};