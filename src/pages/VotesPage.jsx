// src/pages/VotesPage.jsx
import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import VotingControls from "../components/votes/VotingControls";
import PaginationControls from "../components/votes/PaginationControls";
import SearchInput from "../components/votes/SearchInput";
import VotingCard from "../components/votes/VotingCard";
import Button from "../components/Button";

import mockVotingData from "/mockVotes.json"

const VotesPage = () => {
  return (
    <div className="bg-[#EFF3F8] font-supermolotM min-h-screen">
      <Header />

      <div className="ml-[240px] mt-[60px] mr-[240px]">
        <Breadcrumbs title="Главная / Голосования" />
        <PageTitle title="Голосования" />

        <div className="flex mt-[24px] gap-4">
          <Button className="outline outline-1 outline-neutral-400 text-neutral-800 font-normal">
            <img
              src="/src/assets/icons/filter.svg"
              alt="Фильтры"
              className="w-5 h-5"
            />
            Фильтры
          </Button>
          <Button className="outline outline-1 outline-neutral-400 text-neutral-800 font-normal">
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
              <PaginationControls />
              <SearchInput />
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            {mockVotingData.map((voting) => (
              <VotingCard key={voting.id} voting={voting} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesPage;
