import React from "react";

const Sidebar = ({ activeItem, onMenuItemClick }) => { // Принимаем activeItem и onMenuItemClick как пропсы
  const handleItemClick = (itemKey) => {
    onMenuItemClick(itemKey); // Вызываем функцию из родительского компонента
    console.log(`Активный пункт: ${itemKey}`);
  };

  return (
    <div className="bg-white rounded-[20px] shadow-lg p-[32px] w-[393px]">
      <ul className="space-y-[10px] font-supermolotM">
        {/* Создать голосование */}
        <li
          className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeItem === 'create-poll'
              ? 'bg-[#D2F0FF]'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick('create-poll')}
        >
          <img src='/src/assets/icons/plus.svg'></img>
          <span className={`px-[20.76px] ${activeItem === 'create-poll' ? 'text-blue-800' : 'text-gray-700'}`}>
            Добавить голосование
          </span>
        </li>

        {/* Шаблоны голосований */}
        <li
          className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
            activeItem === 'poll-templates'
              ? 'bg-[#D2F0FF]'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handleItemClick('poll-templates')}
        >
          <img src="/src/assets/icons/template.svg"></img>
          <span className={`px-[20.76px] ${activeItem === 'poll-templates' ? 'text-blue-800' : 'text-gray-700'}`}>
            Шаблоны голосований
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;