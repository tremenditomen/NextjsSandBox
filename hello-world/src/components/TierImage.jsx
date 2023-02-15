import Image from 'next/image'
import IronEmblem from '../../public/emblems/Emblem_Iron.png'
import BronzeEmblem from '../../public/emblems/Emblem_Bronze.png'
import SilverEmblem from '../../public/emblems/Emblem_Silver.png'
import GoldEmblem from '../../public/emblems/Emblem_Gold.png'
import PlatinumEmblem from '../../public/emblems/Emblem_Platinum.png'
import DimondEmblem from '../../public/emblems/Emblem_Diamond.png'
import MasterEmblem from '../../public/emblems/Emblem_Master.png'
import ChallengerEmblem from '../../public/emblems/Emblem_Challenger.png'

const TierImage = ({tier}) => {
  // console.log(tier)

    const whichImage = (tier) => {
        switch(tier){
            case "IRON":
            return IronEmblem
            
            case "BRONZE":
            return BronzeEmblem
            
            case("SILVER"):
            return SilverEmblem
            
            case  "GOLD":
              // console.log('in case gold')
            return GoldEmblem
            case("PLATINUM"):
            return PlatinumEmblem
          
            case("DIAMOND"):
            return DimondEmblem
          
            case("MASTER"):
            return MasterEmblem
            
            case("CHALLANGER"):
            return ChallengerEmblem
            default:
              // console.log('in default')
        
        }
    }

    // console.log("which image",whichImage(tier))
  return (
    <Image
      src={whichImage(tier)}
      alt="Ranked Emblem"
      width={200}
      height={200}
      
    />
  )
}

  export default TierImage