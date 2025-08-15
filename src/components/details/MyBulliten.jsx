const MyBulliten = () => {
    return (
        <>
        <div className="flex flex-col gap-6">
        <div className="h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
          <div className="text-neutral-800 text-xl font-bold mb-4">Название голосования</div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-stone-300 text-base font-normal">Название группы людей</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone Icon" />
                </div>
                <div className="text-neutral-800 text-base font-normal">(UTC+3) Россия - Москва</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">2 дня</div>
              <div className="text-stone-300 text-base font-normal">15 часов, 16 минут до окончания регистрации</div>
            </div>
            <div className="relative w-full h-24">
              <div className="absolute inset-0 w-[30%] h-full bg-amber-200 rounded-xl"></div>
              <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
            </div>
          </div>

          <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">10 дней</div>
              <div className="text-stone-300 text-base font-normal">15 часов, 16 минут до начала голосования</div>
            </div>
            <div className="relative w-full h-24">
              <div className="absolute inset-0 w-[10%] h-full bg-sky-300 rounded-xl"></div>
              <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">№1. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-02.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal mb-6">Необходимо выбрать один вариант ответа</div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded-full flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Да</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-neutral-800 flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Нет</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-neutral-800 flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Не могу ответить</div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-neutral-800 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/time-quarter.svg" alt="Cancel Icon" />
          </div>
          <div className="text-white text-base font-medium">Отменить выбор</div>
        </div>
      </div>

      <div className="bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">№2. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-03.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal mb-6">Необходимо выбрать два варианта ответа</div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Пример вариант 1</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Вариант 2</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-neutral-800 rounded flex-shrink-0"></div>
            <div className="text-neutral-800 text-xl font-normal">Пример вариант 3</div>
          </div>
        </div>

        <div className="w-full sm:w-80 px-5 py-4 bg-zinc-100 rounded-xl inline-flex justify-center items-center gap-4">
          <div className="w-6 h-6 relative overflow-hidden">
            <img src="/src/assets/images/detaliAndMain/tap-07.svg" alt="Vote Icon" />
          </div>
          <div className="text-neutral-600 text-base font-medium">Проголосовать</div>
        </div>
      </div>

      <div className="bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">№3. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-04.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal mb-8">Необходимо выбрать один вариант ответа</div>

        <div className="mb-2 flex justify-start md:justify-center gap-5 md:gap-10 text-neutral-800 text-xl font-normal">
          <div className="w-32 md:w-44 text-center">За</div>
          <div className="w-32 md:w-44 text-center">Против</div>
          <div className="w-32 md:w-44 text-center">Воздержаться</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">ФИО 1</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">ФИО 2</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">ФИО 3</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded-full"></div>
              <div className="w-6 h-6 rounded-full border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">Никто 4</div>
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
          <div className="text-white text-base font-medium">Отменить выбор</div>
        </div>
      </div>

      <div className="mb-[40px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="text-neutral-800 text-xl font-bold">№4. Пример вопроса</div>
            <div className="w-6 h-6 relative overflow-hidden">
              <img src="/src/assets/images/detaliAndMain/checkmark-circle-04.svg" alt="Question Status" />
            </div>
          </div>
          <div className="w-full sm:w-96 px-5 py-4 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="text-neutral-800 text-base font-medium">Материалы вопроса</div>
            </div>
            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-stone-300 text-base font-normal mb-8">Необходимо выбрать все подходящие варианты ответа</div>

        <div className="mb-2 flex justify-start md:justify-center gap-5 md:gap-10 text-neutral-800 text-xl font-normal">
          <div className="w-32 md:w-44 text-center">Вариант 1</div>
          <div className="w-32 md:w-44 text-center">Вариант 2</div>
          <div className="w-32 md:w-44 text-center">Вариант 3</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">Вариант 1</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">Вариант 2</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">Вариант 3</div>
            <div className="flex gap-5 md:gap-50 mr-[300px]">
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
              <div className="w-6 h-6 bg-neutral-800 rounded"></div>
              <div className="w-6 h-6 rounded border border-neutral-800"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-neutral-800 text-xl font-normal w-40 md:w-60">Вариант 4</div>
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
          <div className="text-white text-base font-medium">Проголосовать</div>
        </div>
      </div>
   
     
      </>
    )
}

export default MyBulliten;