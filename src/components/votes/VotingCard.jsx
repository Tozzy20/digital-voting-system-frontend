// src/components/VotingCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 

const VotingCard = ({ voting }) => {
    const statusText = voting.status === 'active' 
        ? 'Голосование активно' 
        : voting.status === 'registration'
        ? 'Голосование на этапе регистрации'
        : 'Голосование завершено';

    const statusBg = voting.status === 'active' 
        ? 'bg-[#E6FFDD]' 
        : voting.status === 'registration'
        ? 'bg-[#FFFBD0]'
        : 'bg-neutral-100';

    const statusTextColor = voting.status === 'active' 
        ? 'text-[#135615]' 
        : voting.status === 'registration'
        ? 'text-[#564E13]'
        : 'text-neutral-800';

    const statusIcon = voting.status === 'active'
        ? '/src/assets/icons/fireGreen.svg'
        : voting.status === 'registration'
        ? '/src/assets/icons/registration.svg'
        : '/src/assets/icons/archive.svg';

    return (
        
        <div className="bg-white rounded-[20px] h-[278px] shadow-lg p-6 flex flex-col gap-4 relative">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                    <div className="text-neutral-800 text-xl font-semibold font-supermolotDB leading-[30px]">
                        {voting.title}
                    </div>
                    <div className="text-stone-300 text-sm font-normal  leading-[21px]">
                        {voting.groupName}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-neutral-600 text-sm font-normal  leading-[21px]">
                    <img src="/src/assets/icons/timezone.svg" alt="UTC+3" className="w-4 h-4" />
                    {voting.timezone}
                </div>
            </div>

            <div className="flex gap-[68px] items-start flex-grow">
                <div className="flex flex-col gap-2 h-[44px] w-[393px]">
                    <div className={`h-8 p-[10px] rounded-lg h-full w-full flex items-center gap-2 ${statusBg}`}>
                        <img src={statusIcon} alt={statusText} className="w-5 h-5" />
                        <div className={`text-sm font-semibold font-supermolotDB leading-[21px] ${statusTextColor}`}>
                            {statusText}
                        </div>
                    </div>
                </div>

                <div className="flex gap-[50px]">
                    {/* Даты регистрации */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-600 text-base ">Начало регистрации</div>
                            <div className="flex items-center gap-2 text-neutral-800 text-base font-semibold font-supermolotDB">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-5 h-5" />
                                {voting.registrationStart.date}
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-5 h-5" />
                                {voting.registrationStart.time}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-600 text-base font-normal  leading-normal">
                                Окончание регистрации
                            </div>
                            <div className="flex items-center gap-2 text-neutral-800 text-base font-semibold font-supermolotDB leading-normal">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-5 h-5" />
                                {voting.registrationEnd.date}
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-5 h-5" />
                                {voting.registrationEnd.time}
                            </div>
                        </div>
                    </div>

                    {/* Даты голосования */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-600 text-base font-normal  leading-normal">
                                Начало голосования
                            </div>
                            <div className="flex items-center gap-2 text-neutral-800 text-base font-semibold font-supermolotDB leading-normal">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-5 h-5" />
                                {voting.votingStart.date}
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-5 h-5" />
                                {voting.votingStart.time}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-600 text-base font-normal  leading-normal">
                                Окончание голосования
                            </div>
                            <div className="flex items-center gap-2 text-neutral-800 text-base font-semibold font-supermolotDB leading-normal">
                                <img src="/src/assets/icons/calendar.svg" alt="Date" className="w-5 h-5" />
                                {voting.votingEnd.date}
                                <img src="/src/assets/icons/clock.svg" alt="Time" className="w-5 h-5" />
                                {voting.votingEnd.time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-[10px]">
                <Link to='/detali0' >
                <img src="/src/assets/icons/details.svg" alt="Edit" className="w-[36px] h-[36px] cursor-pointer" />
                </Link>
                <img src="/src/assets/icons/delete.svg" alt="Delete" className="w-[36px] h-[36px] cursor-pointer" />
            </div>
        </div>
    );
};

export default VotingCard;