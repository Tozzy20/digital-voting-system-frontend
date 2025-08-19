import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import GeneralInfo from '../components/details/GeneralInfo';
import VotingStatistic from '../components/details/Stats';
import Voters from '../components/details/Voters';
import { ResultsForAdmin, BeforeResults } from '../components/details/Results';
import Sidebar from '../components/constructor/Sidebar';
import { getVotingData, getVotingParticipants, getVotingResults, getVotingStats } from '../services/api.js';
import { useAuth } from '../context/AuthProvider.jsx'
import { formatDate, formatTime, getVotingStatusConfigDetails } from '../components/votes/Formatters.jsx';
import MyBulliten from '../components/details/MyBulliten.jsx';
import { jwtDecode } from "jwt-decode";

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
    const [activeContent, setActiveContent] = useState("general-info"); // Устанавливаем 'create-poll' как начальное активное состояние
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
    };

    const handleRegistration = async () => {
        const response = await registerUserForVoting(votingId, authToken);

        // Здесь вы можете обработать ответ от сервера, например, 
        // проверить, что регистрация прошла успешно.
        if (response.success) {
            // 2. После успешной регистрации обновляем состояния
            setIsRegistered(true);
            setActiveContent('my-bulletin');
            console.log('Пользователь успешно зарегистрирован!');
        } else {
            console.error('Ошибка регистрации:', response.message);
            // Обработка ошибки
        }
    };

    const handleNavigateToMyBulliten = () => {
        setActiveContent('my-bulletin');
    };


    useEffect(() => {
        const fetchData = async () => {
            try {

                // Первый запрос на основные данные
                const rawData = await getVotingData(votingId, authToken);

                // Преобразуем данные в нужный формат и сохраняем в состояние
                const formattedData = prepareVotingDataForComponent(rawData);

                // Второй запрос на статистику
                const statsData = await getVotingStats(votingId, authToken);

                // Запрос на голосующих
                const votersData = await getVotingParticipants(votingId, authToken);

                // const decodedToken = jwtDecode(authToken)
                // console.log(decodedToken);
                // const userId = decodedToken.sub;
                // console.log('User ID:', userId);
                // const role_id = decodedToken.role_id;
                setUserRole(role_id)


                setVotingData(formattedData);
                setVotingStats(statsData);
                setVoters(votersData);
            } catch (e) {
                console.error("Ошибка при получении данных:", e);
            }
            finally {
                setLoading(false);
            }
        };

        if (votingId) {
            fetchData();
        }
    }, [votingId, authToken, userId]); // Зависимости: запрос повторится при смене ID или токена

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!votingData) {
        return <div>Данные о голосовании не найдены.</div>;
    }


    // Определяем пункты меню на основе userRole и isRegistered
    const getMenuItems = () => {
        const baseItems = [
            { key: 'general-info', label: 'Общая информация', icon: '/src/assets/icons/general-info.svg' },
        ];

        // Пункты для создателя/админа
        if (userRole === 3 || votingData.voting_full_info.creator.id === userId) {
            baseItems.push(
                { key: 'stats', label: 'Статистика голосования', icon: '/src/assets/icons/statistics.svg' },
                { key: 'voters', label: 'Голосующие', icon: '/src/assets/icons/voters.svg' }
            );
        }

        // "Мой бюллетень" доступен только зарегистрированным пользователям
        if (isRegistered) {
            baseItems.push({ key: 'my-bulletin', label: 'Мой бюллетень', icon: '/src/assets/icons/myBulliten.svg' });
        }

        // "Результаты" доступны всем, но только после завершения голосования
        if (isRegistered || votingData.voting_full_info.creator.id === userId || userRole === 3) {
            baseItems.push({ key: 'results', label: 'Результаты', icon: '/src/assets/icons/results.svg' });
        }
        return baseItems;
    };

    const menuItems = getMenuItems();
    const status = getVotingStatusConfigDetails(votingData)

    const renderContent = () => {
        switch (activeContent) {
            case "general-info":
                return <GeneralInfo votingData={votingData}
                    isRegistered={isRegistered}
                    onRegister={handleRegistration}
                    onNavigateToMyBulliten={handleNavigateToMyBulliten} />;
            case "stats":
                return <VotingStatistic votingStats={votingStats} quorum={votingData.voting_full_info.quorum} />;
            case "voters":
                return <Voters voters={voters} />;
            case "results":
                return status.text === 'Голосование завершено' ? <ResultsForAdmin votingId={votingId} /> : <BeforeResults />;
            case "my-bulletin":
                return <MyBulliten votingData={votingData} />;
            case "user-results":
                return status.text === 'Голосование завершено' ? <ResultsForAdmin votingId={votingId} /> : <BeforeResults />;
            default:
                return null;
        }
    };

    return (
        <>

            <div className="h-full flex flex-col ml-[240px] mt-[60px] mr-[240px]">

                <Breadcrumbs title='Администратор / Детали голосования / Общая информация' />

                <PageTitle title='Детали голосования' />

                <main className="flex mt-[24px]">
                    <div>
                        <Sidebar
                            menuItems={menuItems}
                            activeItem={activeContent}
                            onMenuItemClick={handleMenuItemClick}
                        />
                    </div>
                    <div className="ml-[10px] flex-1">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Detali0;