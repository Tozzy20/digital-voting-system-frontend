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

export const getVotingStatus = (voting) => {
    const now = new Date();
    const registrationStart = new Date(voting.registration_start);
    const registrationEnd = new Date(voting.registration_end);
    const votingEnd = new Date(voting.voting_end);

    if (now >= registrationStart && now <= registrationEnd) {
        return 'registration';
    } else if (now > registrationEnd && now <= votingEnd) {
        return 'active';
    } else if (now > votingEnd) {
        return 'completed';
    }
    
    return 'completed'; 
};

export const getVotingStatusConfig = (voting) => {
  const now = new Date();
  const registrationStart = new Date(voting.registration_start);
  const votingStart = new Date(voting.voting_start);
  const votingEnd = new Date(voting.voting_end);

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
  
  return {
    text: 'Ожидает начала',
    bg: 'bg-neutral-100',
    textColor: 'text-neutral-600',
    icon: '/src/assets/icons/archive.svg',
  };
};
