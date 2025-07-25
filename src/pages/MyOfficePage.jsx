import React, { useState } from 'react'; 
import Templates from '../components/office/Templates';
import HeaderLogin from '/src/components/HeaderLogin';
import Sidebar from '/src/components/office/Sidebar';
import PollsList from '../components/office/PollsList';


const MyOfficePage = () => {
    
    const [activeContent, setActiveContent] = useState('create-poll'); // Устанавливаем 'create-poll' как начальное активное состояние

    // Функция, которая будет вызываться при клике на пункт сайдбара
    const handleMenuItemClick = (itemKey) => {
        setActiveContent(itemKey);
    };

   
    const renderContent = () => {
        switch (activeContent) {
            case 'create-poll':
                return <div></div>;
                
            case 'poll-templates':
                return <Templates />; // Компонент "Список шаблонов"
            case 'polls':
                return <PollsList />; // Компонент "Голосования"
                
            default:
                return <Templates />;
        }
    };

    return (
        <div className="bg-[#EFF3F8] min-h-screen">
            <HeaderLogin />

            <div className='pl-[240px] pt-[99px]'>
                <h1 className='font-mak text-[40px] pb-[24px]'>Рабочий кабинет</h1>
                <div className="flex">
                    {/* Передаем activeContent и handleMenuItemClick в Sidebar */}
                    <Sidebar activeItem={activeContent} onMenuItemClick={handleMenuItemClick} />
                    <div className="ml-[10px]">
                        {renderContent()} {/* Рендерим контент на основе активного пункта */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOfficePage;