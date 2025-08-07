// src/pages/VotesPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import VotingControls from "../components/votes/VotingControls";
import PaginationControls from "../components/votes/PaginationControls";
import SearchInput from "../components/votes/SearchInput";
import VotingCard from "../components/votes/VotingCard";
import Button from "../components/Button";

import { getVotings } from '../services/api'
import { useAuth } from '../context/AuthProvider'
import { formatDate, formatTime, getVotingStatus } from '../components/votes/Formatters'



const VotesPage = () => {

  const [votings, setVotings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const { authToken } = useAuth();

  const handleNextPage = () => {
    if (hasNext) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (hasPrev) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

  const handleSearchChange = () => {
        setSearchQuery(inputValue);
        setCurrentPage(1);
  };

  useEffect(() => {
    
    const fetchVotings = async () => {
      try {
        if (!authToken) {
          throw new Error("Пользователь не авторизован.");
        }

        
        const responseData = await getVotings(authToken, currentPage, searchQuery);

        const { items, pagination } = responseData;
        

        
        const formattedVotings = items.map((voting) => ({
          ...voting,
          // Используем вспомогательные функции для форматирования
          registrationStart: {
            date: formatDate(voting.registration_start),
            time: formatTime(voting.registration_start),
          },
          registrationEnd: {
            date: formatDate(voting.registration_end),
            time: formatTime(voting.registration_end),
          },
          votingStart: {
            date: formatDate(voting.voting_start),
            time: formatTime(voting.voting_start),
          },
          votingEnd: {
            date: formatDate(voting.voting_end),
            time: formatTime(voting.voting_end),
          },
          status: getVotingStatus(voting),
          groupName: voting.departments?.[0]?.name || "Общая группа",
          timezone: "UTC+3",


        }));



        setVotings(formattedVotings);
        setTotalPages(pagination.total_pages);
        setHasNext(pagination.has_next);
        setHasPrev(pagination.has_prev);
      } catch (e) {
        console.error("Ошибка при загрузке голосований:", e);
        setError(e.message || "Не удалось загрузить голосования.");
      } finally {
        setLoading(false);
      }
    };

    fetchVotings();
  }, [authToken, currentPage, searchQuery]);


  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-[#EFF3F8]">
  //       Загрузка голосований...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-[#EFF3F8]">
  //       Ошибка: {error}
  //     </div>
  //   );
  // }


  return (
    <div className="bg-[#EFF3F8]  min-h-screen">
      <Header />

      <div className="ml-[240px] mt-[60px] mr-[240px]">
        <Breadcrumbs title="Главная / Голосования" />
        <PageTitle title="Голосования" />

        <div className="flex mt-[24px] gap-4">
          <Button className="outline outline-neutral-400 text-neutral-800 font-normal">
            <img
              src="/src/assets/icons/filter.svg"
              alt="Фильтры"
              className="w-5 h-5"
            />
            Фильтры
          </Button>
          <Button className="outline outline-neutral-400 text-neutral-800 font-normal">
            <img
              src="/src/assets/icons/sort.svg"
              alt="Сортировка"
              className="w-5 h-5"
            />
            Сортировка
          </Button>
        </div>

        <div className="mt-[10px] flex flex-col gap-[10px]">
          <div className="flex justify-between bg-white shadow-lg items-center p-6 rounded-[20px]">
            <div className="flex gap-4">
              <VotingControls />
            </div>
            <div className="flex items-center gap-4">
              <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              hasNext={hasNext}
              hasPrev={hasPrev}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              />
              <SearchInput 
              value={inputValue}
              onChange={handleInputChange}
              onSearch={handleSearchChange}/>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            {votings.map((voting) => (
              <VotingCard key={voting.id} voting={voting} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesPage;
