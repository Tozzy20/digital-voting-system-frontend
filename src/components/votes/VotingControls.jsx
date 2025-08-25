import React from 'react';
import Button from '../Button';
import { PiBooksLight } from "react-icons/pi";
import { LiaFireAltSolid } from "react-icons/lia";

const VotingControls = () => {
    return (
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center sm:justify-start">
            <Button className="bg-[#5BC25B] text-white px-3 py-2 text-sm md:text-base flex items-center justify-center gap-2 whitespace-nowrap">
                <LiaFireAltSolid size={32}/>
                <span>Активные голосования</span>
            </Button>
            
            <Button className="bg-neutral-100 text-neutral-800 px-3 py-2 text-sm md:text-base flex items-center justify-center gap-2 whitespace-nowrap">
                <PiBooksLight size={32} />
                <span>Архивные голосования</span>
            </Button>
        </div>
    );
};

export default VotingControls;