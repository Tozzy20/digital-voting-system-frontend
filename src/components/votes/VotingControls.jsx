import React from 'react';
import Button from '../Button';

const VotingControls = () => {
    return (
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center sm:justify-start">
            <Button className="bg-[#5BC25B] text-white px-3 py-2 text-sm md:text-base flex items-center justify-center gap-2 whitespace-nowrap">
                <img src="/src/assets/icons/fireWhite.svg" alt="Активные" className="w-4 h-4" />
                <span>Активные голосования</span>
            </Button>
            
            <Button className="bg-neutral-100 text-neutral-800 px-3 py-2 text-sm md:text-base flex items-center justify-center gap-2 whitespace-nowrap">
                <img src="/src/assets/icons/archive.svg" alt="Архивные" className="w-4 h-4" />
                <span>Архивные голосования</span>
            </Button>
        </div>
    );
};

export default VotingControls;