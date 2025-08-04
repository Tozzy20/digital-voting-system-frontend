const Header = () => {
    return (
        <header class="w-full h-24 bg-neutral-800 flex items-center justify-between">
        <nav class="ml-[240px] hidden lg:flex items-center gap-6">
            <div class="w-16 h-16 bg-stone-300 rounded-full"></div>
            <div class="text-white text-base font-semibold">Главная</div>
            <div class="flex items-center gap-2.5">
                <div class="text-white text-base font-semibold">Пользователи</div>
                <div class="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
            <div class="flex items-center gap-2.5">
                <div class="text-white text-base font-semibold">Голосования</div>
                <div class="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
            <div class="px-5 py-4 rounded-lg outline outline-1 outline-white flex items-center gap-2.5">
                <div class="text-white text-base font-semibold">Добавить</div>
                <div class="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
        </nav>
        <div class="mr-[240px] flex items-center gap-6">
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/search.svg" alt="Search" class="w-full h-full object-contain" />
                </div>
                <div class="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/options.svg" alt="Notifications" class="w-full h-full object-contain" />
                </div>
            </div>
            <div class="flex items-center gap-2.5">
                <div class="text-white text-base font-semibold">Фамилия И.О.</div>
                <div class="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/profile.svg" alt="User" class="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;