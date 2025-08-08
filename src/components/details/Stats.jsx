const Stats = (progressData) => {
      if (!progressData) {
    return <div>Данные о ходе голосования не найдены.</div>;
  }

  const {
    lastUpdated,
    registeredCount,
    votedCount,
    totalUsers,
    conditionText,
    conditionStatus,
    quorumPercentage
  } = progressData;

  const registeredPercentage = (registeredCount / totalUsers) * 100;
  
  return (
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
              <div className="text-black text-base font-normal">{lastUpdated.date}</div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Updated Time" />
              </div>
              <div className="text-black text-base font-normal">{lastUpdated.time}</div>
            </div>
          </div> 

          <div className="flex flex-wrap items-end gap-5">
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-amber-200 rounded-full"></div>
              <div className="text-black text-base font-normal">Зарегистрированы ({registeredCount})</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              <div className="text-black text-base font-normal">Не зарегистрированы ({totalUsers - registeredCount})</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-green-400 rounded-full"></div>
              <div className="text-black text-base font-normal">Проголосовали ({votedCount})</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div className="w-5 h-5 bg-rose-500 rounded-full"></div>
              <div className="text-black text-base font-normal">Не проголосовали ({registeredCount - votedCount})</div>
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
              {conditionText}
            </div>
          </div>
          <div>
            <div className="text-stone-300 text-base font-normal">Статус:</div>
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 114.png" alt="Status Icon" />
              </div>
              <div className={`text-${conditionStatus === 'Условия выполнены' ? 'green-400' : 'red-400'} text-base font-semibold`}>
                {conditionStatus}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-stone-300 text-base font-normal mb-2">Электронная явка ({quorumPercentage}%)</div>
            <div className="w-full h-4 bg-zinc-100 rounded-full relative">
              <div 
                className="absolute top-0 left-0 h-full bg-sky-300 rounded-full" 
                style={{ width: `${registeredPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;