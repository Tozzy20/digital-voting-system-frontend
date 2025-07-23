const HeaderLogin = () => {
    return (
        <header className="bg-[#212121] text-white font-supermolot shadow-lg h-[100px]">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        {/* logo */}
                        <div className="flex">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="32" fill="#CCCCCC" />
                            </svg>
                        </div>
                        <a href="#" className="py-2 px-3 text-white text-base leading-normal">
                            Главная
                        </a>
                        <a href="#" className="py-2 px-3">
                            Голосования
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="">Авторизация</span>
                        {/* icon profile */}
                        <a href="#">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.0013" cy="14.9993" r="13.3333" stroke="white" strokeWidth="2" />
                                <path
                                    d="M9 21.6673C12.1089 18.4111 17.8576 18.2578 21 21.6673M18.3268 11.6673C18.3268 13.5083 16.8323 15.0007 14.9887 15.0007C13.1451 15.0007 11.6506 13.5083 11.6506 11.6673C11.6506 9.82637 13.1451 8.33398 14.9887 8.33398C16.8323 8.33398 18.3268 9.82637 18.3268 11.6673Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
    );
};

export default HeaderLogin;