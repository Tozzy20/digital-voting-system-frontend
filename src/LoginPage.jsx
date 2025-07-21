import { Link } from 'react-router-dom';
import HeaderLogin from './layouts/HeaderLogin';

const LoginPage = () => {
    return (
        <div className="bg-[#EFF3F8] font-supermolot">
            <HeaderLogin />

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100">
                {/* Заголовок */}
                <h1 className="text-[40px] mb-6 w-[264px] h-[48px] font-mak">Авторизация</h1>

                {/* Форма */}
                <div className="flex bg-white w-[816px] h-[500px] shadow-lg rounded-[20px] overflow-hidden">
                    <div className="px-[32px] py-6 w-[467px] grow">

                        <label className="block mb-2 text-base">Войти как</label>
                        <select className="w-full border rounded-[8px] px-3 py-2 mb-4">
                            <option value="specter">Наблюдатель</option>
                            <option value="user">Сотрудник</option>
                            <option value="admin">Член счетной комиссии</option>
                            <option value="secretary">Организатор</option>
                        </select>

                        <label className="block mb-2 text-base">Электронная почта</label>
                        <input
                            type="email"
                            placeholder="ivanovivan@mail.ru"
                            className="w-full border rounded-[8px] px-3 py-2 mb-4"
                        />

                        <label className="block mb-2 text-base">Пароль</label>
                        <input
                            type="password"
                            placeholder="ABC123!"
                            className="w-full border rounded-[8px] px-3 py-2 mb-2"
                        />

                        <div className="flex flex-col justify-between text-sm mb-4">
                            <a href="#" className="text-gray-500">
                                Забыли пароль?
                            </a>
                            <label className="flex text-base my-[24px]">
                                <input type="checkbox" className="mr-2" /> Запомнить меня
                            </label>
                        </div>

                        <button className="w-full bg-black font-supermolot text-white px-[20px] py-[16px] rounded-[12px] my-8">
                            Войти
                        </button>
                    </div>

                    {/* Правая панель */}
                    <div className="bg-[#212121] rounded-[20px] text-white p-6 w-[285px] h-[500px] flex flex-col justify-between">
                        <div className="flex justify-end mb-4">
                            <button className="bg-[#303030] mr-[10px] p-[10px] rounded-lg">RU</button>
                            <button>ENG</button>
                        </div>

                        <div className="justify-between">
                            <span className="text-sm w-[245px] h-[57px]">
                                Панель управления системой электронных голосований
                            </span>
                            <div className="w-full h-[20px]"></div> {/*Разделитель*/}
                            <Link to="/register" className="block border border-white text-center rounded-xl px-[20px] py-[16px] w-full">
                                Регистрация
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;