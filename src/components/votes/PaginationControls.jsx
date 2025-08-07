// src/components/PaginationControls.jsx
import React from 'react';

const PaginationControls = ({currentPage, totalPages, hasNext, hasPrev, onNextPage, onPrevPage}) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-[#CCCCCC] gap-2 px-5 py-4">
                <div className="text-neutral-600 text-base ">Показывать</div>
                <div className="border-neutral-400 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-800 text-base font-supermolotDB">5</div>
                    <div className="w-2.5 h-2.5 bg-stone-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex items-center rounded-lg border border-[#CCCCCC] px-5 py-4">
                <div className="text-neutral-800 text-base font-normal ">{currentPage} из {totalPages}</div>
                <button
                 onClick={onPrevPage}
                 disabled={!hasPrev}
                 className={`rounded-lg flex items-center justify-center cursor-pointer ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`} >
                    <img src="/src/assets/icons/arrow-left.svg" alt="Previous" className="w-5 h-5" />
                </button>


                <button
                onClick={onNextPage}
                disabled={!hasNext}
                className={`rounded-lg flex items-center justify-center cursor-pointer ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <img src="/src/assets/icons/arrow-right.svg" alt="Next" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default PaginationControls;