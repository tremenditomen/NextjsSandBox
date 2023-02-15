import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { tftHandleClick } from "@/helpers/handles";
import { motion } from "framer-motion";
import RankIcon from "./RankIcon";




const TftStats = () => {
  const [tftRank, setTftRank] = useState("");
  const [tftWins, setTftWins] = useState(0);
  const [tftLoses, setTftLoses] = useState(0);
  const [tftRankedPoints, setTftRankedPoints] = useState(0);
  const [playerName , setPlayerName] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const query = router.query;
  const id = query.id;

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

  tftHandleClick(setTftRank, id,setTftWins,setTftLoses,setTftRankedPoints,setPlayerName);
       
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <div className="flex justify-center flex-col border-2 items-center border-black w-full">
          <h1 className="text-3xl font-bold underline">
            testing out apis with ajax{" "}
          </h1>
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
            
              <>
                {" "}
                <div className="flex flex-col items-center justify-center">
                  <motion.ul initial="hidden" animate="visible" variants={list}>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-2 mb-2 dar:text-white w-full hover:bg-gray-600"
                    >
                      {playerName}
                    </motion.li>
                    {/* <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      summoner Level : {}{" "}
                    </motion.li> */}
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Total games : {tftWins + tftLoses}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Games Won: {tftWins} -- Games Lost: {tftLoses}{" "}
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      winrate percentage{" "}
                      {((tftWins / (tftWins + tftLoses)) * 100).toFixed(2)}%
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className=" border-2 rounded-lg dark:bg-gray-800 p-3  mt-3 dar:text-white w-full hover:bg-gray-600 "
                    >
                      Ranked : {tftRank} -- {tftRankedPoints}LP
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      <RankIcon tier={tftRank} />
                    </motion.li>
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                         <button className="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
          <Link href="/"> Home </Link>
        </button>
                    </motion.li>

                
                  </motion.ul>
                </div>
              </>
            
             
            
          </motion.div>
        </div>
      {/* )} */}
    </>
  );
};

export default TftStats;
