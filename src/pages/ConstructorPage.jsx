import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Sidebar from "../components/constructor/Sidebar";
import Constructor from '../components/constructor/CreateVoting'
import Templates from "../components/constructor/Templates";

const ConstructorPage = () => {
  const [activeContent, setActiveContent] = useState("create-poll"); // Устанавливаем 'create-poll' как начальное активное состояние

  // Функция, которая будет вызываться при клике на пункт сайдбара
  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "create-poll":
        return <Constructor />;

      case "poll-templates":
        return <Templates />;
    }
  };

  return (
    <div className=" min-h-screen">
      
      <div className="ml-[240px] mt-[60px] mr-[240px]">
        <Breadcrumbs title="Администратор / Конструктор голосований / Добавить голосование" />
        <PageTitle title="Конструктор голосований" />
        <main className="flex mt-[24px]">
          <div>
          <Sidebar
            activeItem={activeContent}
            onMenuItemClick={handleMenuItemClick}
          />
          </div>
          <div className="ml-[10px] flex-1">
          {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConstructorPage;
