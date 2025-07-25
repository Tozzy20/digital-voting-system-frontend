import React, { useState, Fragment } from 'react';
import pollsData from '/pollsData.json';


const PollCard = ({ isActive, title, groupName, startDate, startTime, endDate, endTime, plannedCompletionDate, plannedCompletionTime }) => {
    const statusClasses = isActive
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700";

    const statusText = isActive
        ? "Голосование активно"
        : "Голосование на этапе регистрации";

    const statusIconSrc = isActive
        ? "/src/assets/icons/fire.svg" 
        : "/src/assets/icons/books.svg"; 

    return (
        <div className="flex flex-col space-y-4 rounded-[20px] bg-white shadow-lg p-[32px] w-[1037px]">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{groupName}</p>

            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full w-fit ${statusClasses}`}>
                <img src={statusIconSrc} alt="Status Icon" className="w-5 h-5" />
                <span className="text-sm font-medium">{statusText}</span>
            </div>

            <div className="grid grid-cols-3 gap-y-4 text-gray-700">
                <div>
                    <p className="text-sm font-medium">Начало регистрации</p>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/icons/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                        <span>{startDate}</span>
                        <img src="/src/assets/icons/clock.svg" alt="Clock Icon" className="w-4 h-4" />
                        <span>{startTime}</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Окончание регистрации</p>
                    <div className="flex items-center space-x-2">
                         <img src="/src/assets/icons/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                        <span>{endDate}</span>
                        <img src="/src/assets/icons/clock.svg" alt="Clock Icon" className="w-4 h-4" />
                        <span>{endTime}</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Дата запланированного завершения</p>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/icons/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                        <span>{plannedCompletionDate}</span>
                        <img src="/src/assets/icons/clock.svg" alt="Clock Icon" className="w-4 h-4" />
                        <span>{plannedCompletionTime}</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Начало голосования</p>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/icons/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                        <span>{startDate}</span>
                        <img src="/src/assets/icons/clock.svg" alt="Clock Icon" className="w-4 h-4" />
                        <span>{startTime}</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Окончание голосования</p>
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/icons/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                        <span>{endDate}</span>
                        <img src="/src/assets/icons/clock.svg" alt="Clock Icon" className="w-4 h-4" />
                        <span>{endTime}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-gray-800">Фамилия И. О.</p>
                <div className="flex space-x-4">
                    <button className="text-blue-600 font-medium">Подробнее</button>
                    <button>
                        <img src="/src/assets/icons/trash.svg" alt="Trash Icon" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const PollsList = () => {
    const [activeTab, setActiveTab] = useState('active');

    const filteredPolls = pollsData.filter(poll => {
        if (activeTab === 'active') {
            return poll.isActive;
        } else {
            return !poll.isActive;
        }
    });

    return (
        <Fragment>
            <div className="flex flex-col space-y-[20px] rounded-[20px] bg-white shadow-lg p-[24px] w-[1037px]">
                <div className="h-[54px] flex items-center justify-between">
                    <div className="flex font-supermolotM">
                        <button
                            className={`flex items-center space-x-2 px-[20px] py-[15px] rounded-[8px] ${
                                activeTab === 'active' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                            }`}
                            onClick={() => setActiveTab('active')}
                        >
                            <img
                                src="/src/assets/icons/fire.svg"
                                alt="Fire Icon"
                                className={activeTab === 'active' ? 'brightness-0 invert' : ''}
                            />
                            <span>Активные голосования</span>
                        </button>
                        <button
                            className={`flex items-center space-x-2 px-[20px] py-[15px] rounded-[8px] ${
                                activeTab === 'completed' ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                            }`}
                            onClick={() => setActiveTab('completed')}
                        >
                            <img
                                src="/src/assets/icons/books.svg"
                                alt="Books Icon"
                                className={activeTab === 'completed' ? 'brightness-0 invert' : ''}
                            />
                            <span>Завершенные голосования</span>
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Поиск по таблице"
                            className="pl-10 pr-4 py-2 rounded-[8px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <img src="/src/assets/icons/search.svg" alt="Search Icon" className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-[10px] mt-8">
                {filteredPolls.map((poll) => (
                    <PollCard
                        key={poll.id}
                        isActive={poll.isActive}
                        title={poll.title}
                        groupName={poll.groupName}
                        startDate={poll.startDate}
                        startTime={poll.startTime}
                        endDate={poll.endDate}
                        endTime={poll.endTime}
                        plannedCompletionDate={poll.plannedCompletionDate}
                        plannedCompletionTime={poll.plannedCompletionTime}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default PollsList;