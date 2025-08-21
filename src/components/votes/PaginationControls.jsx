import React from 'react';

const PaginationControls = ({currentPage, totalPages, hasNext, hasPrev, onNextPage, onPrevPage}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center rounded-lg border border-[#CCCCCC] gap-2 px-3 py-2 sm:px-5 sm:py-4 w-full sm:w-auto">
                <div className="text-neutral-600 text-sm sm:text-base">Показывать</div>
                <div className="border-neutral-400 justify-center items-center gap-2 flex">
                    <div className="text-neutral-800 text-sm sm:text-base font-supermolotDB">5</div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-stone-300 rounded-full"></div>
                </div>
            </div>
            <div className="flex items-center rounded-lg border md:w-42 border-[#CCCCCC] px-3 py-2 sm:px-5 sm:py-4 w-full sm:w-auto justify-between">
                <div className="text-neutral-800 text-sm sm:text-base font-normal whitespace-nowrap">
                    {currentPage} из {totalPages}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onPrevPage}
                        disabled={!hasPrev}
                        className={`rounded-lg flex items-center justify-center cursor-pointer ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <img 
                            src="/src/assets/icons/arrow-left.svg" 
                            alt="Previous" 
                            className="w-4 h-4 sm:w-5 sm:h-5" 
                        />
                    </button>
    
                    <button
                        onClick={onNextPage}
                        disabled={!hasNext}
                        className={`rounded-lg flex items-center justify-center cursor-pointer ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <img 
                            src="/src/assets/icons/arrow-right.svg" 
                            alt="Next" 
                            className="w-4 h-4 sm:w-5 sm:h-5" 
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationControls;