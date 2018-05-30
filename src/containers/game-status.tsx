import { connect } from 'react-redux'
import { GlobalState } from '../reducers'
import GameStatus, { Props } from '../components/game-status'

const mapStateToProps = (
  state: GlobalState,
): Props => {
  return {
    currentTurn: state.currentTurn,
    gameStatus: state.gameStatus,
  }
}

export default connect(mapStateToProps)(GameStatus)