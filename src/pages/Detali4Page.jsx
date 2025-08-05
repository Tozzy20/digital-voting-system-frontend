import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Detali4 = () => {
  return (
    <>
      <div className="relative bg-slate-100 w-screen min-h-screen overflow-x-hidden">
        <div className="w-full h-full flex flex-col">
          <header className="w-full h-24 bg-neutral-800 flex items-center justify-between px-6">
            <nav className="ml-[16.67%] hidden lg:flex items-center gap-6">
              <img src="/src/assets/images/detaliAndMain/logo.svg" className="w-16 h-16" alt="Logo" />
              <div className="text-white text-base font-semibold">Главная</div>
              <div className="flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Пользователи</div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Голосования</div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
              <div className="px-5 py-4 rounded-lg outline outline-1 outline-white flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Добавить</div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
            </nav>
            <div className=" mr-[16.67%] flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/src/assets/images/detaliAndMain/elements.png" alt="Search" className="w-full h-full object-contain" />
                </div>
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/src/assets/images/detaliAndMain/setting-05.png" alt="Notifications" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Фамилия И.О.</div>
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/src/assets/images/detaliAndMain/user-circle.png" alt="User" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </header>

          <div className="w-full ml-[17.36%] mt-[60px] text-stone-300 text-base font-normal">
            Администратор / Детали голосования / Результаты
          </div>
          <div className="w-full ml-[17.36%] mt-[20px] text-neutral-800 text-4xl font-light font-['Mak']">
            Детали голосования
          </div>

          <div className="w-[20%] p-8 mt-[260px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] flex flex-col items-start gap-2.5 absolute left-[17.36%]">
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 112.png" alt="Icon" />
              </div>
              <Link to="/"><div className="text-neutral-800 text-base font-normal">Общая информация</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/elements117.svg" alt="Icon" />
              </div>
              <Link to="/bulletin"><div className="text-neutral-800 text-base font-normal">Мой бюллетень</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-cyan-100 rounded-lg w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/elements118.svg" alt="Icon" />
              </div>
              <Link to="/results"><div className="text-blue-500 text-base font-medium">Результаты</div></Link>
            </div>
          </div>
              <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] h-auto min-h-[450px] mt-[20px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden p-8 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 max-w-md text-center">
                  <img className="w-80 h-80 max-w-full" src="/src/assets/images/detaliAndMain/Detali4.svg" alt="Processing" />
                  <div className="text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">
                    Результаты голосования пока в обработке.
                    <br />
                    Посетите раздел позднее
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Detali4;