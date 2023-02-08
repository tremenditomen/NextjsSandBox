import axios from 'axios'

export const  handleClick = (currentInput,setCurrentInput,setRank,setTier,setRankPoints,setWins,setLost,setPlayerData,setRankedId)=>{
    console.log("CURRENT INPUT",currentInput);
  let APICallString =`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${currentInput}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  axios.get(APICallString).then((response)=>{
    let APIRankedString =`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    setPlayerData(response.data)
    setRankedId(response.data.id)
    return(axios.get(APIRankedString).then((response)=>{
        
        
        
        setRank(response.data[0].rank)
        setTier(response.data[0].tier)
        setRankPoints(response.data[0].leaguePoints)
        setWins(response.data[0].wins)
        setLost(response.data[0].losses)
        
        
        
        
    }))
}).catch((error)=>{
    console.log("ERROR",error);
    
    
})
console.log("CURRENT INPUT:", currentInput);
  
    }