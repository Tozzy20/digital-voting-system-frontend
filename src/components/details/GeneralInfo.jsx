import { getVotingStatusConfigDetails } from '../votes/Formatters';
import { Button } from '@material-tailwind/react'
import { TbTimezone, TbLock, TbFileZip, TbFileDescription } from "react-icons/tb";
import { LuCalendar1, LuAlarmClock, LuClock3 } from "react-icons/lu";

const GeneralInfo = ({ votingData, isRegistered, onRegister, onNavigateToMyBulliten, onNavigateToResults }) => {
  const status = getVotingStatusConfigDetails(votingData);

  // Определяем текст и обработчик для кнопки
  let buttonText = '';
  let onButtonClick = () => { };
  let isButtonDisabled = false;

  if (status.text === 'Голосование на этапе регистрации') {
    buttonText = 'Зарегистрироваться';
    onButtonClick = onRegister;
    isButtonDisabled = isRegistered;
  } else if (status.text === 'Голосование активно') {
    buttonText = 'Проголосовать';
    onButtonClick = onNavigateToMyBulliten;
    isButtonDisabled = !isRegistered;
  } else if (status.text === 'Голосование завершено') {
    buttonText = 'Результаты';
    onButtonClick = onNavigateToResults; // Можно сделать отдельную функцию для навигации на результаты
    isButtonDisabled = !isRegistered;

  }

  // // Если пользователь не зарегистрирован и голосование уже началось, кнопку не показываем
  // if (!isRegistered && status.text !== 'Голосование на этапе регистрации') {
  //   return null; 
  // }

  // Проверка на наличие данных, чтобы избежать ошибок, если prop не передан
  if (!votingData) {
    return <div>Данные о голосовании не найдены.</div>;
  }

  return (
    <main className="p-4 sm:p-6 bg-white rounded-[20px] w-full shadow-lg"> {/* Уменьшаем padding на маленьких экранах */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Левая колонка */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">{votingData.voting_full_info.title}</div>
            <div className="flex items-center justify-between w-full flex-wrap gap-2">
              <div className="text-stone-300 text-base font-normal">{votingData.voting_full_info.theme}</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <TbTimezone className='w-6 h-6' />
                  <div className="text-neutral-800 text-base font-normal">(UTC+3) Россия - Москва</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className={`flex items-center gap-2.5 p-2.5 ${status.bg} rounded-lg w-full`}>
              {status.icon}
              <div className={`${status.textColor} text-base font-medium`}>{status.text}</div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-zinc-100 rounded-lg">
              {votingData.voting_full_info.public ?
                <TbFileZip size={24} className="text-neutral-800" /> :
                <TbLock size={24} className="text-neutral-800" />
              }
              <div className="text-neutral-800 text-base font-medium">{votingData.voting_full_info.public ? 'Публичное' : 'Тайное'}</div>
            </div>
          </div>

          <Button
            className='bg-[#437DE9] text-base px-5 lg:mt-auto py-4 w-full rounded-lg flex justify-center items-center gap-2.5' // Удаляем w-96 и mt-auto для лучшей адаптивности
            onClick={onButtonClick}
            disabled={isButtonDisabled}
          >
            {buttonText}
          </Button>

        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-6">
          {/* Flexbox-контейнер для дат, чтобы они переносились на новую строку */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Начало регистрации</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <LuCalendar1 size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.startDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuAlarmClock size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.startTime}</div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание регистр.</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <LuCalendar1 size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.endDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuAlarmClock size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.endTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Начало голосования</div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <LuCalendar1 size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.startDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuAlarmClock size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.startTime}</div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание голосования</div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <LuCalendar1 size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.endDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuAlarmClock size={24} className="text-neutral-800" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.endTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 rounded-xl outline outline-neutral-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-neutral-800 text-base font-medium">Материалы голосования</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GeneralInfo;