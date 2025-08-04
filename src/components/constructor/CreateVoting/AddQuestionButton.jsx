import React from 'react';

const AddQuestionButton = ({ onClick }) => { 
  return (
    <div className="flex items-center mt-4">
      <button 
        className="text-green-500 hover:text-green-700"
        onClick={onClick} 
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9993 10.666V21.3327M21.3327 15.9993L10.666 15.9993" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33398 16.0007C3.33398 10.0295 3.33398 7.04397 5.18897 5.18897C7.04397 3.33398 10.0295 3.33398 16.0007 3.33398C21.9718 3.33398 24.9573 3.33398 26.8123 5.18897C28.6673 7.04397 28.6673 10.0295 28.6673 16.0007C28.6673 21.9718 28.6673 24.9573 26.8123 26.8123C24.9573 28.6673 21.9718 28.6673 16.0007 28.6673C10.0295 28.6673 7.04397 28.6673 5.18897 26.8123C3.33398 24.9573 3.33398 21.9718 3.33398 16.0007Z" stroke="#212121" strokeWidth="2"/>
        </svg>
      </button>
      <span className="ml-2 text-sm font-medium text-gray-700">Добавить вопрос</span>
    </div>
  );
};

export default AddQuestionButton;