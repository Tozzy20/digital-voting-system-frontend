const SearchInput = ({value, onChange, onSearch}) => {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };
    
    return (
        <div className="px-3 py-2 sm:px-[20px] sm:py-[16px] rounded-lg border border-[#CCCCCC] flex items-center gap-2">
            <img 
                src="/src/assets/icons/searchBlack.svg" 
                alt="" 
                className="w-4 h-4 sm:w-auto sm:h-auto"
            />
            <input
                type="text"
                placeholder="Поиск по таблице"
                className="outline-none text-black text-sm sm:text-base font-normal w-full"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchInput;