import React from "react";
import { Avatar, AvatarFallback } from "/src/components/ui/avatar";
import { Button } from "/src/components/ui/button";
import { Link } from "react-router-dom";

export const HeaderMain = () => {
  const navItems = [
    { text: "Главная" },
    { text: "Пользователи ○", hasDot: true },
    { text: "Голосования ○", hasDot: true },
    { text: "Добавить ○", hasDot: true, highlighted: true },
  ];

  return (
    <header className="bg-[#212121] font-supermolot w-full h-[100px] bg-cryptblack flex items-center justify-between px-60">
      <div className="flex items-center gap-6">
      <img className="w-16 h-16 bg-cryptlowgrey ml-[8%]" src="/src/assets/images/Ellipse 2051.png" alt="Logo" />
      <nav className="text-white flex gap-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2.5 ${
              item.highlighted ? "px-5 py-4 rounded-lg border border-solid border-white" : ""
            }`}
          >
            <div className="text-cryptwhite text-base whitespace-nowrap">
              {item.text}
            </div>
            {item.hasDot && <div className="w-2 h-2 bg-cryptlowgrey rounded"></div>}
          </div>
        ))}
      </nav>
      </div>

      <div className="flex items-center gap-6 mr-[8%]">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
            <img className="w-8 h-8" src="/src/assets/images/3.png" alt="Уведомления" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
            <img className="w-8 h-8" src="/src/assets/images/main1.png" alt="Настройки" />
          </Button>
        </div>

        <div className="flex items-center gap-2.5 p-2.5">
          <div className="text-white text-base whitespace-nowrap">
            Фамилия И.О.
          </div>
          <Link to='/login'>
          <img className="w-8 h-8" src="/src/assets/images/user-circle.png" alt="Аватар" />
          </Link>
        </div>
      </div>
    </header>
  );
};