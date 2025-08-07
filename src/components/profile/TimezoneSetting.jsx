const TimezoneSetting = () => {
    return (
        <div className=" shadow-lg bg-white rounded-[20px] w-full">
            <div className="p-[32px] space-y-[20px]">
                <h1 className="text-neutral-800 text-2xl font-semibold">Настройка времени</h1>
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="timezone"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Часовой пояс
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <select
                        id="timezone"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="UTC+3">[UTC+3] Россия - Москва - Московское время</option>
                    </select>
                </div>
                <button
                    className="w-full h-[51px] bg-[#437DE9] rounded-lg flex items-center justify-center gap-2.5 text-white text-base font-semibold"
                >
                    <img src="/icons/cloud.svg" alt="" />
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
};

export default TimezoneSetting;
