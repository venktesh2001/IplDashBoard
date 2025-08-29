import './index.css'

const MatchCard = ({matchDetails}) => {
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const matchStatusClass = matchStatus === 'Won' ? 'status-won' : 'status-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
