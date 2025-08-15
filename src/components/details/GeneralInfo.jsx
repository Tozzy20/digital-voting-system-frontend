import { useNavigate } from 'react-router';
import { getVotingStatusConfigDetails } from '../votes/Formatters';
import { Button } from '@material-tailwind/react'

const GeneralInfo = ({ votingData }) => {
  const navigate = useNavigate();
  const status = getVotingStatusConfigDetails(votingData);
  // Проверка на наличие данных, чтобы избежать ошибок, если prop не передан
  if (!votingData) {
    return <div>Данные о голосовании не найдены.</div>;
  }
 
  return (
    <main className="p-6 bg-white rounded-[20px] w-full shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Левая колонка */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">{votingData.voting_full_info.title}</div>
            <div className="flex items-center justify-between w-full flex-wrap gap-2">
              <div className="text-stone-300 text-base font-normal">{votingData.voting_full_info.theme}</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">(UTC+3) Россия - Москва</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className={`flex items-center gap-2.5 p-2.5 ${status.bg} rounded-lg w-full`}>
              <img src={status.icon} alt="Status" className="w-6 h-6" />
              <div className={`${status.textColor} text-base font-medium`}>{status.text}</div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-zinc-100 rounded-lg">
              <img src="/src/assets/images/detaliAndMain/file-zip.png" alt="Secret" className="w-6 h-6" />
              <div className="text-neutral-800 text-base font-medium">{votingData.voting_full_info.public ? 'Публичное' : 'Тайное'}</div>
            </div>
          </div>
          
            <Button className='bg-[#437DE9] text-base px-5 py-4 mt-auto w-full lg:w-96 rounded-lg flex justify-center items-center gap-2.5 self-start'>
							{status.text === 'Голосование на этапе регистрации' ? 'Зарегестрироваться' : (status.text === 'Голосование активно' ? 'Проголосовать' : 'Результаты')}
						</Button>
          
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Начало регистрации</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.startDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.startTime}</div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание регистр.</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registration.endDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
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
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.startDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.startTime}</div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание голосования</div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.endDate}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.voting.endTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 mt-auto rounded-xl outline outline-neutral-800 flex justify-between items-center">
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