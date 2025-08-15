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

  // Функция, которая будет вызываться при клике на пункт сайдбара
  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
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
    }, [votingId, authToken]); // Зависимости: запрос повторится при смене ID или токена

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!votingData) {
        return <div>Данные о голосовании не найдены.</div>;
    }

  const role_id = parseInt(localStorage.getItem('role_id'), 10);
// Внутри компонента Detali0
  const detailsMenuItems = [
    { 
        key: 'general-info', 
        label: 'Общая информация', 
        icon: '/src/assets/icons/general-info.svg',
        roles: [1, 2, 3]
    },
    { 
        key: 'stats', 
        label: 'Статистика голосования', 
        icon: '/src/assets/icons/statistics.svg',
        roles: [3]
    },
    { 
        key: 'voters', 
        label: 'Голосующие', 
        icon: '/src/assets/icons/voters.svg',
        roles: [3] 
    },
    { 
        key: 'results', 
        label: 'Результаты', 
        icon: '/src/assets/icons/results.svg',
        roles: [3] 
    },
    { 
      key: 'my-bulletin', 
      label: 'Мой бюллетень', 
      icon: '/src/assets/icons/myBulliten.svg', 
      roles: [1, 2] 
    },
    { 
      key: 'user-results', 
      label: 'Результаты', 
      icon: '/src/assets/icons/results.svg', 
      roles: [1, 2] 
    },
  ];

  const status = getVotingStatusConfigDetails(votingData)

  const renderContent = () => {
    switch (activeContent) {
        case "general-info":
            return <GeneralInfo votingData={votingData} />;
        case "stats":
            return <VotingStatistic votingStats={votingStats} quorum={votingData.voting_full_info.quorum} />;
        case "voters":
            return <Voters voters={voters} />;
        case "results":
            return status.text === 'Голосование завершено' ? <ResultsForAdmin votingId={votingId} /> : <BeforeResults />;
        case "my-bulletin":
                return <MyBulliten />;
        case "user-results":
            return status.text === 'Голосование завершено' ? <ResultsForAdmin votingId={votingId} /> : <BeforeResults />;
        default:
            return null;
    }
  };

     const filteredMenuItems = role_id ? detailsMenuItems.filter(item => item.roles.includes(role_id)) : [];
  return (
    <>
      
        <div className="h-full flex flex-col ml-[240px] mt-[60px] mr-[240px]">
          
          <Breadcrumbs title='Администратор / Детали голосования / Общая информация'/>
            
          <PageTitle title='Детали голосования' />

          <main className="flex mt-[24px]">
            <div>
            <Sidebar
            menuItems={filteredMenuItems}
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