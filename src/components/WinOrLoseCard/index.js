import './index.css'

const WinOrLossCard = props => {
  const {win, score, onClick} = props
  const headingContent = win ? 'You Won' : 'You Lose'
  const scoreText = win ? 'Best Score' : 'Score'
  const playAgainBtnClicked = () => {
    onClick()
  }

  return (
    <div className="win-loss-card">
      <div className="score-card">
        <h1 className="heading">{headingContent}</h1>
        <div className="score-details">
          <p className="para">{scoreText}</p>
          <p className="score">{score}/12</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={playAgainBtnClicked}
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        className="img"
        src={
          win
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLossCard
