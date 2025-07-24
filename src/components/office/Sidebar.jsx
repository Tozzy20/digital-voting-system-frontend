import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('create-poll'); // 'create-poll' as initial active item

  const handleItemClick = (itemKey) => {
    setActiveItem(itemKey);
    // You would typically pass this `itemKey` up to a parent component
    // or use a router (like React Router) to change the main content displayed.
    console.log(`Активный пункт: ${itemKey}`);
  };

  return (
    <div className="bg-white rounded-[20px] shadow-lg p-6 w-[393px] h-[216px]">
      <ul className="space-y-[10px] font-supermolotM">
        {/* Item: Создать голосование */}
        <li
          className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeItem === 'create-poll'
              ? 'bg-[#D2F0FF]' // Active state background
              : 'hover:bg-gray-100' // Inactive state hover
          }`}
          onClick={() => handleItemClick('create-poll')}
        >
          <img src='/src/assets/icons/plus.svg' alt="Плюс иконка"></img>
          {/* Apply specific text color for active item if desired, otherwise it will inherit from a global style or stay default */}
          <span className={`px-[20.76px] ${activeItem === 'create-poll' ? 'text-blue-800' : 'text-gray-700'}`}>
            Создать голосование
          </span>
        </li>

        {/* Item: Шаблоны голосований */}
        <li
          className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeItem === 'poll-templates'
              ? 'bg-[#D2F0FF]'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick('poll-templates')}
        >
          <img src="/src/assets/icons/template.svg" alt="Шаблон иконка"></img>
          <span className={`px-[20.76px] ${activeItem === 'poll-templates' ? 'text-blue-800' : 'text-gray-700'}`}>
            Шаблоны голосований
          </span>
        </li>

        {/* Item: Голосования */}
        <li
          className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeItem === 'polls'
              ? 'bg-[#D2F0FF]'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick('polls')}
        >
          <img src='/src/assets/icons/people.svg' alt="Люди иконка"></img>
          <span className={`px-[20.76px] ${activeItem === 'polls' ? 'text-blue-800' : 'text-gray-700'}`}>
            Голосования
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;