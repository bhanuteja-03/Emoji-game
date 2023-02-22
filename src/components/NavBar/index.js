import './index.css'

const NavBar = props => {
  const {result, score, topScore} = props

  return (
    <nav className="nav">
      <div className="logo-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!result && (
        <div className="nav-score-card">
          <p className="nav-score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
