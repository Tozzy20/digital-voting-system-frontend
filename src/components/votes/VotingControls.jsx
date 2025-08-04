// src/components/VotingControls.jsx
import React from 'react';
import Button from '../Button';

const VotingControls = () => {
    return (
        <>
            
            <Button className="bg-[#5BC25B] text-white">
                <img src="/src/assets/icons/fireWhite.svg" alt="Активные" />
                Активные голосования
            </Button>
            
            <Button className="bg-neutral-100 text-neutral-800">
                <img src="/src/assets/icons/archive.svg" alt="Архивные" />
                Архивные голосования
            </Button>
        </>
    );
};

export default VotingControls;