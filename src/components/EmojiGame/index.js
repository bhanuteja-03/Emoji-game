import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {result: false, win: false, score: 0, topScore: 0, newEmojisList: []}

  componentDidMount() {
    const {emojisList} = this.props
    const newList = emojisList.map(forEach => ({...forEach, noOfClicks: 0}))
    this.setState({newEmojisList: newList})
  }

  updateListItem = async id => {
    await this.setState(prevState => ({
      newEmojisList: this.shuffledEmojisList(
        prevState.newEmojisList.map(forEach => {
          if (forEach.id === id) {
            return {...forEach, noOfClicks: forEach.noOfClicks + 1}
          }
          return forEach
        }),
      ),
      score: prevState.score + 1,
    }))
    console.log(this.state)
    this.checkForGameStatus()
  }

  checkForGameStatus = () => {
    const {newEmojisList, score} = this.state
    newEmojisList.map(forEach => {
      if (forEach.noOfClicks > 1 || score === 12) {
        return this.setState({result: true, win: score === 12})
      }
      return 0
    })
  }

  playAgain = () => {
    console.log('play again')
    const {newEmojisList, topScore, score} = this.state
    const newList = newEmojisList.map(forEach => ({...forEach, noOfClicks: 0}))
    const newTopScore = topScore > score ? topScore : score
    this.setState({
      topScore: newTopScore,
      result: false,
      win: false,
      score: 0,
      newEmojisList: newList,
    })
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {result, newEmojisList, win, score, topScore} = this.state

    return (
      <div className="bg">
        <NavBar result={result} score={score} topScore={topScore} />
        <div className="emoji-game-card">
          {result ? (
            <WinOrLoseCard win={win} score={score} onClick={this.playAgain} />
          ) : (
            <ul className="ul">
              {newEmojisList.map(forEach => (
                <EmojiCard
                  onClick={this.updateListItem}
                  details={forEach}
                  key={forEach.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
