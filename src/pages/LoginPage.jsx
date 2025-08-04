import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import HeaderLogin from '/src/components/HeaderLogin';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role_id: 1 // Устанавливаем значение по умолчанию, если это необходимо для логики бэкенда
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        let parsedValue = value;
        if (name === 'role_id') {
            // Преобразуем значение в число, если это поле для role_id
            parsedValue = parseInt(value, 10);
        }
        
        setFormData(prevState => ({
            ...prevState,
            [name]: parsedValue // Используем преобразованное значение
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        // Формируем данные для отправки на сервер
        const dataToSend = {
            email: formData.email,
            password: formData.password,
            role_id: formData.role_id
        };

        try {
            const response = await fetch('http://192.168.31.241:8000/api/auth/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const data = await response.json();

            if (response.ok) {
                
                setMessage('Авторизация прошла успешно!');
                
                if (data.access_token) {
                    localStorage.setItem('access_token', data.access_token);
                
                
                // Перенаправление на защищенную страницу
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            
                } else setMessage('Авторизация прошла успешно, но токен не был получен.');

            } else {
                setMessage(data.message || 'Ошибка авторизации. Проверьте email и пароль.');
            }

        } catch (error) {
            console.error('Ошибка:', error);
            setMessage('Не удалось подключиться к серверу.');
        }
    };


    return (
        <div className="bg-[#EFF3F8] font-supermolot">
            <HeaderLogin />

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100">

                <h1 className="text-[40px] mb-6 w-[264px] h-[48px] font-mak">Авторизация</h1>

                <div className="flex bg-white w-[816px] h-[500px] shadow-lg rounded-[20px] overflow-hidden">
                    <div className="px-[32px] py-6 w-[467px] grow">
                        <form onSubmit={handleSubmit}> {/* Добавляем обработчик на форму */}

                            <label className="block mb-2 text-base">Войти как</label>
                            <select
                                className="w-full border rounded-[8px] px-3 py-2 mb-4"
                                name="role_id"
                                value={formData.role_id}
                                onChange={handleChange}
                            >
                                <option value={1}>Сотрудник</option>
                                <option value={2}>Начальник</option>
                                <option value={3}>Администратор</option>
                            </select>

                            <label className="block mb-2 text-base">Электронная почта</label>
                            <input
                                type="email"
                                name="email" // Добавляем name
                                placeholder="ivanovivan@mail.ru"
                                className="w-full border rounded-[8px] px-3 py-2 mb-4"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <label className="block mb-2 text-base">Пароль</label>
                            <input
                                type="password"
                                name="password" // Добавляем name
                                placeholder="******"
                                className="w-full border rounded-[8px] px-3 py-2 mb-2"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <div className="flex flex-col justify-between text-sm mb-4">
                                <a href="#" className="text-gray-500">
                                    Забыли пароль?
                                </a>
                                <label className="flex text-base my-[24px]">
                                    <input type="checkbox" className="mr-2" /> Запомнить меня
                                </label>
                            </div>
                            
                            {message && <p className="text-red-500 text-sm mt-2">{message}</p>}

                            <button type="submit" className="w-full bg-black font-supermolot text-white px-[20px] py-[16px] rounded-[12px] my-8">
                                Войти
                            </button>
                        </form>
                    </div>

                    <div className="bg-[#212121] rounded-[20px] text-white p-6 w-[285px] h-[500px] flex flex-col justify-between">
                        <div className="flex justify-end mb-4">
                            <button className="bg-[#303030] mr-[10px] p-[10px] rounded-lg">RU</button>
                            <button>ENG</button>
                        </div>

                        <div className="justify-between">
                            <span className="text-sm w-[245px] h-[57px]">
                                Панель управления системой электронных голосований
                            </span>
                            <div className="w-full h-[20px]"></div>
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