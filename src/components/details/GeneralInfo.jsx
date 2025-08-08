import React from 'react';

const GeneralInfo = ({ votingData }) => {
  // Проверка на наличие данных, чтобы избежать ошибок, если prop не передан
  if (!votingData) {
    return <div>Данные о голосовании не найдены.</div>;
  }

  return (
    <main className="p-6 bg-white rounded-[20px] w-[77.5%] shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Левая колонка */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">{votingData.title}</div>
            <div className="flex items-center justify-between w-full flex-wrap gap-2">
              <div className="text-stone-300 text-base font-normal">{votingData.groupName}</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.timezone}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <div className="flex items-center gap-2.5 p-2.5 bg-amber-100 rounded-lg w-full">
              <img src="/src/assets/images/detaliAndMain/identification.png" alt="Status" className="w-6 h-6" />
              <div className="text-lime-800 text-base font-medium">{votingData.statusText}</div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-zinc-100 rounded-lg">
              <img src="/src/assets/images/detaliAndMain/file-zip.png" alt="Secret" className="w-6 h-6" />
              <div className="text-neutral-800 text-base font-medium">{votingData.isSecret}</div>
            </div>
          </div>
          <div className="px-5 py-4 mt-auto w-full lg:w-96 bg-blue-500 rounded-lg flex justify-center items-center gap-2.5 self-start">
            <div className="text-white text-base font-semibold">Результаты</div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Начало регистрации</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registrationStart.date}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registrationStart.time}</div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание регистр.</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registrationEnd.date}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.registrationEnd.time}</div>
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
                  <div className="text-neutral-800 text-base font-normal">{votingData.votingStart.date}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.votingStart.time}</div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
              <div className="text-stone-300 text-base font-normal">Окончание голосования</div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.votingEnd.date}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" className="w-6 h-6" />
                  <div className="text-neutral-800 text-base font-normal">{votingData.votingEnd.time}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 mt-auto rounded-xl outline outline-1 outline-neutral-800 flex justify-between items-center">
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