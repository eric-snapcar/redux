import { connect } from 'react-redux'
import { setselectedFilter } from '../actions'
import Link from '../components/Link'
const mapStateToProps = function(state, props){
  const isActive = function(state, props){
    return props.filter === state.selectedFilter;
  }
  return {active: isActive(state,props)};
}
const mapDispatchToProps = function(dispatch, props) {
  const onClick_ = function(){
    dispatch(setselectedFilter(props.filter))
  }
  return {
    onClick: onClick_
  }
}
const Link_Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default Link_Filter
