import React, { useState } from 'react';

const QuestionForm = ({ 
  questionNumber, 
  initialType, 
  initialHeader, 
  initialOptions,
  onTypeChange,
  onHeaderChange,
  onOptionsChange 
}) => {
  const [type, setType] = useState(initialType || '');
  const [header, setHeader] = useState(initialHeader || '');
  const [options, setOptions] = useState(initialOptions || ['']); 

  const handleTypeChange = (e) => {
    const newValue = e.target.value;
    setType(newValue);
    if (onTypeChange) onTypeChange(newValue); 
  };

  const handleHeaderChange = (e) => {
    const newValue = e.target.value;
    setHeader(newValue);
    if (onHeaderChange) onHeaderChange(newValue); 
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
    if (onOptionsChange) onOptionsChange(newOptions); 
  };
  const addOption = () => {
    const newOptions = [...options, ''];
    setOptions(newOptions);
    if (onOptionsChange) onOptionsChange(newOptions); 
  };

  const removeOption = (index) => {
    if (options.length <= 1) return; 
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    if (onOptionsChange) onOptionsChange(newOptions); 
  };

  return (
    <div className="mb-4 py-4"> 
      <div className="flex items-center justify-between">
        <div className="text-base font-bold text-gray-700">
          Вопрос №{questionNumber}
        </div>
      </div>
      
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Тип вопроса</label>
        <select
          type="text"
          value={type}
          onChange={handleTypeChange}
          className="mt-1 p-2 px-[20px] py-[16px] border border-gray-300 rounded-[12px] w-full"
          placeholder="Введите тип вопроса"
        >
        <option value="single_choice">Одиночный вопрос</option>
        <option value="multiple_choice">Множественный вопрос</option>
        </select>
      </div>
      
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Заголовок вопроса</label>
        <input
          type="text"
          value={header}
          onChange={handleHeaderChange}
          className="mt-1 p-2 px-[20px] py-[16px] border border-gray-300 rounded-[12px] w-full"
          placeholder="Введите заголовок вопроса"
        />
      </div>
      
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Варианты ответа</label>
        <div className="mt-1 space-y-2"> 
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                className="p-2 border px-[20px] py-[16px] border-gray-300 rounded-[12px] w-full"
                placeholder={`Вариант ${index + 1}`}
              />
              <button 
                className="text-red-500 hover:text-red-700 disabled:opacity-50" 
                onClick={() => removeOption(index)}
                disabled={options.length <= 1} 
              >
<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="51" height="51" rx="8" fill="#F4F4F4"/>
<path d="M33 19L32.5982 25.5062M18 19L18.6046 29.0248C18.7595 31.5922 18.8369 32.8759 19.4787 33.799C19.796 34.2554 20.2048 34.6407 20.6791 34.9302C21.3503 35.34 22.1811 35.4631 23.5 35.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/>
<path d="M33.5 28.5L26.5 35.4995M33.5 35.5L26.5 28.5005" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 19H34.5M29.5557 19L28.8731 17.5917C28.4196 16.6563 28.1928 16.1885 27.8017 15.8968C27.715 15.8321 27.6231 15.7745 27.527 15.7247C27.0939 15.5 26.5741 15.5 25.5345 15.5C24.4688 15.5 23.936 15.5 23.4957 15.7341C23.3981 15.786 23.305 15.8459 23.2173 15.9132C22.8216 16.2167 22.6006 16.7016 22.1586 17.6713L21.5529 19" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/>
</svg>
              </button>
              <button className="flex items-center text-blue-500 hover:text-blue-700" onClick={addOption}>
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="51" height="51" rx="8" fill="#F4F4F4"/>
                  <path d="M25.4993 21.666V29.3327M29.3327 25.4993L21.666 25.4993" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.3965 25.5007C16.3965 21.2089 16.3965 19.063 17.7298 17.7298C19.063 16.3965 21.2089 16.3965 25.5007 16.3965C29.7924 16.3965 31.9383 16.3965 33.2715 17.7298C34.6048 19.063 34.6048 21.2089 34.6048 25.5007C34.6048 29.7924 34.6048 31.9383 33.2715 33.2715C31.9383 34.6048 29.7924 34.6048 25.5007 34.6048C21.2089 34.6048 19.063 34.6048 17.7298 33.2715C16.3965 31.9383 16.3965 29.7924 16.3965 25.5007Z" stroke="#212121" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;