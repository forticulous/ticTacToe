import { connect, Dispatch } from 'react-redux'
import { GlobalState } from '../reducers'
import { playerClickSquare, nextPlayerTurn, checkWinner } from '../actions'
import Board, { InertProps, ActionProps } from '../components/board'

const mapStateToProps = (
  state: GlobalState
): InertProps => {
  return {
    board: state.board,
    gameInProgress: state.gameStatus === 'in-progress',
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch,
): ActionProps => {
  return {
    clickBoard: (row: number, col: number) => {
      dispatch(playerClickSquare(row, col))
      dispatch(nextPlayerTurn())
      dispatch(checkWinner())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)