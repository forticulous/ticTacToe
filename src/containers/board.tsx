import { connect } from 'react-redux'
import { GlobalState } from '../redux/store'

import Board, { Props } from '../components/board'

const mapStateToProps = (
  state: GlobalState
): Props => {
  return {
    board: state.board,
  }
}

export default connect(mapStateToProps)(Board)