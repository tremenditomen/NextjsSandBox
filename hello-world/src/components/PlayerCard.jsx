import { useState } from "react";
// import axios from 'axios'
import RankIcon from "./RankIcon";
import { handleClick } from "@/helpers/handles";
import { Loader } from "./loader";
import { motion } from "framer-motion";

const PlayerCard = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
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
            className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
            type={"text"}
            placeholder={"enter LOL name here"}
            key="gamertag"
            onChange={(e) => setCurrentInput(e.target.value)}
            value={currentInput}
          ></input>
          <button
            id="search"
            className="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
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
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className="flex  flex-col border-2 items-center border-black rounded-lg  dark:bg-gray-700 dark:text-white focus:ring-blue-500 mt-2 w-160 p-10  transform transition-all duration-150 ease-out scale-100"
          >
            {JSON.stringify(playerData) !== "{}" ? (
              <>
                {" "}
                <div className="flex flex-col items-center justify-center">
                  <motion.ul initial="hidden" animate="visible" variants={list}>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      <img
                        className="rounded-lg"
                        width={"100"}
                        length={"100"}
                        alt={"Profile Icon"}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerData.profileIconId}.png`}
                      ></img>
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-2 mb-2 dar:text-white w-full hover:bg-gray-600"
                    >
                      {playerData.name}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      summoner Level : {playerData.summonerLevel}{" "}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Total games : {wins + lost}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Games Won: {wins} -- Games Lost: {lost}{" "}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      winrate percentage{" "}
                      {((wins / (wins + lost)) * 100).toFixed(2)}%
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Ranked : {tier} {rank} -- {rankPoints}LP
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      <RankIcon tier={tier} />
                    </motion.li>
                  </motion.ul>
                </div>
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
