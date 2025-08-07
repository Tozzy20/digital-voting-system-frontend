// src/components/SearchInput.jsx
import React from 'react';

const SearchInput = () => {
    return (
        <div className="px-[20px] py-[16px] rounded-lg border border-[#CCCCCC] flex items-center gap-2.5">
            <img src="/src/assets/icons/searchBlack.svg" alt="" />
            <input
                type="text"
                placeholder="Поиск по таблице"
                className="outline-none text-black text-base font-normal  w-full"
            />
        </div>
    );
};

export default SearchInput;