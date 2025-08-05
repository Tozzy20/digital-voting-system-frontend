import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Detali2 = () => {
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
            Администратор / Детали голосования / Голосующие
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
                <img src="/src/assets/images/detaliAndMain/Component 109.png" alt="Icon" />
              </div>
              <Link to="/stats"><div className="text-neutral-800 text-base font-normal">Статистика голосования</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-cyan-100 rounded-lg w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 116.png" alt="Icon" />
              </div>
              <Link to="/voters"><div className="text-blue-500 text-base">Голосующие</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 111.png" alt="Icon" />
              </div>
              <Link to="/results"><div className="text-neutral-800 text-base font-normal">Результаты</div></Link>
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

              <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute min-h-[532px] mt-[260px] bg-white overflow-hidden">
                <div className="p-8">
                  <div className="text-black text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-6">
                    Список голосующих
                  </div>

                  <div className="flex">
                    <div className="flex-grow max-w-[704px] flex flex-col items-start gap-2.5">
                      <div className="w-full pl-5 py-3 border-l-4 border-black flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <div className="flex flex-col items-start gap-3 min-w-[240px]">
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Фамилия Имя Отчество</div>
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">mailadress@example.co</div>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          <div className="p-2.5 bg-amber-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                            <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Зарегистрирован</div>
                          </div>
                          <div className="p-2.5 bg-green-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                            <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Проголосовал</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full pl-5 py-3 border-l-4 border-black flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <div className="flex flex-col items-start gap-3 min-w-[240px]">
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Фамилия Имя Отчество</div>
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">mailadress@example.co</div>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          <div className="p-2.5 bg-zinc-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                            <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Не зарегистрирован</div>
                          </div>
                          <div className="p-2.5 bg-red-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                            <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Не проголосовал</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full pl-5 py-3 border-l-4 border-black flex items-center gap-6">
                        <div className="flex flex-col items-start gap-3 min-w-[240px]">
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Фамилия Имя Отчество</div>
                          <div className="text-black text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">mailadress@example.co</div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-[35%] flex flex-col items-center justify-end h-[384px]">
                      <div className="w-1.5 h-full bg-zinc-300 rounded-full relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-[208px] bg-neutral-500 rounded-full"></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Detali2;