import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const savedProfileString = localStorage.getItem('userName');

        if (savedProfileString) {
            try {
               
                const user = JSON.parse(savedProfileString);
                
                setUserProfile(user);
            } catch (e) {
                console.error("Ошибка парсинга данных пользователя из localStorage", e);
            }
        }
    }, []); 

    if (!userProfile) {
        return <header className="w-full h-24 bg-neutral-800 font-supermolotM"></header>;
    }

    return (
        <header className="w-full h-24 bg-neutral-800 font-supermolotM flex items-center justify-between">
        <nav className="ml-[240px] hidden lg:flex items-center gap-6">
            <div className="w-16 h-16 bg-stone-300 rounded-full"></div>
            <div className="text-white text-base font-semibold">Главная</div>
            <div className="flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">Пользователи</div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2.5">
                <Link to='/votes' className="text-white text-base font-semibold hover:text-amber-300">Голосования</Link>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
            <div className="px-5 py-4 rounded-lg outline outline-1 outline-white flex items-center gap-2.5">
                <Link to='/constructor' className="text-white text-base font-semibold hover:text-amber-300">Добавить голосование</Link>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
        </nav>
        <div className="mr-[240px] flex items-center gap-6">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/search.svg" alt="Search" className="w-full h-full object-contain" />
                </div>
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/options.svg" alt="Notifications" className="w-full h-full object-contain" />
                </div>
            </div>
            <Link to='/profile' className="flex items-center gap-2.5">
                <div className="text-white text-base font-semibold">{userProfile.last_name} {userProfile.first_name} {userProfile.surname}</div>
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/profile.svg" alt="User" className="w-full h-full object-contain" />
                </div>
            </Link>
        </div>
    </header>
    );
};

export default Header;