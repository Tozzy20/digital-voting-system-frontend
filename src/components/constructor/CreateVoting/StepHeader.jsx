import React from 'react';

const StepHeader = ({ stepNumber, title }) => {
  return (
    <div className="px-[20px] py-[16] flex items-center justify-between mb-4">
      <div className="text-lg font-semibold">
        Шаг {stepNumber} {title}
      </div>
    </div>
  );
};

export default StepHeader;