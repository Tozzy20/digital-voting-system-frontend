import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Detali3 = () => {
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
          Администратор / Детали голосования / Результаты
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
          <div className="flex items-center gap-4 p-2.5 bg-white w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 109.png" alt="Voting Statistics Icon" />
            </div>
            <Link to="/detali1" className="text-neutral-800 text-base font-normal">Статистика голосования</Link>
          </div>
          <div className="flex items-center gap-4 p-2.5 bg-white w-full">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 110.png" alt="Voters Icon" />
            </div>
            <Link to="/detali2" className="text-neutral-800 text-base font-normal">Голосующие</Link>
          </div>
          <div className="self-stretch p-2.5 bg-cyan-100 rounded-lg inline-flex justify-start items-center gap-4">
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/Component 122.svg" alt="Results Icon" />
            </div>
            <Link to="/detali3" className="justify-start text-blue-500 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Результаты</Link>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] mt-[260px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden p-8">
          <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-6">Вопросы для голосования</div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] mt-[385px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-2">№1. Пример вопроса?</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Необходимо выбрать один вариант ответа</div>
            </div>
            <div className="flex justify-start items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 p-2.5 bg-zinc-100 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 123.svg" className="w-5 h-6" alt="Analytics Icon" />
                </div>
              </div>
              <div className="w-9 h-9 p-2.5 bg-neutral-800 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 124.svg" className="w-5 h-6" alt="List Icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] w-full">
              <div className="grid grid-cols-12 gap-4 mb-2 text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">
                <div className="col-span-7">Вариант ответа</div>
                <div className="col-span-5">Результат</div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7">
                    <div className="w-full px-5 py-4 bg-cyan-100 rounded-xl inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Да</div>
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="w-full px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">300</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7">
                    <div className="w-full px-5 py-4 bg-cyan-100 rounded-xl inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Нет</div>
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="w-full px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">210</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7">
                    <div className="w-full px-5 py-4 bg-cyan-100 rounded-xl inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Не могу ответить</div>
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="w-full px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">4</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7">
                    <div className="w-full px-5 py-4 bg-cyan-100 rounded-xl inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Другое</div>
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="w-full px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] mt-[845px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-2">№2. Пример вопроса?</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Необходимо выбрать один вариант ответа</div>
            </div>
            <div className="flex justify-start items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 p-2.5 bg-neutral-800 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 125.svg" className="w-5 h-6" alt="Analytics Icon" />
                </div>
              </div>
              <div className="w-9 h-9 p-2.5 bg-zinc-100 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 126.svg" className="w-5 h-6" alt="List Icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden p-8 flex items-end justify-center gap-8">
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-20 h-64 bg-rose-500 rounded-xl"></div>
                <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 1</div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-20 h-24 bg-red-400 rounded-xl"></div>
                <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 2</div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="w-20 h-16 bg-red-100 rounded-xl"></div>
                <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 3</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-36 space-y-2.5">
              <div className="w-full px-5 py-2.5 border-l-4 border-rose-500 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 1</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-red-400 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 2</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-red-100 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] mt-[1355px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-2">№3. Пример вопроса?</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Выберите один вариант ответа для каждого из предоставленных</div>
            </div>
            <div className="flex justify-start items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 p-2.5 bg-neutral-800 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 125.svg" className="w-5 h-6" alt="Analytics Icon" />
                </div>
              </div>
              <div className="w-9 h-9 p-2.5 bg-zinc-100 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 126.svg" className="w-5 h-6" alt="List Icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden p-5 relative">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className='flex flex-col gap-4' >
                  <div className="w-72 h-9 bg-amber-200 rounded-lg"></div>
                  <div className="w-28 h-9 bg-orange-100 rounded-lg"></div>
                  </div>
                  <div className="text-neutral-800 text-base">За - 500 (70%)</div>
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против - 150 (22%)</div>
                </div>
                <div className="flex items-center gap-4">
                <div className='flex flex-col gap-4' >
                  <div className="w-72 h-9 bg-blue-500 rounded-lg"></div>
                  <div className="w-28 h-9 bg-indigo-200 rounded-lg"></div>
                </div>  
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За - 500 (70%)</div>
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против - 150 (22%)</div>
                </div>
                <div className="flex items-center gap-4">
                <div className='flex flex-col gap-4' >  
                  <div className="w-72 h-9 bg-rose-500 rounded-lg"></div>
                  <div className="w-28 h-9 bg-red-200 rounded-lg"></div>
                </div>  
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За - 500 (70%)</div>
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против - 150 (22%)</div>
                </div>
                <div className="flex items-center gap-4">
                <div className='flex flex-col gap-4' >  
                  <div className="w-72 h-9 bg-green-600 rounded-lg"></div>
                  <div className="w-28 h-9 bg-emerald-100 rounded-lg"></div>
                </div>  
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За - 500 (70%)</div>
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против - 150 (22%)</div>
                </div>
                <div className="flex items-center gap-4">
                <div className='flex flex-col gap-4' >
                  <div className="w-72 h-9 bg-pink-500 rounded-lg"></div>
                  <div className="w-28 h-9 bg-pink-200 rounded-lg"></div>
                </div>  
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За - 500 (70%)</div>
                  <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против - 150 (22%)</div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-36 space-y-2.5">
              <div className="w-full px-5 py-2.5 border-l-4 border-amber-200 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">ФИО 1</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-blue-500 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">ФИО 2</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-rose-500 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">ФИО 3</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-green-400 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">ФИО 4</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-pink-500 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">ФИО 5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] mt-[2070px] absolute bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-2">№4. Пример вопроса?</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Выберите один вариант ответа для каждого из предоставленных</div>
            </div>
            <div className="flex justify-start items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 p-2.5 bg-neutral-800 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 125.svg" className="w-5 h-6" alt="Analytics Icon" />
                </div>
              </div>
              <div className="w-9 h-9 p-2.5 bg-zinc-100 rounded-lg flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/Component 126.svg" className="w-5 h-6" alt="List Icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden p-5 flex justify-center">
              <div className="flex justify-center items-end gap-8">
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex justify-center items-end gap-1 h-64">
                    <div className="w-10 self-stretch bg-green-400 rounded-xl"></div>
                    <div className="w-10 h-28 bg-rose-500 rounded-xl"></div>
                    <div className="w-10 h-10 bg-stone-300 rounded-xl"></div>
                  </div>
                  <div className="text-center text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 1</div>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex justify-center items-end gap-1 h-64">
                    <div className="w-10 self-stretch bg-green-400 rounded-xl"></div>
                    <div className="w-10 h-28 bg-rose-500 rounded-xl"></div>
                    <div className="w-10 h-10 bg-stone-300 rounded-xl"></div>
                  </div>
                  <div className="text-center text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 2</div>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex justify-center items-end gap-1 h-64">
                    <div className="w-10 self-stretch bg-green-400 rounded-xl"></div>
                    <div className="w-10 h-28 bg-rose-500 rounded-xl"></div>
                    <div className="w-10 h-10 bg-stone-300 rounded-xl"></div>
                  </div>
                  <div className="text-center text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 3</div>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex justify-center items-end gap-1 h-64">
                    <div className="w-10 self-stretch bg-green-400 rounded-xl"></div>
                    <div className="w-10 h-28 bg-rose-500 rounded-xl"></div>
                    <div className="w-10 h-10 bg-stone-300 rounded-xl"></div>
                  </div>
                  <div className="text-center text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 4</div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-36 space-y-2.5">
              <div className="w-full px-5 py-2.5 border-l-4 border-green-400 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-rose-500 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Против</div>
              </div>
              <div className="w-full px-5 py-2.5 border-l-4 border-stone-300 inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Воздержаться</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-650px)] w-[200px] max-w-[45%] ml-[37.8%] mt-[2555px] absolute mb-[40px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-96">
            <div className="left-[32px] top-[32px] absolute justify-start text-neutral-800 text-base font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Итоги голосования</div>
            <div className="w-[727px] left-[32px] top-[67px] absolute inline-flex justify-start items-center gap-2.5">
              <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-800 overflow-hidden">
                <div className="w-60 h-36 left-0 top-[56px] absolute bg-green-400 rounded-[20px]"></div>
                <div className="w-8 left-[101px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">За</div>
                <div className="w-36 left-[45px] top-[150px] absolute text-center justify-start">
                  <span className="text-white text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">70% </span>
                  <span className="text-green-200 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(1024)</span>
                </div>
              </div>
              <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
                <div className="w-60 h-16 left-0 top-[130px] absolute bg-rose-500 rounded-[20px]"></div>
                <div className="left-[70px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Против</div>
                <div className="left-[50px] top-[150px] absolute text-center justify-start">
                  <span className="text-white text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">28% </span>
                  <span className="text-rose-400 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(288)</span>
                </div>
              </div>
              <div className="flex-1 h-48 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
                <div className="w-60 h-5 left-0 top-[174px] absolute bg-zinc-100 rounded-[29px]"></div>
                <div className="left-[20px] top-[20px] absolute text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Воздержались</div>
                <div className="left-[70px] top-[150px] absolute text-center justify-start">
                  <span className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">2% </span>
                  <span className="text-stone-300 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">(14)</span>
                </div>
              </div>
            </div>
            <div className="px-10 left-[98px] top-[261px] absolute bg-neutral-800 rounded-bl-lg rounded-br-lg inline-flex justify-start items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 119.svg" className="w-3.5 h-2.5 left-[5px] top-[6.50px] absolute" alt="Tick Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detali3;