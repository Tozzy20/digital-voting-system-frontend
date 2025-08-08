import React from "react";

const Sidebar = ({ menuItems, activeItem, onMenuItemClick }) => { 
  const handleItemClick = (itemKey) => {
    onMenuItemClick(itemKey);
  };

  return (
    <div className="bg-white rounded-[20px] shadow-lg p-[32px] w-[393px]">
      <ul className="space-y-[10px] ">
        {menuItems.map((item) => (
          <li
            key={item.key} // Важно использовать уникальный ключ для каждого элемента списка
            className={`flex items-center p-[10px] rounded-[8px] cursor-pointer transition-colors duration-200 ${
              activeItem === item.key ? 'bg-[#D2F0FF]' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick(item.key)}
          >
            <img src={item.icon} alt={item.label} />
            <span className={`px-[20.76px] ${activeItem === item.key ? 'text-blue-800' : 'text-gray-700'}`}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;