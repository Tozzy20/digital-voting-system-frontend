import React from 'react';
import { Link } from 'react-router-dom'; 
import { getVotingStatusConfig } from './Formatters';

const VotingCard = ({ voting }) => {
    const status = getVotingStatusConfig(voting);
    return (
        <div className="bg-white rounded-[15px] sm:rounded-[20px] w-full shadow-lg p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 relative">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div className="flex flex-col gap-1 sm:gap-2">
                    <div className="text-neutral-800 text-lg sm:text-xl font-semibold font-supermolotDB leading-tight">
                        {voting.title}
                    </div>
                    <div className="text-stone-300 text-xs sm:text-sm font-normal leading-tight">
                        {voting.groupName}
                    </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-neutral-600 text-xs sm:text-sm font-normal leading-tight">
                    <img src="/src/assets/icons/timezone.svg" alt="UTC+3" className="w-3 h-3 sm:w-4 sm:h-4" />
                    {voting.timezone}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[68px] items-start flex-grow">
                <div className="flex flex-col gap-2 w-full sm:w-[393px]">
                    <div className={`h-8 sm:h-10 p-2 sm:p-[10px] rounded-lg w-full flex items-center gap-2 ${status.bg}`}>
                        <img src={status.icon} alt={status.text} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <div className={`text-xs sm:text-sm font-semibold font-supermolotDB leading-tight ${status.textColor}`}>
                            {status.text}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] w-full">
                    {/* Даты регистрации */}
                    <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <div className="text-neutral-600 text-xs sm:text-base">Начало регистрации</div>
                            <div className="flex items-center gap-1 sm:gap-2 text-neutral-800 text-xs sm:text-base font-semibold font-supermolotDB">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.registrationStart.date}</span>
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.registrationStart.time}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <div className="text-neutral-600 text-xs sm:text-base font-normal leading-tight">
                                Окончание регистрации
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-neutral-800 text-xs sm:text-base font-semibold font-supermolotDB leading-tight">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.registrationEnd.date}</span>
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.registrationEnd.time}</span>
                            </div>
                        </div>
                    </div>

                    {/* Даты голосования */}
                    <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <div className="text-neutral-600 text-xs sm:text-base font-normal leading-tight">
                                Начало голосования
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-neutral-800 text-xs sm:text-base font-semibold font-supermolotDB leading-tight">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.votingStart.date}</span>
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.votingStart.time}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <div className="text-neutral-600 text-xs sm:text-base font-normal leading-tight">
                                Окончание голосования
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-neutral-800 text-xs sm:text-base font-semibold font-supermolotDB leading-tight">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.votingEnd.date}</span>
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="whitespace-nowrap">{voting.votingEnd.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-2 sm:absolute sm:bottom-6 sm:right-6">
                <div className="flex gap-2 sm:gap-[10px]">
                    <Link to={`/votes/${voting.id}`}>
                        <img src="/src/assets/icons/details.svg" alt="Edit" className="w-8 h-8 sm:w-[36px] sm:h-[36px] cursor-pointer" />
                    </Link>
                    <img src="/src/assets/icons/delete.svg" alt="Delete" className="w-8 h-8 sm:w-[36px] sm:h-[36px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default VotingCard;