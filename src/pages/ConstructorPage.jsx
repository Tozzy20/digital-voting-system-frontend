import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import Sidebar from "../components/constructor/Sidebar";
import Constructor from '../components/constructor/CreateVoting';
import Templates from "../components/constructor/Templates";

const ConstructorPage = () => {
  const [activeContent, setActiveContent] = useState("create-poll");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { 
      key: 'create-poll', 
      label: 'Добавить голосование', 
      icon: '/src/assets/icons/plus.svg' 
    },
    { 
      key: 'poll-templates', 
      label: 'Шаблоны голосований', 
      icon: '/src/assets/icons/template.svg' 
    },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case "create-poll":
        return <Constructor />;
      case "poll-templates":
        return <Templates />;
      default:
        return <Constructor />;
    }
  };
 
  return (
    <div className="min-h-screen">
      <div className="lg:ml-[240px] mt-[60px] lg:mr-[240px] px-4 lg:px-0">
        <Breadcrumbs title="Администратор / Конструктор голосований / Добавить голосование" />
        
        <div className="flex items-center justify-between">
          <PageTitle title="Конструктор голосований" />
          {/* Кнопка меню только на мобильных */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 p-2 bg-white rounded-md hover:bg-gray-200 transition-colors"
          >
            <span>Меню</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <main className="flex flex-col lg:flex-row mt-6 gap-4">
          {/* Сайдбар - скрыт на мобильных по умолчанию */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block lg:w-64`}>
            <Sidebar
              menuItems={menuItems}
              activeItem={activeContent}
              onMenuItemClick={handleMenuItemClick}
            />
          </div>
          
          {/* Основное содержимое */}
          <div className="flex-1 w-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConstructorPage;