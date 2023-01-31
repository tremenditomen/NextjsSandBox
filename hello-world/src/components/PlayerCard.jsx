import {useState} from 'react';
import axios from 'axios'
import RankIcon from './RankIcon';


const PlayerCard = () => {
    const [currentInput, setCurrentInput] = useState("")
    const[playerData ,setPlayerData] = useState({})
    const [rankedId, setRankedId]=useState("")
    const [rank , setRank] = useState("")
    const [tier , setTier] = useState("")
    const [rankPoints, setRankPoints]= useState("")
    const [wins , setWins] =useState(0)
    const [lost,setLost] = useState(0)
    const  handleClick = (e)=>{
        console.log("CURRENT INPUT",currentInput);
        console.log("APIKEY", process.env.NEXT_PUBLIC_API_KEY);
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
  
            
            
            // console.log("RANKED Wins:",response.data[0].wins);
            // console.log("RANKED Loses:",response.data[0].losses);
  
        }))
      }).catch((error)=>{
        console.log("ERROR",error);
        
        
      })
      
          setCurrentInput("")
        }
        // console.log( "rankedId",rankedId);
    // console.log("RESPONSE",playerData);
  
  
  
return(
    <>

  
    <h1>testing out apis with ajax</h1>
    <input type={'text'} placeholder={"enter LOL name here"} key="gamertag" onChange={(e)=>setCurrentInput(e.target.value)} ></input>
    <button onClick={handleClick}> search</button>



{JSON.stringify(playerData) !== "{}" ?<> <p>{playerData.name}</p>
<img width={"100"} length = {"100"} alt={"Profile Icon"} src = {`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerData.profileIconId}.png`}></img>
<p>summoner Level : {playerData.summonerLevel} </p>
<p>Ranked : {tier} {rank} LP: {rankPoints}</p>
<p>Total games : {wins + lost}</p>
<p>Games Won: {wins}  --  Games Lost: {lost} </p>
<p>winrate percentage {(wins / (wins + lost) * 100).toFixed(2)}%</p>

<RankIcon tier = {tier}/>


</>
: 
<><p>we dont have player data</p></>}
</>
)

}

export default PlayerCard