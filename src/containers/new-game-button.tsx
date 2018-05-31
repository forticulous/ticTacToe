import { connect, Dispatch } from 'react-redux'
import NewGameButton, { ActionProps } from '../components/new-game-button'
import { newGame } from '../actions'

const mapDispatchToProps = (
  dispatch: Dispatch
): ActionProps => {
  return {
    newGame: () => dispatch(newGame()),
  }
}

export default connect(null, mapDispatchToProps)(NewGameButton)