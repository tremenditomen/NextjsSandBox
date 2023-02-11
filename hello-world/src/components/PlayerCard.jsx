import { useState } from "react";
// import axios from 'axios'
import RankIcon from "./RankIcon";
import { handleClick } from "@/helpers/handles";
import { Loader } from "./loader";
import { motion } from "framer-motion";

const PlayerCard = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [rankedId, setRankedId] = useState("");
  const [rank, setRank] = useState("");
  const [tier, setTier] = useState("");
  const [rankPoints, setRankPoints] = useState("");
  const [wins, setWins] = useState(0);
  const [lost, setLost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-center flex-col border-2 items-center border-black w-full">
          <h1 className="text-3xl font-bold underline">
            testing out apis with ajax{" "}
          </h1>
          <input
            className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
            type={"text"}
            placeholder={"enter LOL name here"}
            key="gamertag"
            onChange={(e) => setCurrentInput(e.target.value)}
            value={currentInput}
          ></input>
          <button
            id="search"
            className="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            onClick={() =>
              handleClick(
                currentInput,
                setCurrentInput,
                setRank,
                setTier,
                setRankPoints,
                setWins,
                setLost,
                setPlayerData,
                setRankedId,
                setIsLoading
              )
            }
          >
            {" "}
            search
          </button>
         
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="flex  flex-col border-2 items-center border-black rounded-lg  dark:bg-gray-700 dark:text-white focus:ring-blue-500 mt-5 w-2/5 p-5  transform transition-all duration-150 ease-out scale-0"
          >
            {JSON.stringify(playerData) !== "{}" ? (
              <>
                {" "}
                <p>{playerData.name}</p>
                <img
                  className="rounded-lg"
                  width={"100"}
                  length={"100"}
                  alt={"Profile Icon"}
                  src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerData.profileIconId}.png`}
                ></img>
                <p>summoner Level : {playerData.summonerLevel} </p>
                <p>
                  Ranked : {tier} {rank} LP: {rankPoints}
                </p>
                <p>Total games : {wins + lost}</p>
                <p>
                  Games Won: {wins} -- Games Lost: {lost}{" "}
                </p>
                <p>
                  winrate percentage {((wins / (wins + lost)) * 100).toFixed(2)}
                  %
                </p>
                <RankIcon tier={tier} />
              </>
            ) : (
              <>
                <p>we dont have player data</p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
