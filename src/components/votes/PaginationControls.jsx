// src/components/PaginationControls.jsx
import React from 'react';

const PaginationControls = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-[#CCCCCC] gap-2 px-5 py-4">
                <div className="text-neutral-600 text-base font-supermolot">Показывать</div>
                <div className="border-neutral-400 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-800 text-base font-supermolotDB">25</div>
                    <div className="w-2.5 h-2.5 bg-stone-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex items-center rounded-lg border border-[#CCCCCC] px-5 py-4">
                <div className="text-neutral-800 text-base font-normal font-supermolot">1-10 из 100</div>
                <div className="rounded-lg flex items-center justify-center cursor-pointer">
                    <img src="/src/assets/icons/arrow-left.svg" alt="Previous" className="w-5 h-5" />
                </div>
                <div className="rounded-lg flex items-center justify-center cursor-pointer">
                    <img src="/src/assets/icons/arrow-right.svg" alt="Next" className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default PaginationControls;