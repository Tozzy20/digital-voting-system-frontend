import { useState } from 'react'
import { Checkbox, Radio, Typography } from "@material-tailwind/react";
import { formatRemainingTime } from "../votes/Formatters";
import { ToastContainer, toast } from 'react-toastify';
import { sendVote } from '../../services/api';

const MyBulliten = ({ votingData, authToken, votingId }) => {

  const registrationStartDate = new Date(votingData.voting_full_info.registration_start);
  const registrationEndDate = new Date(votingData.voting_full_info.registration_end);
  const votingStartDate = new Date(votingData.voting_full_info.voting_start)
  const now = new Date();

  const timeUntilRegistrationEndObj = formatRemainingTime(registrationEndDate);
  const timeUntilVotingStartObj = formatRemainingTime(votingStartDate);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Обработчик для кнопки "Проголосовать"
  const handleVote = async () => {
    const answers = Object.keys(selectedAnswers).map(questionId => {
      const questionData = votingData.voting_full_info.questions.find(q => q.id === parseInt(questionId));
      const selectedValue = selectedAnswers[questionId];

      if (!questionData) {
        return null;
      }

      if (questionData.type === 'single_choice') {
        return {
          question_id: parseInt(questionId),
          selected_option_id: selectedValue,
        };
      } else if (questionData.type === 'multiple_choice') {
        return {
          question_id: parseInt(questionId),
          selected_option_ids: selectedValue,
        };
      }
      return null;
    }).filter(Boolean);

    const payload = { answers: answers };
    console.log("JSON для отправки:", JSON.stringify(payload, null, 2));
    
    // POST запрос для отправки ответов
    try {
      const response = await sendVote(votingId, authToken, payload)
      toast.success(response.data.message)
    }
    catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error(`Ошибка 400: ${error.response.data.error}`);
            // запрос неверный
            break;
          case 403:
            toast.error(`Ошибка 403: ${error.response.data.error}`);
            // голосование неактивно или нет доступа
            break;
          case 404:
            toast.error(`Ошибка 404: ${error.response.data.error}`);
            // голосование не существует
            break;
          case 409:
            toast.error(`Ошибка 409: ${error.response.data.error}`);
            // голос уже был учтен
            break;
          case 500:
            toast.error(`Ошибка 500: ${error.response.data.error}`);
            // на сервере произошла ошибка
            break;
          default:
            toast.error(`Неизвестная ошибка: ${error.response.status}, ${error.response.data.error}`);
            // Обработка других неожиданных ошибок
            break;
        }
      }
      else toast.error('Сетевая ошибка. Проверьте ваше подключение.');

    }
  };

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


  // Расчеты для progressBar до конца регистрации
  let registrationProgress = 0;
  const totalRegistrationDuration = registrationEndDate.getTime() - registrationStartDate.getTime();
  const elapsedRegistrationTime = now.getTime() - registrationStartDate.getTime();

  if (totalRegistrationDuration > 0) {
    // Вычисляем процент и ограничиваем его 100%, чтобы он не превышал это значение
    registrationProgress = Math.min((elapsedRegistrationTime / totalRegistrationDuration) * 100, 100);
  } else {
    // Если длительность 0 или меньше (например, даты совпадают), считаем прогресс 100%
    registrationProgress = 100;
  }


  // Расчеты для progressBar до начала голосования
  let overallProgress = 0;
  const totalEventDuration = votingStartDate.getTime() - registrationStartDate.getTime();
  const elapsedEventTime = now.getTime() - registrationStartDate.getTime();

  if (totalEventDuration > 0) {
    // Вычисляем процент и ограничиваем его 100%
    overallProgress = Math.min((elapsedEventTime / totalEventDuration) * 100, 100);
  } else {
    // Если длительность 0 или меньше, считаем прогресс 100%
    overallProgress = 100;
  }


  return (
    <>
    <ToastContainer position="top-center" />
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

          {now < votingStartDate && (
            <div className="flex flex-col md:flex-row gap-6">
              {/* Таймер до начала регистрации */}
              <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">{timeUntilRegistrationEndObj.days} дня</div>
                  <div className="text-stone-300 text-base font-normal">{timeUntilRegistrationEndObj.hours} часов, {timeUntilRegistrationEndObj.minutes} минут до окончания регистрации</div>
                </div>
                <div className="relative w-full h-24">
                  <div className="absolute inset-0 h-full bg-amber-200 rounded-xl"
                    style={{ width: `${registrationProgress}`}}></div>
                  <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
                </div>
              </div>
              {/* Таймер до начала голосования */}
              <div className="flex-1 h-auto p-8 bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-neutral-800 text-4xl sm:text-5xl font-bold">{timeUntilVotingStartObj.days} дней</div>
                  <div className="text-stone-300 text-base font-normal">{timeUntilVotingStartObj.hours} часов, {timeUntilVotingStartObj.minutes} минут до начала голосования</div>
                </div>
                <div className="relative w-full h-24">
                  <div className="absolute inset-0 h-full bg-sky-300 rounded-xl"
                    style={{ width: `${overallProgress}%` }}></div>
                  <div className="absolute inset-0 w-full h-full px-5 py-4 rounded-xl border border-stone-300"></div>
                </div>
              </div>
            </div>
          )}
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

            {/* Кнопки "Проголосовать" / "Отменить выбор"
            <div className="w-full sm:w-80 px-5 py-4 bg-zinc-100 rounded-xl inline-flex justify-center items-center gap-4">
              Проголосовать
            </div> */}
          </div>
        ))}
        <div className="bg-white rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] p-8">
          <button
            onClick={handleVote}
            className='w-full py-3 px-3 bg-[#5BC25B] rounded-lg text-lg font-normal text-white flex gap-3 justify-center items-center hover:brightness-90 transition-all cursor-pointer active:scale-98 whitespace-nowrap'
          >
            Проголосовать
          </button>

        </div>
      </div>
    </>
  )
}

export default MyBulliten;