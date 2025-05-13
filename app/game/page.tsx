'use client';


import WaitingRoom from "@/components/game/WaitingRoom"; 
import RankingPlayer from "@/components/game/RankingPlayer";
import Podium from "@/components/game/Podium";
import QuizAnswering from "@/components/game/QuizAnswering";
import { useState } from "react";

enum PageGameEnum {
  WAITING_ROOM, 
  PODIUM, 
  RANKING_PLAYER, 
  QUIZ_ANSWERING

}

export default function GamePage() {

  const [currentPage, setCurrentPage] = useState<PageGameEnum>(PageGameEnum.RANKING_PLAYER); 

  console.log(setCurrentPage); 


  switch (currentPage) {
    case PageGameEnum.WAITING_ROOM: 
      return <WaitingRoom/>
    case PageGameEnum.PODIUM:
      return <Podium/>
    case PageGameEnum.RANKING_PLAYER:
      return <RankingPlayer/>
    case PageGameEnum.QUIZ_ANSWERING:
      return <QuizAnswering/>
  }
}