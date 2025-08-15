import React from 'react';
import Button from '../Button';

const VotingControls = () => {
    return (
        <>
            <Button className="bg-[#5BC25B] text-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">
                <img src="/src/assets/icons/fireWhite.svg" alt="Активные" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline sm:hidden xs:hidden sm:inline">Активные голосования</span>
            </Button>
            
            <Button className="bg-neutral-100 text-neutral-800 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base">
                <img src="/src/assets/icons/archive.svg" alt="Архивные" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline sm:hidden xs:hidden sm:inline">Архивные голосования</span>
            </Button>
        </>
    );
};

export default VotingControls;