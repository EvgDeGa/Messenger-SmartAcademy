import {Search} from './Search';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  friends: state.friends,
  community: state.community,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
