import React, { useState, useEffect } from 'react';
import StepHeader from '/src/components/constructor/CreateVoting/StepHeader';
import InputField from '/src/components/constructor/CreateVoting/InputField';
import DateTimePicker from '/src/components/constructor/CreateVoting/DateTimePicker';
import QuestionForm from '/src/components/constructor/CreateVoting/QuestionForm';
import AddQuestionButton from '/src/components/constructor/CreateVoting/AddQuestionButton';
import { useAuth } from '../../context/AuthProvider';
import { createVoting } from '../../services/api'
import { toast, ToastContainer } from 'react-toastify';
import { CiViewList } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";




const CreateVoting = () => {
  const [votingTitle, setVotingTitle] = useState('');
  const [groupText1, setGroupText1] = useState('');
  const [registrationStart, setRegistrationStart] = useState({ date: '2025-07-06', time: '10:00' });
  const [registrationEnd, setRegistrationEnd] = useState({ date: '2025-07-06', time: '10:00' });
  const [votingStart, setVotingStart] = useState({ date: '2025-07-06', time: '10:00' });
  const [votingEnd, setVotingEnd] = useState({ date: '2025-07-06', time: '10:00' });

  const { authToken } = useAuth();

  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: '',
      header: '',
      options: ['', '']
    }
  ]);

  const [quorumCondition, setQuorumCondition] = useState('');

  // --- Обработчики изменений ---
  const handleQuorumChange = (e) => {
    setQuorumCondition(e.target.value);
  };

  const handleVotingTitleChange = (e) => {
    setVotingTitle(e.target.value);
  };

  const handleGroupChange = (e) => {
    setGroupText1(e.target.value);
  };

  const handleRegistrationStartDateChange = (newDate) => {
    setRegistrationStart(prev => ({ ...prev, date: newDate }));
  };
  const handleRegistrationStartTimeChange = (newTime) => {
    setRegistrationStart(prev => ({ ...prev, time: newTime }));
  };

  const handleRegistrationEndDateChange = (newDate) => {
    setRegistrationEnd(prev => ({ ...prev, date: newDate }));
  };
  const handleRegistrationEndTimeChange = (newTime) => {
    setRegistrationEnd(prev => ({ ...prev, time: newTime }));
  };

  const handleVotingStartDateChange = (newDate) => {
    setVotingStart(prev => ({ ...prev, date: newDate }));
  };
  const handleVotingStartTimeChange = (newTime) => {
    setVotingStart(prev => ({ ...prev, time: newTime }));
  };

  const handleVotingEndDateChange = (newDate) => {
    setVotingEnd(prev => ({ ...prev, date: newDate }));
  };
  const handleVotingEndTimeChange = (newTime) => {
    setVotingEnd(prev => ({ ...prev, time: newTime }));
  };

  const handleQuestionTypeChange = (questionId, newType) => {
    setQuestions(prev =>
      prev.map(q => (q.id === questionId ? { ...q, type: newType } : q))
    );
  };

  const handleQuestionHeaderChange = (questionId, newHeader) => {
    setQuestions(prev =>
      prev.map(q => (q.id === questionId ? { ...q, header: newHeader } : q))
    );
  };

  const handleQuestionOptionsChange = (questionId, newOptions) => {
    setQuestions(prev =>
      prev.map(q => (q.id === questionId ? { ...q, options: newOptions } : q))
    );
  };

  const addNewQuestion = () => {
    const newId = Math.max(0, ...questions.map(q => q.id)) + 1;
    setQuestions(prev => [
      ...prev,
      { id: newId, type: '', header: '', options: [''] }
    ]);
  };

  const [departments, setDepartments] = useState([]); // Список загруженных департаментов
  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]); // ID выбранных департаментов
  const [isLoadingDepartments, setIsLoadingDepartments] = useState(false);
  const [hasMoreDepartments, setHasMoreDepartments] = useState(true); // Есть ли еще страницы
  const [page, setPage] = useState(1); // Номер текущей страницы для пагинации
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Управление открытием/закрытием выпадающего списка

    // --- ОБРАБОТЧИК ДЛЯ ДЕПАРТАМЕНТОВ ---
    const handleDepartmentChange = (departmentId) => {
      setSelectedDepartmentIds(prevIds =>
        prevIds.includes(departmentId)
          ? prevIds.filter(id => id !== departmentId) // Удалить, если уже выбран
          : [...prevIds, departmentId] // Добавить, если не выбран
      );
    };
  
    // --- ФУНКЦИЯ ДЛЯ ЗАГРУЗКИ ДЕПАРТАМЕНТОВ ---
    const fetchDepartments = async (pageNum = 1, reset = false) => {
      if (isLoadingDepartments && !reset) return; // Не загружать, если уже идет загрузка
  
      setIsLoadingDepartments(true);
      try {
        const response = await fetch(`http://192.168.31.241:8000/api/departments/?page=${pageNum}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
           if (response.status === 401) {
             throw new Error('Ошибка авторизации при загрузке департаментов');
           } else {
             throw new Error(`Ошибка загрузки департаментов: ${response.status}`);
           }
        }
  
        const data = await response.json();
        
        const newHasMore = data.pagination.has_next !== null; 
        setHasMoreDepartments(newHasMore);
  
        const allDepts =  reset ? data.items : [...departments, ...data.items];

        const uniqueDeptsMap = new Map();
        allDepts.forEach(dept => {
          if (dept && dept.id) {
            uniqueDeptsMap.set(dept.id, dept);
          }
        });
        
        // Преобразуем Map обратно в массив.
        setDepartments(Array.from(uniqueDeptsMap.values()));

      } catch (error) {
        console.error('Ошибка при загрузке департаментов:', error);
        //alert(`Не удалось загрузить департаменты: ${error.message}`);
      } finally {
        setIsLoadingDepartments(false);
      }
    };
  
    // --- Загрузка первой страницы при монтировании ---
    useEffect(() => {
      fetchDepartments(1, true); 
    }, []); 
  
    const handleLoadMore = () => {
      if (hasMoreDepartments && !isLoadingDepartments) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchDepartments(nextPage);
      }
    };

  // Функция для объединения даты и времени в ISO-формат
const combineDateTime = (date, time) => {

  const dateTimeString = `${date}T${time}:00.000Z`;

  const utcDate = new Date(dateTimeString);

  const year = utcDate.getUTCFullYear();
  const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = utcDate.getUTCDate().toString().padStart(2, '0');
  const hours = utcDate.getUTCHours().toString().padStart(2, '0');
  const minutes = utcDate.getUTCMinutes().toString().padStart(2, '0');
  const seconds = utcDate.getUTCSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

  const sendToServer = async () => {
    const data = {
      title: votingTitle || 'Без названия',
      theme: 'string',
      public: true,
      quorum: quorumCondition === '50_plus_1' ? 50 : quorumCondition === 'two_thirds' ? 66 : 0,
      registration_start: combineDateTime(registrationStart.date, registrationStart.time),
      registration_end: combineDateTime(registrationEnd.date, registrationEnd.time),
      voting_start: combineDateTime(votingStart.date, votingStart.time),
      voting_end: combineDateTime(votingEnd.date, votingEnd.time),
      questions: questions.map(q => ({
        type: q.type || 'single_choice',
        title: q.header || 'Без названия',
        options: q.options
          .filter(opt => opt.trim() !== '')
          .map(opt => ({ option: opt.trim() }))
      })),
      department_ids: selectedDepartmentIds // Используем выбранные ID департаментов
    };
  
    try {
      const result = await createVoting(data, authToken);
      toast.success("Успех");
      //alert('Голосование успешно отправлено на сервер!');
    } catch (error) {
      console.error('Ошибка отправки:', error);
     // alert('Не удалось отправить данные. Проверьте подключение или попробуйте позже.');
    }
  };

  // --- JSX ---
  return (
    <>
    <ToastContainer />
    <div className="bg-white p-6 rounded-[20px] shadow-lg ">
      <StepHeader stepNumber={1} title="Настройки" />

      <InputField
        label="Название голосования"
        value={votingTitle}
        onChange={handleVotingTitleChange}
        placeholder="Введите название"
      />

      {/* Условие кворума */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Условие кворума
      </label>
      <select
        value={quorumCondition}
        onChange={handleQuorumChange}
        className="my-1 p-2 py-[20px] border border-gray-300 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Выберите условие...</option>
        <option value="50_plus_1">50% + 1</option>
        <option value="two_thirds">2/3 голосов</option>
        <option value="unanimous">Единогласно</option>
      </select>

      <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">
        Группа пользователей
      </label>
      <div className="relative">
        {/* Кастомный селект/выпадающий список */}
        <div
          className="mt-1 mb-1 p-4 border border-gray-300 rounded-lg text-gray-500 w-full bg-white focus:outline-none focus:ring-2 focus:ring-grey-500 cursor-pointer flex justify-between items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Переключение открытия
        >
          <span>
            {Array.isArray(selectedDepartmentIds) && selectedDepartmentIds.length > 0
              ? `${selectedDepartmentIds.length} выбрано`
              : 'Выберите группы...'}
          </span>
          <svg className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* Выпадающий список */}
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {/* Список департаментов */}
            {departments.length > 0 ? (
              departments.map(dept => (
                <div
                  key={dept.id}
                  className="p-3 hover:bg-gray-100 flex items-center"
                >
                  <input
                    type="checkbox"
                    id={`dept-${dept.id}`}
                    checked={selectedDepartmentIds.includes(dept.id)}
                    onChange={() => handleDepartmentChange(dept.id)}
                    className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`dept-${dept.id}`} className="cursor-pointer flex-1">
                    {dept.name}
                    {/* Если нужно отобразить поддепартаменты, можно добавить здесь логику рекурсии или отступы */}
                    {/* Например, если dept.children && dept.children.length > 0 */}
                  </label>
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500">Нет доступных групп.</div>
            )}

            {/* Индикатор загрузки */}
            {isLoadingDepartments && (
              <div className="p-3 text-center text-gray-500">Загрузка...</div>
            )}

            {/* Кнопка "Загрузить еще" */}
            {hasMoreDepartments && !isLoadingDepartments && (
              <button
                onClick={handleLoadMore}
                className="w-full p-3 text-center text-blue-500 hover:bg-gray-50 border-t border-gray-200"
                disabled={isLoadingDepartments}
              >
                Загрузить еще
              </button>
            )}
          </div>
        )}
      </div>

      {/* Даты и время */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
        <DateTimePicker
          label="Начало регистрации"
          initialDate={registrationStart.date}
          initialTime={registrationStart.time}
          onDateChange={handleRegistrationStartDateChange}
          onTimeChange={handleRegistrationStartTimeChange}
        />
        <DateTimePicker
          label="Окончание регистрации"
          initialDate={registrationEnd.date}
          initialTime={registrationEnd.time}
          onDateChange={handleRegistrationEndDateChange}
          onTimeChange={handleRegistrationEndTimeChange}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
        <DateTimePicker
          label="Начало голосования"
          initialDate={votingStart.date}
          initialTime={votingStart.time}
          onDateChange={handleVotingStartDateChange}
          onTimeChange={handleVotingStartTimeChange}
        />
        <DateTimePicker
          label="Окончание голосования"
          initialDate={votingEnd.date}
          initialTime={votingEnd.time}
          onDateChange={handleVotingEndDateChange}
          onTimeChange={handleVotingEndTimeChange}
        />
      </div>

      <div className='mt-6'></div>
      <StepHeader stepNumber={2} title="Вопросы" />

      {questions.map((question) => (
        <QuestionForm
          key={question.id}
          questionNumber={question.id}
          initialType={question.type}
          initialHeader={question.header}
          initialOptions={question.options}
          onTypeChange={(newType) => handleQuestionTypeChange(question.id, newType)}
          onHeaderChange={(newHeader) => handleQuestionHeaderChange(question.id, newHeader)}
          onOptionsChange={(newOptions) => handleQuestionOptionsChange(question.id, newOptions)}
        />
      ))}

      <AddQuestionButton onClick={addNewQuestion} />

      {/* Кнопки управления */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button
    onClick={sendToServer}
    className="w-full sm:w-auto bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base"
  >
    <MdOutlineRocketLaunch size={24} />
    <span>Запустить голосование</span>
  </button>

  <button
    onClick={sendToServer}
    className="w-full sm:w-auto border border-blue-500 text-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center justify-center sm:justify-start space-x-2 hover:bg-blue-50 transition text-sm sm:text-base"
  >
    <CiViewList size={24} />
    <span>Сохранить шаблон</span>
  </button>
</div>
    </div>
    </>
  );
};

export default CreateVoting;