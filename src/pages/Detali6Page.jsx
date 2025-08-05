import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Detali6 = () => {
  return (
    <>
    <div className="relative bg-slate-100 w-screen min-h-screen overflow-x-hidden">
      <div className="w-full h-full flex flex-col">
        <header className="w-full h-24 bg-neutral-800 flex items-center justify-between px-6">
            <nav className="ml-[16.67%] hidden lg:flex items-center gap-6">
              <img src="/src/assets/images/detaliAndMain/logo.svg" className="w-16 h-16" alt="Logo" />
              <Link to="/" className="text-white text-base font-semibold">Главная</Link>
              <div className="flex items-center gap-2.5">
                <Link to="/users" className="text-white text-base font-semibold">Пользователи</Link>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2.5">
                <Link to="/votes" className="text-white text-base font-semibold">Голосования</Link>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
              <Link to="/add" className="px-5 py-4 rounded-lg outline outline-1 outline-white flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Добавить</div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </Link>
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
        <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-4">
          <div data-property-1="information-circle" className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/Component 112.png" alt="Information icon" />
          </div>
          <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Общая информация</div>
        </div>
        <div className="self-stretch p-2.5 bg-cyan-100 rounded-lg inline-flex justify-start items-center gap-4">
          <div data-property-1="document-validation" className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/Component 120.svg" alt="My Ballot icon" />
          </div>
          <div className="justify-start text-blue-500 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Мой бюллетень</div>
        </div>
        <div className="self-stretch p-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-4">
          <div data-property-1="Variant6" className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/Component 121.svg" alt="Results icon" />
          </div>
          <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Результаты</div>
        </div>
      </div>

      <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute mt-[260px] flex flex-col gap-6">
        <div className="w-full h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
          <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext'] mb-4">Название голосования</div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Название группы людей</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone Icon" />
                </div>
                <div className="text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">(UTC+3) Россия - Москва</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-neutral-800 text-4xl sm:text-5xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">2 дня</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">15 часов, 16 минут до окончания регистрации</div>
            </div>
            <div className="relative w-full h-24">
              <div className="absolute inset-0 w-[30%] h-full bg-amber-200 rounded-xl"></div>
              <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
            </div>
          </div>

          <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-neutral-800 text-4xl sm:text-5xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">10 дней</div>
              <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">15 часов, 16 минут до начала голосования</div>
            </div>
            <div className="relative w-full h-24">
              <div className="absolute inset-0 w-[10%] h-full bg-sky-300 rounded-xl"></div>
              <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute mt-[670px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">№1. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-02.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext'] mb-6">Необходимо выбрать один вариант ответа</div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded-full flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Да</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-neutral-800 flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Нет</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-neutral-800 flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Не могу ответить</div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-neutral-800 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/time-quarter.svg" alt="Cancel Icon" />
          </div>
          <div className="text-white text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Отменить выбор</div>
        </div>
      </div>

      <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute mt-[1080px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">№2. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-03.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext'] mb-6">Необходимо выбрать два варианта ответа</div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Пример вариант 1</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Вариант 2</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Пример вариант 3</div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-zinc-100 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/tap-07.svg" alt="Vote Icon" />
          </div>
          <div className="text-neutral-600 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Проголосовать</div>
        </div>
      </div>

      <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute mt-[1490px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">№3. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-04.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext'] mb-8">Необходимо выбрать один вариант ответа</div>

        <div className="mb-2 flex justify-start md:justify-center gap-5 md:gap-10 text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">
          <div className="w-32 md:w-44 text-center">За</div>
          <div className="w-32 md:w-44 text-center">Против</div>
          <div className="w-32 md:w-44 text-center">Воздержаться</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">ФИО 1</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">ФИО 2</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">ФИО 3</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">Никто 4</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-neutral-800 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/time-quarter.svg" alt="Cancel Icon" />
          </div>
          <div className="text-white text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Отменить выбор</div>
        </div>
      </div>

      <div className="w-[calc(100%-650px)] max-w-[45%] ml-[37.8%] absolute mt-[2010px] mb-[40px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">№4. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-04.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext'] mb-8">Необходимо выбрать все подходящие варианты ответа</div>

        <div className="mb-2 flex justify-start md:justify-center gap-5 md:gap-10 text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext']">
          <div className="w-32 md:w-44 text-center">Вариант 1</div>
          <div className="w-32 md:w-44 text-center">Вариант 2</div>
          <div className="w-32 md:w-44 text-center">Вариант 3</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">Вариант 1</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">Вариант 2</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">Вариант 3</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal font-['TT_Supermolot_Neue_Trl_Ext'] w-40 md:w-60">Вариант 4</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-green-400 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/tap-08.svg" alt="Vote Icon" />
          </div>
          <div className="text-white text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Проголосовать</div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Detali6;