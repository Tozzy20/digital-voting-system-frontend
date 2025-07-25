import React, {useState} from 'react';
import StepHeader from '/src/components/office/VotingCreateOffice/StepHeader';
import InputField from '/src/components/office/VotingCreateOffice/InputField';
import DateTimePicker from '/src/components/office/VotingCreateOffice/DateTimePicker';
import QuestionForm from '/src/components/office/VotingCreateOffice/QuestionForm';
import AddQuestionButton from '/src/components/office/VotingCreateOffice/AddQuestionButton';

const CreateVoting = () => {
  const handleInputChange = (fieldName) => (event) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: event.target.value
    }));
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
    setVotingnEnd(prev => ({ ...prev, date: newDate }));
  };
  const handleVotingStartTimeChange = (newTime) => {
    setVotingEnd(prev => ({ ...prev, time: newTime }));
  };
  const handleVotingEndDateChange = (newDate) => {
    setVotingEnd(prev => ({ ...prev, date: newDate }));
  };
  const handleVotingEndTimeChange = (newTime) => {
    setVotingEnd(prev => ({ ...prev, time: newTime }));
  };

  const [handleText1, sethandleText1] = useState('');
  const [groupText1, setgroupText1] = useState('');
  const [questionText1, setQuestionText1] = useState('');
  const [questionText2, setQuestionText2] = useState('');
  const [questionText3, setQuestionText3] = useState('');


  const [registrationStart, setRegistrationStart] = useState({ date: '2025-07-06', time: '10:00' });
  const [registrationEnd, setRegistrationEnd] = useState({ date: '2025-07-06', time: '10:00' });
  const [VotingStart, setVotingStart] = useState({ date: '2025-07-06', time: '10:00' });
  const [VotingEnd, setVotingEnd] = useState({ date: '2025-07-06', time: '10:00' });

  const [questions, setQuestions] = useState([
    {
      id: 1, 
      type: 'Произвольный вопрос',
      header: 'Lorem ipsum is simply dummy text of the printing and typesetting',
      options: [
        "Lorem ipsum is simply dummy text of the",
        "Lorem ipsum is simply dummy text of the",
      ]
    },
  ]);
  
  const handleQuestionTypeChange = (questionId, newType) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => q.id === questionId ? { ...q, type: newType } : q)
    );
  };
  
  const handleQuestionHeaderChange = (questionId, newHeader) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => q.id === questionId ? { ...q, header: newHeader } : q)
    );
  };
  
  const handleQuestionOptionsChange = (questionId, newOptions) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => q.id === questionId ? { ...q, options: newOptions } : q)
    );
  };
  
  const addNewQuestion = () => {
    const newQuestionId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;
    const newQuestion = {
      id: newQuestionId,
      type: '',
      header: '',
      options: [''] 
    };
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  return (
    <div className="bg-white p-6 bg-white rounded-[20px] shadow-lg rounded-[20px] font-supermolot">
      <StepHeader stepNumber={1} title="Настройки" />

      <InputField label="Название голосования"
        value={handleText1} 
        onChange={e => sethandleText1(e.target.value)} 
        placeholder="Введите название голосонания"/>

      {/* Условие кварта */}
      <label htmlFor="quorum-select" className="block text-sm font-medium text-gray-700 mb-1">
        Условие кворума
      </label>
      <select
        id="quorum-select"
        className="mt-1 p-2 border border-gray-300 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-black-500"
      >
        {/* Опция по умолчанию, не выбрана */}
        <option value="" disabled selected>Выберите условие...</option>
        <option value="50_plus_1">50% + 1</option>
        <option value="">Вариант 2</option>
        <option value="two_thirds">Вариант 3</option>
      </select>

      {/* Группа пользователей */}
      <InputField label="Группа пользователей"
        value={groupText1} 
        onChange={e => setgroupText1(e.target.value)} 
        placeholder="Группа выбрана"/>

      {/* Даты и время */}
      {/* Группа 1: Регистрация */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
        <DateTimePicker label="Начало регистрации" initialDate={registrationStart.date} initialTime={registrationStart.time} onDateChange={handleRegistrationStartDateChange} onTimeChange={handleRegistrationStartTimeChange} />
        <DateTimePicker label="Окончание регистрации" initialDate={registrationEnd.date} initialTime={registrationEnd.time} onDateChange={(newDate) => setRegistrationEnd(prev => ({ ...prev, date: newDate }))} onTimeChange={(newTime) => setRegistrationEnd(prev => ({ ...prev, time: newTime }))} />
      </div>

      {/* Группа 2: Голосование */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
        <DateTimePicker label="Начало голосования" initialDate={VotingStart.date} initialTime={VotingStart.time} onDateChange={handleVotingStartDateChange} onTimeChange={handleVotingStartTimeChange} />
        <DateTimePicker label="Окончание голосования" initialDate={VotingEnd.date} initialTime={VotingEnd.time} onDateChange={(newDate) => setVotingEnd(prev => ({ ...prev, date: newDate }))} onTimeChange={(newTime) => setVotingEnd(prev => ({ ...prev, time: newTime }))} />
      </div>

      {/* Шаг 2: Вопросы */}
      <div className='mt-[20px]'></div>
      <StepHeader stepNumber={2} title="Вопросы" />

      {/* Вопрос №1 */}
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

      {/* Кнопка добавления вопроса */}
      <AddQuestionButton onClick={addNewQuestion} />

      {/* Кнопки управления */}
      <div className="mt-4 flex space-x-2 items-center p-1 rounded-lg">
        <button onClick={() => console.log(registrationStart.date + `\n` + registrationStart.time + `\n` + registrationEnd.date + `\n` + registrationEnd.time + `\n`)} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.59961 9.92298C9.67225 0.468695 15.9886 0.359674 18.5127 1.48695C19.64 4.01105 19.531 10.3274 10.0767 15.4C9.97863 14.8364 9.43337 13.3599 8.03655 11.9631C6.63973 10.5663 5.16325 10.021 4.59961 9.92298Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3496 14.95C13.1881 15.85 13.3844 17.4638 13.6391 19C13.6391 19 17.4897 16.1535 15.0266 12.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.04996 8.72646C4.14996 6.88795 2.53615 6.69166 1 6.43697C1 6.43697 3.8465 2.58633 7.74997 5.04944" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.01808 12.912C3.50625 13.4238 2.63613 14.9081 3.25033 16.7507C5.09293 17.3649 6.57725 16.4948 7.08909 15.983" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3008 6.44922C15.3008 5.48272 14.5173 4.69922 13.5508 4.69922C12.5843 4.69922 11.8008 5.48272 11.8008 6.44922C11.8008 7.41572 12.5843 8.19922 13.5508 8.19922C14.5173 8.19922 15.3008 7.41572 15.3008 6.44922Z" stroke="white" stroke-width="1.5"/>
</svg>Запустить голосование
        </button>
        <button onClick={() => console.log(VotingStart.date + `\n` + VotingStart.time + `\n` + VotingEnd.date + `\n` + VotingEnd.time + `\n`)}className="border border-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z" stroke="#437DE9" stroke-width="1.5"/>
<path d="M8.5 11.5L14.5001 11.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 15H13.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 8H15.5" stroke="#437DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           Сохранить шаблон
        </button>
      </div>
    </div>
  );
};

export default CreateVoting;