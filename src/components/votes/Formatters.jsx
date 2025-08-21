export const formatDate = (isoString) => {
  if (!isoString) return 'Нет данных';
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const formatTime = (isoString) => {
  if (!isoString) return 'Нет данных';
  const date = new Date(isoString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatRemainingTime = (endDate) => {
    // Вычисляем разницу в миллисекундах
    const diff = endDate.getTime() - new Date().getTime();

    // Если время истекло, возвращаем объект с нулевыми значениями
    if (diff <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    // Расчет дней, часов, минут и секунд
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Возвращаем объект с рассчитанными значениями
    return {
        days,
        hours,
        minutes,
    };
};


export const getVotingStatusConfig = (voting) => {
  const now = new Date();
  const registrationStart = new Date(voting.registration_start);
  const votingStart = new Date(voting.voting_start);
  const votingEnd = new Date(voting.voting_end);

  // Проверяем, являются ли даты валидными
  if (isNaN(registrationStart) || isNaN(votingStart) || isNaN(votingEnd)) {
    return {
      text: 'Ошибка данных',
      bg: 'bg-neutral-100',
      textColor: 'text-neutral-800',
      icon: '/src/assets/icons/archive.svg',
    };
  }

  if (now >= votingStart && now <= votingEnd) {
    return {
      text: 'Голосование активно',
      bg: 'bg-[#E6FFDD]',
      textColor: 'text-[#135615]',
      icon: '/src/assets/icons/fireGreen.svg',
    };
  }

  if (now >= registrationStart && now < votingStart) {
    return {
      text: 'Голосование на этапе регистрации',
      bg: 'bg-[#FFFBD0]',
      textColor: 'text-[#564E13]',
      icon: '/src/assets/icons/registration.svg',
    };
  }
  
  if (now > votingEnd) {
    return {
      text: 'Голосование завершено',
      bg: 'bg-neutral-100',
      textColor: 'text-neutral-800',
      icon: '/src/assets/icons/archive.svg',
    };
  }
  
  // Если голосование еще не началось
  return {
    text: 'Ожидает начала',
    bg: 'bg-neutral-100',
    textColor: 'text-neutral-600',
    icon: '/src/assets/icons/archive.svg',
  };
};

export const getVotingStatusConfigDetails = (voting) => {
  // Проверка наличия необходимых данных
  if (!voting || !voting.voting_full_info) {
    return {
      text: 'Нет данных',
      bg: 'bg-neutral-100',
      textColor: 'text-neutral-800',
      icon: '/src/assets/icons/archive.svg',
    };
  }

  const now = new Date();
  const registrationStart = new Date(voting.voting_full_info.registration_start);
  const votingStart = new Date(voting.voting_full_info.voting_start);
  const votingEnd = new Date(voting.voting_full_info.voting_end);

  // Проверяем, являются ли даты валидными
  if (isNaN(registrationStart) || isNaN(votingStart) || isNaN(votingEnd)) {
    return {
      text: 'Ошибка данных',
      bg: 'bg-neutral-100',
      textColor: 'text-neutral-800',
      icon: '/src/assets/icons/archive.svg',
    };
  }

  if (now >= votingStart && now <= votingEnd) {
    return {
      text: 'Голосование активно',
      bg: 'bg-[#E6FFDD]',
      textColor: 'text-[#135615]',
      icon: '/src/assets/icons/fireGreen.svg',
    };
  }

  if (now >= registrationStart && now < votingStart) {
    return {
      text: 'Голосование на этапе регистрации',
      bg: 'bg-[#FFFBD0]',
      textColor: 'text-[#564E13]',
      icon: '/src/assets/icons/registration.svg',
    };
  }
  
  if (now > votingEnd) {
    return {
      text: 'Голосование завершено',
      bg: 'bg-neutral-100',
      textColor: 'text-neutral-800',
      icon: '/src/assets/icons/archive.svg',
    };
  }
  
  // Если голосование еще не началось
  return {
    text: 'Ожидает начала',
    bg: 'bg-neutral-100',
    textColor: 'text-neutral-600',
    icon: '/src/assets/icons/archive.svg',
  };
};

// Дополнительные вспомогательные функции для мобильной адаптации
export const getShortStatusText = (statusConfig) => {
  // Сокращенные версии текстов для мобильных устройств
  const shortTexts = {
    'Голосование активно': 'Активно',
    'Голосование на этапе регистрации': 'Регистрация',
    'Голосование завершено': 'Завершено',
    'Ожидает начала': 'Ожидание',
    'Ошибка данных': 'Ошибка',
    'Нет данных': 'Нет данных'
  };
  
  return shortTexts[statusConfig.text] || statusConfig.text;
};

export const getMobileStatusConfig = (voting) => {
  const config = getVotingStatusConfig(voting);
  return {
    ...config,
    text: getShortStatusText(config)
  };
};

export const getMobileStatusConfigDetails = (voting) => {
  const config = getVotingStatusConfigDetails(voting);
  return {
    ...config,
    text: getShortStatusText(config)
  };
};

// Функция для форматирования даты и времени в компактный формат для мобильных
export const formatDateTimeCompact = (isoString) => {
  if (!isoString) return 'Нет данных';
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}.${month} ${hours}:${minutes}`;
};

// Функция для проверки валидности дат
export const isValidDate = (dateString) => {
  return dateString && !isNaN(new Date(dateString));
};

// export const getVotingStatus = (voting) => {
//     const now = new Date();
//     const registrationStart = new Date(voting.registration_start);
//     const registrationEnd = new Date(voting.registration_end);
//     const votingEnd = new Date(voting.voting_end);

//     if (now >= registrationStart && now <= registrationEnd) {
//         return 'registration';
//     } else if (now > registrationEnd && now <= votingEnd) {
//         return 'active';
//     } else if (now > votingEnd) {
//         return 'completed';
//     }
    
//     return 'completed'; 
// };
