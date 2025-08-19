import { useState } from 'react'
import { Checkbox, Radio, Typography } from "@material-tailwind/react";
import { formatRemainingTime } from "../votes/Formatters";

const MyBulliten = ({ votingData }) => {

  const registrationEndDate = new Date(votingData.voting_full_info.registration_end);
  const votingEndDate = new Date(votingData.voting_full_info.voting_end)

  const timeUntilRegistrationEndObj = formatRemainingTime(registrationEndDate);
  const timeUntilVotingEndObj = formatRemainingTime(votingEndDate);

  const [selectedAnswers, setSelectedAnswers] = useState({});

    // Обработчик изменения для Radio
  const handleRadioChange = (questionId, optionId) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: optionId,
    }));
    console.log("Radio changed:", questionId, optionId);
  };

  // Обработчик изменения для Checkbox
  const handleCheckboxChange = (questionId, optionId) => {
    setSelectedAnswers(prevState => {
      const currentAnswers = prevState[questionId] || [];
      const newAnswers = currentAnswers.includes(optionId)
        ? currentAnswers.filter(id => id !== optionId)
        : [...currentAnswers, optionId];
        console.log("Checkbox changed:", questionId, optionId);
      return {
        ...prevState,
        [questionId]: newAnswers,
        
      };
      
    });
  };

  // Функция для рендеринга вариантов ответов
  const renderOptions = (question) => {
    const isSingleChoice = question.type === 'single_choice';
  const selectedValue = selectedAnswers[question.id] || [];

    return question.options.map((option) => (
      <div key={option.id} className="flex items-center gap-3">
        {isSingleChoice ? (
          <Radio
            name={`question-${question.id}`}
            id={`radio-${option.id}`}
            value={option.id}
            label={<Typography className="text-neutral-800 text-xl">{option.option}</Typography>}
            checked={selectedValue === option.id}
            onChange={() => handleRadioChange(question.id, option.id)}  
            />
        ) : (
          <Checkbox
            id={`checkbox-${option.id}`}
            value={option.id}
            label={<Typography className="text-neutral-800 text-xl">{option.option}</Typography>}
            checked={selectedValue && selectedValue.includes(option.id)}
            onChange={() => handleCheckboxChange(question.id, option.id)}
          />
        )}
        {/* <div className="text-neutral-800 text-xl font-normal">{option.option}</div> */}
      </div>
    ));
  };


  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
            <div className="text-neutral-800 text-xl font-bold mb-4">{votingData.voting_full_info.title}</div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-stone-300 text-base font-normal">{votingData.voting_full_info.theme}</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <img src="/src/assets/images/detaliAndMain/longitude.png" alt="Timezone Icon" />
                  </div>
                  <div className="text-neutral-800 text-base font-normal">(UTC+3) Россия - Москва</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">{timeUntilRegistrationEndObj.days} дня</div>
                <div className="text-stone-300 text-base font-normal">{timeUntilRegistrationEndObj.hours} часов, {timeUntilRegistrationEndObj.minutes} минут до окончания регистрации</div>
              </div>
              <div className="relative w-full h-24">
                <div className="absolute inset-0 w-[30%] h-full bg-amber-200 rounded-xl"></div>
                <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
              </div>
            </div>

            <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">{timeUntilVotingEndObj.days} дней</div>
                <div className="text-stone-300 text-base font-normal">{timeUntilVotingEndObj.hours} часов, {timeUntilVotingEndObj.minutes} минут до начала голосования</div>
              </div>
              <div className="relative w-full h-24">
                <div className="absolute inset-0 w-[90%] h-full bg-sky-300 rounded-xl"></div>
                <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
              </div>
            </div>
          </div>
        </div>

        {votingData.voting_full_info.questions.map((question, index) => (
          <div key={question.id} className="bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="text-neutral-800 text-xl font-bold">{`№${index + 1}. ${question.title}`}</div>
                {/* ... Иконка статуса вопроса */}
              </div>
            </div>
            <div className="text-stone-300 text-base font-normal mb-6">
              {/* Здесь можно добавить логику для описания типа ответа */}
              {question.type === 'single_choice' && 'Необходимо выбрать один вариант ответа'}
              {question.type === 'multiple_choice' && 'Необходимо выбрать несколько вариантов ответа'}
            </div>

            <div className="space-y-4 mb-8">
              {renderOptions(question)}
            </div>

            {/* Кнопки "Проголосовать" / "Отменить выбор" */}
            <div className="w-full sm:w-80 px-5 py-4 bg-zinc-100 rounded-xl inline-flex justify-center items-center gap-4">
              Проголосовать
            </div>
          </div>
        ))}

       
      </div>
    </>
  )
}

export default MyBulliten;