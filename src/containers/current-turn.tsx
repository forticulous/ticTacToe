import { connect } from 'react-redux'
import { GlobalState } from '../redux/store'
import CurrentTurn, { Props } from '../components/current-turn'

const mapStateToProps = (
  state: GlobalState,
): Props => {
  return {
    currentTurn: state.currentTurn,
  }
}

export default connect(mapStateToProps)(CurrentTurn)