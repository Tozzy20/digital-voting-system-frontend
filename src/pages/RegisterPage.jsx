import HeaderLogin from "/src/components/HeaderLogin";
import { Link } from 'react-router-dom';


const RegisterPage = () => {
    return (
        <>
        <HeaderLogin />

            <div className="flex flex-col items-center font-supermolot justify-center min-h-[calc(100vh-100px)] bg-gray-100">
                {/* Заголовок */}
                <h1 className="text-[40px] mb-6 w-[264px] h-[48px] font-mak">Регистрация</h1>
                
                <div className="flex bg-white w-[816px] h-[500px] shadow-lg rounded-[20px] overflow-hidden">
                    {/* Левая панель */}
                    <div className="bg-[#212121] rounded-[20px] text-white p-6 w-[285px] h-[500px] flex flex-col justify-between">
                        <div className="flex mb-4">
                            <button className="bg-[#303030] mr-[10px] p-[10px] rounded-lg">RU</button>
                            <button>ENG</button>
                        </div>

                        <div className="justify-between">
                            <span className="text-sm w-[245px] h-[57px]">
                                Панель управления системой электронных голосований
                            </span>
                            <div className="w-full h-[20px]"></div> {/*Разделитель*/}
                            <Link to="/" className="block border border-white text-center rounded-xl px-[20px] py-[16px] w-full">
                                Авторизация
                            </Link>
                        </div>
                    </div>

                    {/* Форма */}
                    <div className="px-[32px] py-6 w-[467px] grow"> 
                        <div className="flex mb-4 gap-[12px]">

                            <div className="flex flex-col">
                                <label for="Фамилия" className="mb-1">Фамилия</label>
                                <input type="text" id="Фамилия" placeholder="Иванов" className="border rounded-[8px] w-[150px] h-[51px] px-3 py-2" />
                            </div>

                            <div className="flex flex-col">
                                <label for="Имя" className="mb-1">Имя</label>
                                <input type="text" id="Имя" placeholder="Иван" className="border rounded-[8px] w-[115px] h-[51px] px-3 py-2" />
                            </div>

                            <div className="flex flex-col">
                                <label for="Отчество" className="mb-1">Отчество</label>
                                <input type="text" id="Отчество" placeholder="Иванович" className="border rounded-[8px] w-[178px] h-[51px] px-3 py-2" />
                            </div>

                        </div>

                        

                        <label className="block mb-2 text-base">Электронная почта</label>
                        <input
                            type="email"
                            placeholder="ivanovivan@mail.ru"
                            className="w-full border h-[51px] rounded-[8px] px-3 py-2 mb-4"
                        />

                        <label className="block mb-2 text-base">Повторите пароль</label>
                        <input
                            type="password"
                            placeholder="******"
                            className="w-full border h-[51px] rounded-[8px] px-3 py-2 mb-2"
                        />

                        <label className="block mb-2 text-base">Повторите пароль</label>
                        <input
                            type="password"
                            placeholder="ABC123!"
                            className="w-full border h-[51px] rounded-[8px] px-3 py-2 mb-2"
                        />

                        <button className="w-full bg-black font-supermolot text-white px-[20px] py-[16px] rounded-[12px] my-5">
                            Зарегистрироваться
                        </button>
                    </div>

                </div>
            </div>



        </>
    );
};

export default RegisterPage;