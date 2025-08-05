import { useState, useEffect } from "react";
import { useAuth } from '/src/context/AuthProvider.jsx'
import { getProfileData, updateProfileData } from '/src/services/api.js'

const PersonalData = () => {
    const { authToken } = useAuth();

    const [formData, setFormData] = useState({
        last_name: '',
        first_name: '',
        surname: '',
        email: ''
    });

    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // GET-запрос
    useEffect(() => {
        
        if (!authToken) { 
            return;
        }

         const fetchUserProfile = async () => {
            setLoading(true);
            // setError(null); 
            try {
                
                const data = await getProfileData(authToken);
                setFormData(data);
            } catch (error) {
                console.error('Ошибка при получении данных профиля:', error);
                // const errorMessage = error.response?.data?.message || 'Не удалось получить данные профиля';
                // setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [authToken]);

    // Обработчик изменений в полях формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // PUT-запрос
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!authToken) {
            console.error('Ошибка: Токен авторизации не найден.');
            return;
        }

        setIsSaving(true);
        try {
            const updatableData = {
                last_name: formData.last_name,
                first_name: formData.first_name,
                surname: formData.surname,
                email: formData.email
            };

            await updateProfileData(authToken, updatableData);
            console.log('Данные успешно сохранены!');
            
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error.message);
            
        } finally {
            setIsSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center mt-10">Загрузка персональных данных...</div>;
    }


    return (
            <form className="font-supermolotM shadow-lg bg-white rounded-[20px] w-[473px]"
            onSubmit={handleSubmit}>
                <div className="p-[32px] space-y-[20px]">
                    <h1 className="text-neutral-800 text-2xl font-semibold">Персональные данные</h1>
                    
                    {/* Фамилия */}
                    <div className="flex flex-col gap-[10px]">
                        <label
                            htmlFor="Фамилия"
                            className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                        >
                            Фамилия
                            <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Имя */}
                    <div className="flex flex-col gap-[10px]">
                        <label
                            htmlFor="Имя"
                            className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                        >
                            Имя
                            <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Отчество */}
                    <div className="flex flex-col gap-[10px]">
                        <label
                            htmlFor="Отчество"
                            className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                        >
                            Отчество
                            <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="border border-black rounded-lg w-full h-[51px] px-4 py-3 text-base font-normal text-neutral-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Электронная почта */}
                    <div className="flex flex-col mb-6 gap-[10px]">
                        <label
                            htmlFor="Электронная почта"
                            className="text-[#CCCCCC] text-base font-normal mb-1 flex items-center gap-1"
                        >
                            Электронная почта
                            <div className="w-2 h-2 rounded-full border border-stone-300"></div>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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

export default PersonalData;