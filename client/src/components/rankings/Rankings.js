import React, {useState, useEffect} from 'react'
import Rank from './Rank'
import RankContainer from './RankContainer'
import RankingsTitle from './RankingsTitle'
import ReloadRankings from './ReloadRankings'
import globalVars from '../../utils/globalVars'

export default props => {
    const [rankings, setRankings] = useState([])

    useEffect(() => {
        loadRankings()
    }, [])

    const loadRankings = () => {
        const rankingsURL = globalVars.hostURL + '/api/rankings'
        fetch(rankingsURL)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            if(data.success){
                setRankings(data.rankings)
            }
        })
    }

    const displayRankings = () => {
        return rankings.map(rank => {
            return <Rank name={rank.name} rank={rank.rank}></Rank>
        })
    }

    return (
        <div>
            <RankingsTitle></RankingsTitle>
            <ReloadRankings onClick={loadRankings}></ReloadRankings>
            <RankContainer>
                { rankings.length > 0 ? displayRankings(): "loading . . ."}
            </RankContainer>
        </div>
    )
}