const PasswordChangeForm = () => {
    return (
        <div className="font-supermolotM shadow-lg bg-white rounded-[20px] w-[473px]">
            <div className="p-[32px] space-y-[20px]">
                <h1 className="text-neutral-800 text-2xl font-semibold">Пароль</h1>

                {/* Пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="Пароль"
                        placeholder="hiown9823u0n"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Новый пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Новый_пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Новый пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="Новый_пароль"
                        placeholder="******************"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Подтвердить новый пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Подтвердить_пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Подтвердите новый пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="Подтвердить_пароль"
                        placeholder="******************"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    className="w-full h-[51px] bg-[#437DE9] rounded-lg flex items-center justify-center gap-2.5 text-white text-base font-semibold"
                >
                    <img src="/src/assets/icons/cloud.svg" alt="" />
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
};

export default PasswordChangeForm