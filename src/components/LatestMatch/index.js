import './index.css'

const LatestMatch = ({matchDetails}) => {
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <p className="latest-match-heading">Latest Matches</p>
      <div className="latest-match-card">
        <div className="match-info-left">
          <p className="competing-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="match-info-right">
          <p>
            <span className="label">First Innings:</span> {firstInnings}
          </p>
          <p>
            <span className="label">Second Innings:</span> {secondInnings}
          </p>
          <p>
            <span className="label">Man of the Match:</span> {manOfTheMatch}
          </p>
          <p>
            <span className="label">Umpires:</span> {umpires}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
