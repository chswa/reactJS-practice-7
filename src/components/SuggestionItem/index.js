// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion} = props
  console.log(suggestion)
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
