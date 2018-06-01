import { connect } from 'react-redux'
import GameStatus, { Props } from '../components/game-status'
import { GlobalState } from '../reducers'

const mapStateToProps = (
  state: GlobalState,
): Props => {
  return {
    currentTurn: state.currentTurn,
    gameStatus: state.gameStatus,
  }
}

export default connect(mapStateToProps)(GameStatus)
