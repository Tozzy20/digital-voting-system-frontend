import { useState, useEffect, useRef } from 'react';
import { useAuth } from '/src/context/AuthProvider.jsx'
import { getProfileData } from '../services/api'
import DropdownMenu from '../components/DropdownMenu'

import { NavLink, useNavigate, Link } from 'react-router-dom'
import { CircleUserRound, ScanSearch, Settings2 } from 'lucide-react'
import HeaderDropdown from './Header/HeaderDropdown';
import AltHeaderDropdown from './Header/AltHeaderDropdown';

const Header = ({isAuthorized = true}) => {
    const { authToken } = useAuth();
    const [user, setUser] = useState(null);

    const Users = [
      { title: 'Наблюдатель', to: '/' },
      { title: 'Член счётной комиссии', to: '/' },
      { title: 'Секретарь', to: '/' }
    ]
    const Voting = [
      { title: 'Список голосований', to: '/voting' },
      { title: 'Конструктор голосований', to: '/constructor' }
    ]
    const Add = ['Голосование', 'Шаблон голосований', 'Группу пользователей']
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <>
      <div className='h-25 bg-[#212121]'>
        {/* Desktop Header */}
        <div className='hidden md:flex justify-between py-[18px] md:mx-3 lg:mx-20 xl:mx-40 2xl:mx-80 text-white text-md font-semibold'>
          <div className='flex gap-5 items-start'>
            <div className='flex items-start'>
              <img
                className='rounded-full h-16 w-16'
                src='https://placehold.co/64x64.png'
                alt='User avatar'
              />
            </div>
            <div className='mt-1 flex gap-5'>
              <NavLink
                to={'/main'}
                className='px-5 h-13 flex items-start py-3 cursor-pointer hover:bg-[#505050] rounded-2xl'
              >
                Главная
              </NavLink>
              {isAuthorized && (
                <div className='h-full flex items-start z-20'>
                  <HeaderDropdown 
                    title={'Пользователи'} 
                    options={Users} 
                    links={Users.map(u => u.to)} 
                  />
                </div>
              )}
              {isAuthorized ? (
                <div className='h-full flex items-start z-20'>
                  <HeaderDropdown 
                    title={'Голосования'} 
                    options={Voting} 
                    links={Voting.map(v => v.to)} 
                  />
                </div>
              ) : (
                <p>Голосования</p>
              )}

              {isAuthorized && (
                <div className='h-full flex items-start z-20'>
                  <AltHeaderDropdown title={'Добавить'} options={Add} />
                </div>
              )}
            </div>
          </div>
          <div className='flex h-15 gap-6 items-center'>
            {isAuthorized && (
              <>
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/search.svg" alt="Search" className="w-full h-full object-contain" />
                </div>
                <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/options.svg" alt="Notifications" className="w-full h-full object-contain" />
                </div>
              </>
            )}
            {!isAuthorized ? (
              <p>Авторизация</p>
            ) : user ? (
              <p className='whitespace-nowrap max-2xl:hidden'>
                {user.last_name} {user.first_name?.slice(0, 1) + "."} {user.surname?.slice(0, 1) + "."}
              </p>
            ) : (
              <p>Пользователь</p>
            )}
            <NavLink to={'/profile'}>
              <div className="w-8 h-8 cursor-pointer">
                    <img src="/src/assets/icons/profile.svg" alt="User" class="w-full h-full object-contain" />
              </div>
            </NavLink>
          </div>
        </div>

        {/* Mobile Header */}
        <div className='md:hidden flex justify-between items-center py-7 px-6 text-white'>
          <div className='flex items-center'>
            <img
              className='rounded-full h-10 w-10'
              src='https://placehold.co/64x64.png'
              alt='User avatar'
            />
            <NavLink
              to={'/main'}
              className='ml-3 text-lg font-semibold'
            >
              Главная
            </NavLink>
          </div>
          
          <div className='flex items-center gap-3'>
            {isAuthorized && (
              <>
                <ScanSearch size={24} className='cursor-pointer' />
                <Settings2 size={24} className='cursor-pointer' />
              </>
            )}
            <NavLink to={'/profile'}>
              <CircleUserRound size={24} className='cursor-pointer' />
            </NavLink>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='ml-2'
            >
              <div className='w-6 h-0.5 bg-white mb-1.5'></div>
              <div className='w-6 h-0.5 bg-white mb-1.5'></div>
              <div className='w-6 h-0.5 bg-white'></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-[#212121] px-7 pb-4 absolute top-20 left-0 right-0 z-30'>
            <div className='flex flex-col gap-2'>
              {isAuthorized && (
                <div className='rounded-2xl bg-neutral-500 overflow-hidden'>
                  <HeaderDropdown 
                    title={'Пользователи'} 
                    options={Users} 
                    links={Users.map(u => u.to)} 
                  />
                </div>
              )}
              {isAuthorized ? (
                <div className='rounded-2xl bg-neutral-500 overflow-hidden'>
                  <HeaderDropdown 
                    title={'Голосования'} 
                    options={Voting} 
                    links={Voting.map(v => v.to)} 
                  />
                </div>
              ) : (
                <p className='p-3 text-white'>Голосования</p>
              )}
              {isAuthorized && (
                <div className='rounded-2xl bg-neutral-500 overflow-hidden w-57'>
                  <AltHeaderDropdown title={'Добавить'} options={Add} />
                </div>
              )}
              {!isAuthorized && (
                <p className='p-3 text-white'>Авторизация</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
    );
};

export default Header;