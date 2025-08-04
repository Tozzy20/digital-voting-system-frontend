const Button = ({ children, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`px-5 py-4 rounded-lg flex items-center gap-2.5 
                       font-semibold font-supermolotDB leading-normal
                      ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;