import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '/src/context/AuthProvider.jsx'
import { getProfileData } from '../services/api'

const Header = () => {
    const { authToken } = useAuth();

    const [user, setUser] = useState(null);

    useEffect(() => {
    const fetchAndSetUserData = async () => {
        try {
          const fullProfileData = await getProfileData(authToken);
          setUser({
            last_name: fullProfileData.last_name,
            first_name: fullProfileData.first_name,
            surname: fullProfileData.surname,
          });
        } catch { 
            setUser(null);
        }
        
      
    };
    fetchAndSetUserData();
  }, [])

    if (!user) {
        return <header className="w-full h-24 bg-neutral-800 "></header>;
    }

    return (
        <header className="w-full h-24 bg-neutral-800 flex items-center justify-between">
        <nav className="ml-[240px] hidden lg:flex items-center gap-6">
            <div className="w-16 h-16 bg-stone-300 rounded-full"></div>
            <Link to='/main1' className="text-white text-base font-semibold hover:text-gray-500">Главная</Link>
            <div className="relative group">
                <div className="flex items-center gap-2.5">
                    <div className="text-white text-base font-semibold hover:text-gray-500">Пользователи</div>
                    <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex items-center gap-2.5">
                <Link to='/votes' className="text-white text-base font-semibold hover:text-gray-500">Голосования</Link>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
            <div className="px-5 py-4 rounded-lg outline outline-white flex items-center gap-2.5">
                <Link to='/constructor' className="text-white text-base font-semibold hover:text-gray-500">Добавить</Link>
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
                <div className="text-white text-base font-semibold">{user.last_name} {user.first_name.slice(0, 1) + "."} {user.surname.slice(0, 1) + "."}</div>
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/profile.svg" alt="User" class="w-full h-full object-contain" />
                </div>
            </Link>
        </div>
    </header>
    );
};

export default Header;