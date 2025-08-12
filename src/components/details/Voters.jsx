const Voters = () => {
    return (
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
    );
};

export default Voters;