import React, { useState } from 'react';
import StepHeader from '/src/components/constructor/CreateVoting/StepHeader';
import InputField from '/src/components/constructor/CreateVoting/InputField';
import DateTimePicker from '/src/components/constructor/CreateVoting/DateTimePicker';
import QuestionForm from '/src/components/constructor/CreateVoting/QuestionForm';
import AddQuestionButton from '/src/components/constructor/CreateVoting/AddQuestionButton';
import { useAuth }  from '../../context/AuthProvider';


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
      type: 'single_choice',
      header: 'Пример вопроса',
      options: ['Вариант 1', 'Вариант 2']
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
      { id: newId, type: 'single_choice', header: '', options: [''] }
    ]);
  };

  // Функция для объединения даты и времени в ISO-формат
const combineDateTime = (date, time) => {

  const dateTimeString = `${date}T${time}:00`;
  return new Date(dateTimeString).toISOString().slice(0, 19).replace('T', ' ');
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
      department_ids: [0] // Замените на реальные ID, если есть выбор групп
    };
  
    try {
      const response = await fetch('http://192.168.31.241:8000/api/votings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Успех:', result);
      alert('Голосование успешно отправлено на сервер!');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Не удалось отправить данные. Проверьте подключение или попробуйте позже.');
    }
  };

  // --- JSX ---
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-lg font-supermolot">
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
        className="mt-1 p-2 border border-gray-300 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Выберите условие...</option>
        <option value="50_plus_1">50% + 1</option>
        <option value="two_thirds">2/3 голосов</option>
        <option value="unanimous">Единогласно</option>
      </select>

      <InputField
        label="Группа пользователей"
        value={groupText1}
        onChange={handleGroupChange}
        placeholder="Группа выбрана"
      />

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
      <div className="mt-6 flex space-x-4">
        <button
          onClick={sendToServer}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.59961 11.923C11.6722 2.46869 17.9886 2.35967 20.5127 3.48695C21.64 6.01105 21.531 12.3274 12.0767 17.4C11.9786 16.8364 11.4334 15.3599 10.0365 13.9631C8.63973 12.5663 7.16325 12.021 6.59961 11.923Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3496 16.95C15.1881 17.85 15.3844 19.4638 15.6391 21C15.6391 21 19.4897 18.1535 17.0266 14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.04996 10.7265C6.14996 8.88795 4.53615 8.69166 3 8.43697C3 8.43697 5.8465 4.58633 9.74997 7.04944" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.01808 14.912C5.50625 15.4238 4.63613 16.9081 5.25033 18.7507C7.09293 19.3649 8.57725 18.4948 9.08909 17.983" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3008 8.44922C17.3008 7.48272 16.5173 6.69922 15.5508 6.69922C14.5843 6.69922 13.8008 7.48272 13.8008 8.44922C13.8008 9.41572 14.5843 10.1992 15.5508 10.1992C16.5173 10.1992 17.3008 9.41572 17.3008 8.44922Z" stroke="white" stroke-width="1.5"/>
</svg>
          <span>Запустить голосование</span>
        </button>

        <button
          onClick={sendToServer}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-50 transition"
        >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z" stroke="#437DE9" stroke-width="1.5"/>
<path d="M8.5 11.5L14.5001 11.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 15H13.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 8H15.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <span>Сохранить шаблон</span>
        </button>
      </div>
    </div>
  );
};

export default CreateVoting;