import './index.css'

const EmojiCard = props => {
  const {details, onClick} = props
  const {id, emojiName, emojiUrl} = details
  const imgClicked = () => {
    onClick(id)
  }

  return (
    <li className="li">
      <button onClick={imgClicked} type="button" className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
