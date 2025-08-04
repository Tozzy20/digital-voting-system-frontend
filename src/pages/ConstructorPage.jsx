import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Sidebar from "../components/constructor/Sidebar";

const ConstructorPage = () => {
  const [activeContent, setActiveContent] = useState("create-poll"); // Устанавливаем 'create-poll' как начальное активное состояние

  // Функция, которая будет вызываться при клике на пункт сайдбара
  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "create-poll":
        return;

      case "poll-templates":
        return ; // Компонент "Список шаблонов"
    }
  };

  return (
    <div className="bg-[#EFF3F8] min-h-screen">
      <Header />
      <div className="ml-[240px] mt-[60px] mr-[240px]">
        <Breadcrumbs title="Администратор / Конструктор голосований / Добавить голосование" />
        <PageTitle title="Конструктор голосований" />
        <main className="mt-[24px]">
          <Sidebar
            activeItem={activeContent}
            onMenuItemClick={handleMenuItemClick}
          />
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default ConstructorPage;
