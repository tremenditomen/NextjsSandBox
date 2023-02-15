import axios from "axios";
import { Loader } from "@/components/loader";

export const handleClick = (
  currentInput,
  setCurrentInput,
  setRank,
  setTier,
  setRankPoints,
  setWins,
  setLost,
  setPlayerData,
  setRankedId,
  setIsLoading,
  setSummonerId,
  setPuuId,
  event
) => {
  if (event.key === "Enter") {
    setIsLoading(true);
    let APICallString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${currentInput}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    axios
      .get(APICallString)
      .then((response) => {
        let APIRankedString = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
        setPlayerData(response.data);
        setRankedId({ id: response.data.id });
        setPuuId({ id: response.data.puuid });
        return axios.get(APIRankedString).then((response) => {
          setSummonerId({ id: response.data[0].summonerId });
          setRank(response.data[0].rank);
          setTier(response.data[0].tier);
          setRankPoints(response.data[0].leaguePoints);
          setWins(response.data[0].wins);
          setLost(response.data[0].losses);
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }
};

export const tftHandleClick = (setTftRank,id,setTftWins,setTftLoses,setTftRankedPoints,setPlayerName,setIsLoading)=>{


  let APICallString = `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  return axios.get(APICallString)
  .then((response)=>{
      console.log(response.data.length);
      if(response.data.length !== 0 ){
         console.log("in here",response.data[0]);
           

          setTftRank(response.data[0].tier)
          setTftWins(response.data[0].wins)
          setTftLoses(response.data[0].losses)
          setTftRankedPoints(response.data[0].leaguePoints)
          setPlayerName(response.data[0].summonerName)

        


      } else{

        console.log("not tft ranked data");
      }

  })



}
