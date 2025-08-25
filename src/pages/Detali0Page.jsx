import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import GeneralInfo from '../components/details/GeneralInfo';
import VotingStatistic from '../components/details/Stats';
import Voters from '../components/details/Voters';
import { ResultsForAdmin, BeforeResults } from '../components/details/Results';
import Sidebar from '../components/constructor/Sidebar';
import { getVotingData, getVotingParticipants, getVotingStats, registerUserForVoting } from '../services/api.js';
import { useAuth } from '../context/AuthProvider.jsx'
import { formatDate, formatTime, getVotingStatusConfigDetails } from '../components/votes/Formatters.jsx';
import { ToastContainer, toast } from 'react-toastify';
import MyBulliten from '../components/details/MyBulliten.jsx';
import { jwtDecode } from "jwt-decode";

/**
 * @description Подготавливает данные голосования для отображения в компоненте.
 * @param {object} rawData - Необработанные данные голосования, полученные из API.
 * @returns {object|null} - Отформатированные данные или null, если исходные данные отсутствуют.
 */
const prepareVotingDataForComponent = (rawData) => {
    if (!rawData) return null;

    // Предполагаем, что rawData содержит поля `registration_start_date` и `voting_end_date`
    return {
        // Копируем все исходные поля
        ...rawData,
        // Создаем новые поля с отформатированными данными
        registration: {
            startDate: formatDate(rawData.voting_full_info.registration_start),
            startTime: formatTime(rawData.voting_full_info.registration_start),
            endDate: formatDate(rawData.voting_full_info.registration_end),
            endTime: formatTime(rawData.voting_full_info.registration_end),
        },
        voting: {
            startDate: formatDate(rawData.voting_full_info.voting_start),
            startTime: formatTime(rawData.voting_full_info.voting_start),
            endDate: formatDate(rawData.voting_full_info.voting_end),
            endTime: formatTime(rawData.voting_full_info.voting_end),
        },
    };
};

const Detali0 = () => {
    const { votingId } = useParams();
    const [votingData, setVotingData] = useState(null);
    const [loading, setLoading] = useState(true);
    // Инициализируем mobileMenuOpen, чтобы избежать ошибок
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const [activeContent, setActiveContent] = useState("general-info");
    const { authToken } = useAuth();
    const [votingStats, setVotingStats] = useState(null);
    const [voters, setVoters] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userRole, setUserRole] = useState(null);

    const decodedToken = authToken ? jwtDecode(authToken) : null;
    const userId = decodedToken ? decodedToken.sub : null;
    const role_id = decodedToken ? decodedToken.role_id : null;


    // Функция, которая будет вызываться при клике на пункт сайдбара
    const handleMenuItemClick = (itemKey) => {
        setActiveContent(itemKey);
        // Закрываем меню на мобильном устройстве при выборе пункта
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    const handleRegistration = async () => {
        try {
            await registerUserForVoting(votingId, authToken);
            setIsRegistered(true);
            setActiveContent('my-bulletin');
            toast.success('Пользователь успешно зарегистрирован!');
        }
        catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        toast.error(`Ошибка 400: ${error.response.data.error}`);
                        break;
                    case 404:
                        toast.error(`Ошибка 404: Голосование или пользователь не найден`);
                        break;
                    case 409:
                        toast.error(`Ошибка 409: Пользователь зарегистрирован или регистрация закрыта`);
                        break;
                    default:
                        toast.error('Произошла ошибка.');
                }
            } else {
                toast.error('Сетевая ошибка. Проверьте ваше подключение.');
            }
        }
    };

    const handleNavigateToMyBulliten = () => {
        setActiveContent('my-bulletin');
    };

    const handleNavigateToResults = () => {
        setActiveContent('results');
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Первый запрос на основные данные
                const rawData = await getVotingData(votingId, authToken);

                // Преобразуем данные в нужный формат и сохраняем в состояние
                const formattedData = prepareVotingDataForComponent(rawData);

                // Запрос на статистику
                const statsData = await getVotingStats(votingId, authToken);

                // Запрос на голосующих
                const votersData = await getVotingParticipants(votingId, authToken);

                const isUserRegistered = votersData.participants.some(voter => voter.id === userId);
                setIsRegistered(isUserRegistered);

                setUserRole(role_id)
                setVotingData(formattedData);
                setVotingStats(statsData);
                setVoters(votersData);
            } catch (e) {
                console.error("Ошибка при получении данных:", e);
                // Можно добавить тост, чтобы показать ошибку пользователю
                toast.error('Не удалось загрузить данные о голосовании.');
            }
            finally {
                setLoading(false);
            }
        };

        if (votingId) {
            fetchData();
        }
    }, [votingId, authToken, userId, role_id]); // Зависимости: запрос повторится при смене ID, токена, или данных пользователя.

    if (loading) {
        return <div className="text-center py-10">Загрузка...</div>;
    }

    if (!votingData) {
        return <div className="text-center py-10">Данные о голосовании не найдены.</div>;
    }


    // Определяем пункты меню на основе userRole и isRegistered
    const getMenuItems = () => {
        const baseItems = [
            { key: 'general-info', label: 'Общая информация', icon: '/src/assets/icons/general-info.svg' },
        ];

        // Пункты для создателя/админа
        if (role_id === 3 || votingData.voting_full_info.creator.id === userId) {
            baseItems.push(
                { key: 'stats', label: 'Статистика голосования', icon: '/src/assets/icons/statistics.svg' },
                { key: 'voters', label: 'Голосующие', icon: '/src/assets/icons/voters.svg' }
            );
        }

        // "Мой бюллетень" доступен только зарегистрированным пользователям и админу 
        if (isRegistered || role_id === 3) {
            baseItems.push({ key: 'my-bulletin', label: 'Мой бюллетень', icon: '/src/assets/icons/myBulliten.svg' });
        }

        // "Результаты" доступны только зарегетсрированым на голосование или админу
        if (isRegistered || votingData.voting_full_info.creator.id === userId || role_id === 3) {
            baseItems.push({ key: 'results', label: 'Результаты', icon: '/src/assets/icons/results.svg' });
        }
        return baseItems;
    };

    const menuItems = getMenuItems();
    const status = getVotingStatusConfigDetails(votingData);

    const renderContent = () => {
        switch (activeContent) {
            case "general-info":
                return <GeneralInfo votingData={votingData}
                    isRegistered={isRegistered}
                    onRegister={handleRegistration}
                    onNavigateToMyBulliten={handleNavigateToMyBulliten}
                    onNavigateToResults={handleNavigateToResults} />;
            case "stats":
                return <VotingStatistic votingStats={votingStats} quorum={votingData.voting_full_info.quorum} />;
            case "voters":
                return <Voters voters={voters} />;
            case "results":
                return status.text === 'Голосование завершено' ? <ResultsForAdmin votingId={votingId} /> : <BeforeResults />;
            case "my-bulletin":
                return <MyBulliten votingData={votingData} authToken={authToken} votingId={votingId} />;
            // Удаляем "user-results", так как его нет в sidebar
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen">
            <ToastContainer />
            <div className="px-4 2xl:mx-[200px] mt-[60px]">
                <Breadcrumbs title='Администратор / Детали голосования / Общая информация' />
                <div className="flex items-center justify-between">
                    <PageTitle title="Детали голосования" />
                    {/* Кнопка меню только на экранах меньше 2xl */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="2xl:hidden mt-[20px] flex items-center gap-2 p-2 bg-white rounded-md hover:bg-gray-200 transition-colors z-20"
                    >
                        <span>Меню</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                
                <main className="flex flex-col 2xl:flex-row mt-6 gap-6 relative">
                    {/* Мобильный оверлей */}
                    {mobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-opacity-50 z-10 2xl:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        ></div>
                    )}
                    
                    {/* Сайдбар - адаптивная позиция и видимость */}
                    <div className={`${mobileMenuOpen ? 'top-0 left-0 h-full w-full block' : 'hidden'} 
                        2xl:block 2xl:relative 2xl:w-64 z-20 transition-transform transform
                        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 2xl:translate-x-0`}>
                        <Sidebar
                            menuItems={menuItems}
                            activeItem={activeContent}
                            onMenuItemClick={handleMenuItemClick}
                        />
                    </div>
                    
                    {/* Основное содержимое */}
                    <div className="flex-1 w-full 2xl:ml-31">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Detali0;