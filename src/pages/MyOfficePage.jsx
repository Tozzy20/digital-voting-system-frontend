import React, { useState } from "react";
import Templates from "../components/office/Templates";
import HeaderLogin from "/src/components/HeaderLogin";
import Sidebar from "/src/components/office/Sidebar";
import PollsList from "../components/office/PollsList";
import CreateVoting from "/src/components/office/CreateVoting";

const MyOfficePage = () => {
  const [activeContent, setActiveContent] = useState("create-poll"); // Устанавливаем 'create-poll' как начальное активное состояние

  // Функция, которая будет вызываться при клике на пункт сайдбара
  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "create-poll":
        return <CreateVoting />;

      case "poll-templates":
        return <Templates />; // Компонент "Список шаблонов"
      case "polls":
        return <PollsList />; // Компонент "Голосования"

      default:
        return <Templates />;
    }
  };

  return (
    <div className="bg-[#EFF3F8] min-h-screen">
      <HeaderLogin />

      <div className="container mx-auto px-4 pt-[99px]">

        <h1 className="font-mak text-[40px] pb-[24px]">Рабочий кабинет</h1>
        <div className="flex">
          <Sidebar
            activeItem={activeContent}
            onMenuItemClick={handleMenuItemClick}
          />
          <div className="ml-[10px] flex-1">

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOfficePage;
