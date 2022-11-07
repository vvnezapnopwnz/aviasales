import { connect } from "react-redux";
// import { setVisibilityFilter } from "../actions";
import { AsideFilter } from "../components/AsideFilter";

const mapStateToProps = (state, ownProps) => {
  console.log(state, 'ownProps:',ownProps)
  return state
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  onFilterChange: (filterName) => {
    console.log('onFilterClick', ownProps)
    const type = filterName === 'Все' ? 'SHOW_ALL' : 'SHOW_CURRENT'
    const action = { type, filterName}
    return dispatch(action)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideFilter);
