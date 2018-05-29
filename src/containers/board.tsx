import { connect, Dispatch } from 'react-redux'
import { GlobalState } from '../redux/store'
import { playerClickSquare, nextPlayerTurn } from '../actions'
import Board, { InertProps, ActionProps } from '../components/board'

const mapStateToProps = (
  state: GlobalState
): InertProps => {
  return {
    board: state.board,
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch,
): ActionProps => {
  return {
    clickBoard: (row: number, col: number) => {
      dispatch(playerClickSquare(row, col))
      dispatch(nextPlayerTurn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)