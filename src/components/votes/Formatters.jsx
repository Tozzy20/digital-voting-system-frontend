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
