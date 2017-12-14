import { connect } from 'react-redux'
import { setselectedFilter } from '../actions'
import Link from '../components/Link'

const isActive = function(state, props){
  return props.filter === state.selectedFilter;
}
const onClick = function(dispatch, props){
    dispatch(setselectedFilter(props.filter));
}
const mapStateToProps = (state, props) => ({
  active: isActive(state,props)
})
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
