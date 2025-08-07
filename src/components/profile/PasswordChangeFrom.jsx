import { useState } from 'react';
import { changePassword } from "../../services/api";
import { useAuth } from '/src/context/AuthProvider.jsx'


const PasswordChangeForm = () => {

    const { authToken } = useAuth();

    const [password, setPassword] = useState({
        old_password: '',
        new_password: '',
        confirm_new_password: '',
    });

    const [message, setMessage] = useState('');
    const [isSaving, setIsSaving] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword(prevPasswords => ({
            ...prevPasswords,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (password.new_password !== password.confirm_new_password) {
            console.log('Новый пароль и его подтверждение не совпадают.');
            return;
        }

        if (!authToken) {
            console.log('Ошибка: Пользователь не авторизован.');
            return;
        }

        setIsSaving(true);
        try {
            const dataToSend = {
                old_password: password.old_password,
                new_password: password.new_password,
            };

            await changePassword(authToken, dataToSend);

            console.log("Пароль успешно изменен!");
            setPassword({
                old_password: '',
                new_password: '',
                confirm_new_password: '',
            });
        }
        catch (error) {
            console.error('Ошибка при сохранении данных:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className=" shadow-lg bg-white rounded-[20px] w-[473px]">
            <div className="p-[32px] space-y-[20px]">
                <h1 className="text-neutral-800 text-2xl font-semibold">Пароль</h1>

                {/* Пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="old_password"
                        name="old_password"
                        value={password.old_password}
                        onChange={handleChange}
                        placeholder="hiown9823u0n"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Новый пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Новый_пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Новый пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="new_password"
                        name="new_password"
                        value={password.new_password}
                        onChange={handleChange}
                        placeholder="******************"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Подтвердить новый пароль */}
                <div className="flex flex-col gap-[10px]">
                    <label
                        htmlFor="Подтвердить_пароль"
                        className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                    >
                        Подтвердите новый пароль
                        <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                    </label>
                    <input
                        type="password"
                        id="confirm_new_password"
                        name="confirm_new_password"
                        value={password.confirm_new_password}
                        onChange={handleChange}
                        placeholder="******************"
                        className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                type="submit"
                    className="w-full h-[51px] bg-[#437DE9] rounded-lg flex items-center justify-center gap-2.5 text-white text-base font-semibold"
                >
                    <img src="/src/assets/icons/cloud.svg" alt="" />
                    Сохранить изменения
                </button>
            </div>
        </form>
    );
};

export default PasswordChangeForm