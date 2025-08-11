import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/PageTitle';
import GeneralInfo from '../components/details/GeneralInfo';
import Stats from '../components/details/Stats';
import Voters from '../components/details/Voters';
import Results from '../components/details/Results';
import Sidebar from '../components/constructor/Sidebar';
import { getVotingData } from '../services/api.js';
import { useAuth } from '../context/AuthProvider.jsx'
import { formatDate, formatTime } from '../components/votes/Formatters.jsx';

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

  // Функция, которая будет вызываться при клике на пункт сайдбара
  const handleMenuItemClick = (itemKey) => {
    setActiveContent(itemKey);
  };

     useEffect(() => {
        const fetchData = async () => {
            try {
               
                const rawData = await getVotingData(votingId, authToken);
                
                // Преобразуем данные в нужный формат и сохраняем в состояние
                const formattedData = prepareVotingDataForComponent(rawData);
                setVotingData(formattedData);
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

// Внутри компонента Detali0
  const detailsMenuItems = [
    { 
        key: 'general-info', 
        label: 'Общая информация', 
        icon: '/src/assets/images/detaliAndMain/Component 108.png' 
    },
    { 
        key: 'stats', 
        label: 'Статистика голосования', 
        icon: '/src/assets/images/detaliAndMain/Component 109.png' 
    },
    { 
        key: 'voters', 
        label: 'Голосующие', 
        icon: '/src/assets/images/detaliAndMain/Component 110.png' 
    },
    { 
        key: 'results', 
        label: 'Результаты', 
        icon: '/src/assets/images/detaliAndMain/Component 111.png' 
    },
  ];

  const renderContent = () => {
    switch (activeContent) {
        case "general-info":
            return <GeneralInfo votingData={votingData} />;
        case "stats":
            return <Stats votingData={votingData} />;
        case "voters":
            return <Voters />;
        case "results":
            return <Results />;
    }
  };


  return (
    <>
      
        <div className="h-full flex flex-col ml-[240px] mt-[60px] mr-[240px]">
          
          <Breadcrumbs title='Администратор / Детали голосования / Общая информация'/>
            
          <PageTitle title='Детали голосования' />

          <main className="flex mt-[24px]">
            <div>
            <Sidebar
            menuItems={detailsMenuItems}
            activeItem={activeContent}
            onMenuItemClick={handleMenuItemClick}
            />
            </div>
            <div className="ml-[10px] flex-1">
            {renderContent()}
            </div>
          </main>
          {/* <div className="w-[20%] p-8 mt-[260px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] flex flex-col items-start gap-2.5 absolute left-[17.36%]">
            <div className="flex items-center gap-4 p-2.5 bg-cyan-100 rounded-lg w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 108.png" alt="Icon" />
              </div>
              <Link to="/"><div className="text-blue-500 text-base font-medium">Общая информация</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 109.png" alt="Icon" />
              </div>
              <Link to="/stats"><div className="text-neutral-800 text-base font-normal">Статистика голосования</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 110.png" alt="Icon" />
              </div>
              <Link to="/voters"><div className="text-neutral-800 text-base font-normal">Голосующие</div></Link>
            </div>
            <div className="flex items-center gap-4 p-2.5 bg-white w-full">
              <div className="w-6 h-6 relative overflow-hidden">
                <img src="/src/assets/images/detaliAndMain/Component 111.png" alt="Icon" />
              </div>
              <Link to="/results"><div className="text-neutral-800 text-base font-normal">Результаты</div></Link>
            </div>
          </div> */}

          {/* <main className="w-[calc(100%-250px)] md:w-[calc(100%-300px)] lg:w-[65%] xl:w-[50%] h-[496px] ml-[37.8%] mt-[20px] bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden p-6">
            <Routes>
              <Route path="/" element={
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-start gap-2.5">
                      <div className="text-neutral-800 text-xl font-bold">Название голосования</div>
                      <div className="flex items-center justify-between w-full flex-wrap gap-2">
                        <div className="text-stone-300 text-base font-normal">Название группы людей</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">(UTC+3) Россия - Москва</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2.5">
                      <div className="flex items-center gap-2.5 p-2.5 bg-amber-100 rounded-lg w-full">
                        <div className="w-6 h-6 relative overflow-hidden">
                          <img src="/src/assets/images/detaliAndMain/identification.png" alt="Status" />
                        </div>
                        <div className="text-lime-800 text-base font-medium">Голосование на этапе регистрации</div>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-zinc-100 rounded-lg">
                        <div className="w-6 h-6 relative overflow-hidden">
                          <img src="/src/assets/images/detaliAndMain/file-zip.png" alt="Secret" />
                        </div>
                        <div className="text-neutral-800 text-base font-medium">Тайное</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center justify-between w-full">
                        <div className="text-lime-800 text-base font-medium">Вероятность переголосования</div>
                        <div className="px-4 py-2.5 bg-cyan-100 rounded flex items-center">
                          <div className="text-lime-800 text-base font-medium">Есть</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="text-lime-800 text-base font-medium">Вероятность отмены регистрации</div>
                        <div className="px-4 py-2.5 bg-cyan-100 rounded flex items-center">
                          <div className="text-lime-800 text-base font-medium">Есть</div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 mt-auto w-full lg:w-96 bg-blue-500 rounded-lg flex justify-center items-center gap-2.5 self-start">
                      <div className="text-white text-base font-semibold">Результаты</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
                        <div className="text-stone-300 text-base font-normal">Начало регистрации</div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">06.07.2025</div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">10:00</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[45%] px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
                        <div className="text-stone-300 text-base font-normal">Окончание регистр.</div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">06.07.2025</div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">10:00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="w-full px-4 py-2.5 bg-green-50 rounded-lg flex flex-col items-start gap-2.5">
                        <div className="text-stone-300 text-base font-normal">Начало голосования</div>
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">06.07.2025</div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">10:00</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 py-2.5 bg-pink-50 rounded-lg flex flex-col items-start gap-2.5">
                        <div className="text-stone-300 text-base font-normal">Окончание голосования</div>
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements0.png" alt="Date" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">06.07.2025</div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                              <img src="/src/assets/images/detaliAndMain/elements1.png" alt="Time" />
                            </div>
                            <div className="text-neutral-800 text-base font-normal">10:00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 mt-auto rounded-xl outline outline-1 outline-neutral-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="text-neutral-800 text-base font-medium">Материалы голосования</div>
                      </div>
                      <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/stats" element={<div>Статистика голосования content goes here</div>} />
              <Route path="/voters" element={<div>Голосующие content goes here</div>} />
              <Route path="/results" element={<div>Результаты content goes here</div>} />
            </Routes>
          </main> */}
        </div>
    </>
  );
};

export default Detali0;