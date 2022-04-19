import Wrapper from "../assets/wrappers/StatsContainer"
import StatsItem from "./StatsItem"
import Constants from "../utils/constants"

const StatsContainer = () => {

  const defaultStats = Constants()
  return (
    <Wrapper>
      {defaultStats.map((item, index)=>{
        return <StatsItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
