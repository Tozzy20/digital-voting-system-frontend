const SearchInput = ({value, onChange, onSearch}) => {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };
    
    return (
        <div className="px-[20px] py-[16px] rounded-lg border border-[#CCCCCC] flex items-center gap-2.5">
            <img src="/src/assets/icons/searchBlack.svg" alt="" />
            <input
                type="text"
                placeholder="Поиск по таблице"
                className="outline-none text-black text-base font-normal  w-full"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
 











export default SearchInput;