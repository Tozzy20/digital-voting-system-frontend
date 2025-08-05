import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Detali1 = () => {
  return (
    <div className="relative bg-slate-100 w-screen min-h-screen overflow-x-hidden">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
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
          <div className="mr-[16.67%] flex items-center gap-6">
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
          Администратор / Детали голосования / Статистика голосования
        </div>
        <div className="w-full ml-[17.36%] mt-[20px] text-neutral-800 text-4xl font-light font-['Mak']">
          Детали голосования
        </div>

        <div className="w-[20%] p-8 mt-[260px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] flex flex-col items-start gap-2.5 absolute left-[17.36%]">
          <div className="flex items-center gap-4 p-2.5 bg-white w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 112.png" alt="General Info Icon" />
            </div>
            <Link to="/detali0" className="text-neutral-800 text-base font-normal">Общая информация</Link>
          </div>
          <div className="flex items-center gap-4 p-2.5 bg-cyan-100 rounded-lg w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 113.png" alt="Voting Statistics Icon" />
            </div>
            <Link to="/detali1" className="text-blue-500 text-base font-medium">Статистика голосования</Link>
          </div>
          <div className="flex items-center gap-4 p-2.5 bg-white w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 110.png" alt="Voters Icon" />
            </div>
            <Link to="/detali2" className="text-neutral-800 text-base font-normal">Голосующие</Link>
          </div>
          <div className="flex items-center gap-4 p-2.5 bg-white w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 111.png" alt="Results Icon" />
            </div>
            <Link to="/detali3" className="text-neutral-800 text-base font-normal">Результаты</Link>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] absolute max-w-[45%] h-auto min-h-[546px] ml-[37.8%] mt-[260px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
              <div className="text-black text-xl font-bold">Ход регистрации и голосования</div>

              <div className="flex items-center gap-4">
                <div className="text-black text-base font-normal">Обновлено:</div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Updated Date" />
                  </div>
                  <div className="text-black text-base font-normal">06.07.2025</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Updated Time" />
                  </div>
                  <div className="text-black text-base font-normal">10:00</div>
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-5">
                <div className="flex items-end gap-2.5">
                  <div className="w-5 h-5 bg-amber-200 rounded-full"></div>
                  <div className="text-black text-base font-normal">Зарегистрированы</div>
                </div>
                <div className="flex items-end gap-2.5">
                  <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                  <div className="text-black text-base font-normal">Не зарегистрированы</div>
                </div>
                <div className="flex items-end gap-2.5">
                  <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                  <div className="text-black text-base font-normal">Проголосовали</div>
                </div>
                <div className="flex items-end gap-2.5">
                  <div className="w-5 h-5 bg-rose-500 rounded-full"></div>
                  <div className="text-black text-base font-normal">Не проголосовали</div>
                </div>
              </div>

              <div className="w-80 h-80 mt-4">
                <img src="/src/assets/images/detaliAndMain/Frame 3942.png" alt="Registration and Voting Progress Chart" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
              <div>
                <div className="text-stone-300 text-base font-normal">Условия:</div>
                <div className="text-black text-base font-semibold mt-2">
                  Необходимо участие в голосовании более чем половины участников
                </div>
              </div>

              <div>
                <div className="text-stone-300 text-base font-normal">Статус:</div>
                <div className="flex items-center gap-2.5 mt-2">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <img src="/src/assets/images/detaliAndMain/Component 114.png" alt="Status Icon" />
                  </div>
                  <div className="text-green-400 text-base font-semibold">Условия выполнены</div>
                </div>
              </div>

              <div className="w-full">
                <div className="text-stone-300 text-base font-normal mb-2">Электронная явка (50%)</div>
                <div className="w-full h-4 bg-zinc-100 rounded-full relative">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-sky-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute h-auto min-h-[585px] mt-[841px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="text-black text-xl font-bold mb-6">Динамика явки</div>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-1.5 bg-sky-300 rounded-full"></div>
              <div className="text-black text-base font-normal">Общая явка</div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-1.5 bg-green-400 rounded-full"></div>
              <div className="text-black text-base font-normal">Явка голосующих</div>
            </div>
          </div>

          <div className="relative h-[480px]">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between pb-[30px] pt-[30px]">
              <div className="text-right text-black text-base font-normal">100</div>
              <div className="text-right text-black text-base font-normal">90</div>
              <div className="text-right text-black text-base font-normal">80</div>
              <div className="text-right text-black text-base font-normal">70</div>
              <div className="text-right text-black text-base font-normal">60</div>
              <div className="text-right text-black text-base font-normal">50</div>
              <div className="text-right text-black text-base font-normal">40</div>
              <div className="text-right text-black text-base font-normal">30</div>
              <div className="text-right text-black text-base font-normal">20</div>
              <div className="text-right text-black text-base font-normal">10</div>
              <div className="text-right text-black text-base font-normal">%</div>
            </div>

            <div className="ml-12 h-full flex flex-col">
              <div className="flex-grow relative outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Frame 3946.png" alt="Voter Turnout Dynamics Chart" className="w-full h-full object-contain" />
              </div>

              <div className="mt-4 flex justify-between text-black text-base font-normal">
                <span>8:00</span>
                <span>9:00</span>
                <span>10:00</span>
                <span>11:00</span>
                <span>12:00</span>
                <span>13:00</span>
                <span>14:00</span>
                <span>15:00</span>
                <span>16:00</span>
                <span>17:00</span>
                <span>18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detali1;