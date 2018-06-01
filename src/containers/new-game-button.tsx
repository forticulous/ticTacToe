import { connect, Dispatch } from 'react-redux'
import { newGame } from '../actions'
import NewGameButton, { ActionProps } from '../components/new-game-button'

const mapDispatchToProps = (
  dispatch: Dispatch
): ActionProps => {
  return {
    newGame: () => dispatch(newGame()),
  }
}

export default connect(null, mapDispatchToProps)(NewGameButton)
