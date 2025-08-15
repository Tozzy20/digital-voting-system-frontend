const Voters = ({ voters }) => {
    return (
        <div className="bg-white shadow-sm rounded-[20px] h-[532px] overflow-hidden p-6">
               
                  <div className="text-black text-xl font-bold mb-6">
                    Список голосующих
                  </div>

                  {/* <div className="flex"> */}
                    <div className="flex-grow w-full flex flex-col items-start gap-2.5 overflow-y-auto h-[400px]">
                      {voters && voters.participants.map((voters) => (
                        <div 
                            key={voters.id} // Уникальный ключ для каждого элемента
                            className="w-full pl-5 py-3 border-l-4 border-black flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                        >
                            <div className="flex flex-col items-start gap-3 min-w-[240px]">
                                <div className="text-black text-base">{voters.last_name} {voters.first_name}</div>
                                <div className="text-black text-base">{voters.email}</div>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {/* Динамически отображаем статусы */}
                                {voters.voting_status === 'registered' ? (
                                    <div className="p-2.5 bg-red-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                                        <div className="text-black text-base">Не проголосовал</div>
                                    </div>
                                ) : (
                                    <div className="p-2.5 bg-green-100 rounded-lg flex items-center gap-2.5 whitespace-nowrap">
                                        <div className="text-black text-base">Проголосовал</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    </div>

                    

                  </div>
            //   </div>
    );
};

export default Voters;