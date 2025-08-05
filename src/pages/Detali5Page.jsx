import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Detali5 = () => {
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
              <div className="w-[43%] h-80 ml-[37.8%] mt-[260px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="left-[32px] top-[32px] absolute justify-start text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Итоги голосования</div>
                <div className="w-[727px] left-[32px] top-[67px] absolute inline-flex justify-start items-center gap-2.5">
                  <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-800 overflow-hidden">
                    <div className="w-60 h-36 left-0 top-[56px] absolute bg-green-400 rounded-[20px]"></div>
                    <div className="w-8 left-[101px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">За</div>
                    <div className="w-36 left-[45px] top-[150px] absolute text-center justify-start"><span className="text-white text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">70% </span><span className="text-green-200 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(1024)</span></div>
                  </div>
                  <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
                    <div className="w-60 h-16 left-0 top-[130px] absolute bg-rose-500 rounded-[20px]"></div>
                    <div className="left-[70px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Против</div>
                    <div className="left-[50px] top-[150px] absolute text-center justify-start"><span className="text-white text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">28% </span><span className="text-rose-400 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(288)</span></div>
                  </div>
                  <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
                    <div className="w-60 h-5 left-0 top-[174px] absolute bg-zinc-100 rounded-[29px]"></div>
                    <div className="left-[20px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Воздержались</div>
                    <div className="left-[70px] top-[150px] absolute text-center justify-start"><span className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">2% </span><span className="text-stone-300 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(14)</span></div>
                  </div>
                </div>
                <div className="px-10 left-[98px] top-[261px] absolute bg-neutral-800 rounded-bl-lg rounded-br-lg inline-flex justify-start items-center gap-2.5">
                  <div data-property-1="tick-02" className="w-6 h-6 relative overflow-hidden">
                    <img src="/src/assets/images/detaliAndMain/Component 119.svg" className="w-3.5 h-2.5 left-[5px] top-[6.50px] absolute" alt="Tick Icon" />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Detali5;