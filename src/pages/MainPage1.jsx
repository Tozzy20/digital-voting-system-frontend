import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';


const MainPage1 = () => {
  return (
    <>
<div className="relative bg-slate-100 w-screen min-h-screen overflow-x-hidden flex flex-col items-center">

    

    <div className="relative w-[1470px] mt-8 mb-8">
      <Breadcrumbs title='Главная' />
      <PageTitle title='Главная' />

      <div className="top-[103px] flex absolute inline-flex w-full justify-center items-center gap-2.5">
        <div className="w-56 h-48 relative bg-white rounded-[20px] overflow-hidden">
          <div className="left-[24px] top-[66px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">3.000</div>
            <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">голосований</div>
          </div>
        </div>
        <div className="w-[473px] h-48 relative bg-white rounded-[20px] overflow-hidden">
          <div className="left-[24px] top-[66px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">4.000.000</div>
            <div className="self-stretch justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">транзакций</div>
          </div>
          <div className="w-72 h-72 left-[273px] top-[-46px] absolute overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/-------------------------------------------------- 1.svg" className="mt-[46px]" alt="Chart 1" />
          </div>
        </div>
        <div className="w-56 h-48 relative bg-white rounded-[20px] overflow-hidden">
          <div className="left-[24px] top-[66px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">150</div>
            <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">администраторов</div>
          </div>
        </div>
        <div className="w-[473px] h-48 relative bg-white rounded-[20px] overflow-hidden">
          <div className="left-[24px] top-[66px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">1.500</div>
            <div className="justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">уникальных пользователей</div>
          </div>
          <div className="w-60 h-60 left-[288px] top-[-22px] absolute overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/-------------------------------------------------- 2.svg" className="mt-[26px]" alt="Chart 2" />
          </div>
        </div>
      </div>

      <div className=" top-[371px] absolute justify-start text-neutral-800 text-4xl font-light font-['Mak']">Управление голосованиями</div>
      <div className="w-[634px] h-96 top-[443px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-80 px-5 py-4 left-[24px] top-[312px] absolute bg-blue-500 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/elements.svg" alt="Elements icon" />
          </div>
          <div className="justify-start text-white text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Создать голосование</div>
        </div>
        <div className="left-[24px] top-[32px] absolute inline-flex flex-col justify-center items-center gap-6">
          <div className="w-80 justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Ваш голос — неприкосновенен.</div>
          <div className="w-80 justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Участвуйте в голосованиях с криптографической защитой,<br /> где каждый выбор остаётся в вечном блокчейне.<br /> Влияйте на решения по-настоящему — без посредников, без фальсификаций.<br /> Присоединяйтесь к революции прозрачных решений!</div>
        </div>
        <img className="w-60 h-80 left-[372px] top-[32px] absolute rounded-[20px]" src="/src/assets/images/detaliAndMain/Rectangle 4303.svg" alt="Placeholder" />
      </div>

      <div className="w-[796px] h-[450px] left-[644px] top-[443px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-[748px] left-[24px] top-[32px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Группа пользователей</div>
        </div>
        <div className="w-[369px] px-5 py-4 left-[24px] top-[367px] absolute rounded-xl outline outline-1 outline-offset-[-1px] outline-rose-500 inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-rose-500 text-base font-semibold font-['TT_Supermolot_Neue_Trl_Ext']">Завершить голосование</div>
        </div>
        <div className="w-[369px] h-36 left-[24px] top-[193px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
          <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Проголосовало человек</div>
          <div className="left-[16px] top-[115px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За последние 24 часа</div>
          <div className="left-[16px] top-[56px] absolute inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">48</div>
            <div className="p-1 bg-green-100 rounded flex justify-center items-center gap-2.5">
              <div className="justify-start text-green-900 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">+10%</div>
            </div>
          </div>
        </div>
        <div className="p-2.5 left-[24px] top-[125px] absolute bg-green-100 rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/elements0.svg" alt="Active icon" />
          </div>
          <div className="justify-start text-green-900 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Голосование активно</div>
        </div>
        <div className="w-[369px] h-36 left-[403px] top-[193px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
          <div className="w-80 h-0 left-[16px] top-[105px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-300"></div>
          <div className="left-[16px] top-[115px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">С 01.07.2025 по 31.07.2025</div>
          <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Динамика голосов</div>
          <div className="w-80 h-11 left-[16px] top-[59px] absolute">
            <img src="/src/assets/images/detaliAndMain/Vector 773.svg" alt="Chart" />
          </div>
          <div className="w-1.5 h-1.5 left-[37px] top-[78px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[168px] top-[74px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[188px] top-[64px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[259px] top-[65px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[332px] top-[57px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[13px] top-[102px] absolute bg-neutral-800 rounded-full"></div>
        </div>
      </div>

      <div className="w-[796px] h-[431px] left-[644px] top-[903px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-[748px] left-[24px] top-[32px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Группа пользователей</div>
        </div>
        <div className="w-[369px] h-36 left-[24px] top-[189px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
          <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Зарегистрировалось человек</div>
          <div className="left-[16px] top-[104px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За последние 24 часа</div>
          <div className="left-[16px] top-[51px] absolute inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">99</div>
            <div className="p-1 bg-green-100 rounded flex justify-center items-center gap-2.5">
              <div className="justify-start text-green-900 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">+16%</div>
            </div>
          </div>
        </div>
        <div className="p-2.5 left-[24px] top-[125px] absolute bg-amber-100 rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/identification.svg" alt="Identification icon" />
          </div>
          <div className="justify-start text-lime-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Голосование на этапе регистрации</div>
        </div>
        <div className="w-[369px] h-36 left-[403px] top-[189px] absolute rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
          <div className="w-80 h-0 left-[16px] top-[94px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-300"></div>
          <div className="left-[16px] top-[104px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">С 01.07.2025 по 31.07.2025</div>
          <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Динамика регистрации</div>
          <div className="w-80 h-11 left-[16px] top-[49px] absolute">
            <img src="/src/assets/images/detaliAndMain/Vector 773.svg" alt="Chart" />
          </div>
          <div className="w-1.5 h-1.5 left-[35px] top-[69px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[168px] top-[64px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[188px] top-[54px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[259px] top-[55px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[332px] top-[47px] absolute bg-neutral-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 left-[13px] top-[90px] absolute bg-neutral-800 rounded-full"></div>
        </div>
        <div className="w-[748px] left-[24px] top-[348px] absolute inline-flex justify-start items-start gap-2.5">
          <div className="flex-1 px-5 py-4 bg-blue-500 rounded-xl flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-semibold font-['TT_Supermolot_Neue_Trl_Ext']">Завершить регистрацию</div>
          </div>
          <div className="flex-1 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-500 flex justify-center items-center gap-2.5">
            <div className="justify-start text-blue-500 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Начать голосование</div>
          </div>
        </div>
      </div>

      <div className="w-[634px] h-[481px] top-[853px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-[586px] left-[24px] top-[32px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Группа пользователей</div>
        </div>
        <div className="p-2.5 left-[24px] top-[154px] absolute bg-amber-100 rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/identification.svg" alt="Identification icon" />
          </div>
          <div className="justify-start text-lime-800 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">Голосование на этапе регистрации</div>
        </div>
        <div className="w-[586px] left-[24px] top-[219px] absolute inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 h-36 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
            <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Зарегистрировалось чел.</div>
            <div className="left-[16px] top-[115px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">За последние 24 часа</div>
            <div className="left-[16px] top-[56px] absolute inline-flex justify-start items-center gap-2.5">
              <div className="justify-start text-neutral-800 text-3xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">141</div>
              <div className="p-1 bg-green-100 rounded flex justify-center items-center gap-2.5">
                <div className="justify-start text-green-900 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">+60%</div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-36 relative rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 overflow-hidden">
            <div className="w-64 h-0 left-[16px] top-[105px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-300"></div>
            <div className="left-[16px] top-[115px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">С 01.07.2025 по 31.07.2025</div>
            <div className="left-[16px] top-[16px] absolute justify-start text-neutral-800 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Динамика регистрации</div>
            <div className="w-64 h-14 left-[16px] top-[49px] absolute">
              <img src="/src/assets/images/detaliAndMain/Vector 772.svg" alt="Chart" />
            </div>
            <div className="w-1.5 h-1.5 left-[31px] top-[76px] absolute bg-neutral-800 rounded-full"></div>
            <div className="w-1.5 h-1.5 left-[151px] top-[58px] absolute bg-neutral-800 rounded-full"></div>
            <div className="w-1.5 h-1.5 left-[207px] top-[58px] absolute bg-neutral-800 rounded-full"></div>
            <div className="w-1.5 h-1.5 left-[269px] top-[47px] absolute bg-neutral-800 rounded-full"></div>
            <div className="w-1.5 h-1.5 left-[136px] top-[70px] absolute bg-neutral-800 rounded-full"></div>
            <div className="w-1.5 h-1.5 left-[13px] top-[102px] absolute bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="left-[24px] top-[398px] absolute inline-flex justify-start items-start gap-2.5">
          <div className="w-72 px-5 py-4 bg-blue-500 rounded-xl flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-semibold font-['TT_Supermolot_Neue_Trl_Ext']">Завершить регистрацию</div>
          </div>
          <div className="w-72 self-stretch px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-500 flex justify-center items-center gap-2.5">
            <div className="justify-start text-blue-500 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Начать голосование</div>
          </div>
        </div>
      </div>

      <div className="top-[1434px] absolute justify-start text-neutral-800 text-4xl font-light font-['Mak']">Общая статистика</div>
      <div className="w-[473px] h-72 top-[1506px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-80 left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Количество голосующих</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Всего проголосовало</div>
        </div>
        <div className="left-[24px] top-[237px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">В период с 10.06.2025 по 10.07.2025</div>
        <div className="left-[24px] top-[112px] absolute inline-flex justify-end items-start gap-2.5">
          <div className="justify-start text-neutral-800 text-8xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">1500</div>
          <div className="p-1 bg-green-100 rounded flex justify-center items-center gap-2.5">
            <div className="justify-start text-green-900 text-base font-medium font-['TT_Supermolot_Neue_Trl_Ext']">+16%</div>
          </div>
        </div>
      </div>

      <div className="w-[474px] h-72 left-[483px] top-[1506px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Регистрация и голосование</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Соотношение регистраций и голосов</div>
        </div>
        <div className="left-[24px] top-[237px] absolute justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">В период с 10.06.2025 по 10.07.2025</div>
        <div className="w-96 h-32 left-[24px] top-[97px] absolute inline-flex flex-col justify-start items-start gap-[5px]">
          <div className="w-64 flex-1 bg-amber-200 rounded"></div>
          <div className="self-stretch flex-1 bg-sky-300 rounded"></div>
        </div>
      </div>

      <div className="w-[473px] h-72 left-[976px] top-[1506px] absolute bg-white rounded-[20px] overflow-hidden">
        <div className="w-80 left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch text-center justify-start text-neutral-800 text-xl font-bold font-['TT_Supermolot_Neue_Trl_Ext']">Количество голосующих</div>
          <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">Динамика голосующих по дням</div>
        </div>
        <div className="w-96 left-[24px] top-[237px] absolute inline-flex justify-between items-center">
          <div className="justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">01.04</div>
          <div className="justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">01.05</div>
          <div className="justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">01.06</div>
          <div className="justify-start text-stone-300 text-base font-normal font-['TT_Supermolot_Neue_Trl_Ext']">01.07</div>
        </div>
        <div className="w-96 left-[24px] top-[97px] absolute inline-flex justify-start items-end gap-[5px]">
          <div className="flex-1 h-32 bg-rose-700 rounded"></div>
          <div className="flex-1 h-8 bg-red-100 rounded"></div>
          <div className="flex-1 h-24 bg-red-400 rounded"></div>
          <div className="flex-1 h-16 bg-red-300 rounded"></div>
          <div className="flex-1 h-32 bg-rose-700 rounded"></div>
          <div className="flex-1 h-8 bg-red-100 rounded"></div>
          <div className="flex-1 h-24 bg-red-400 rounded"></div>
          <div className="flex-1 h-16 bg-red-300 rounded"></div>
          <div className="flex-1 h-32 bg-rose-700 rounded"></div>
          <div className="flex-1 h-8 bg-red-100 rounded"></div>
          <div className="flex-1 h-24 bg-red-400 rounded"></div>
          <div className="flex-1 h-16 bg-red-300 rounded"></div>
        </div>
      </div>
    </div>
    </div>  
    </>
  );
};

export default MainPage1;