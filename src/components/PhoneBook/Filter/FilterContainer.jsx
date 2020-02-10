import { connect } from 'react-redux';
import { filter } from '../../redux/PBactions';
import Filter from './Filter';

const mapStateToProps = ({ contacts, filterName }) => ({
  contacts,
  filter: filterName,
});

const mapStateToAction = dispatch => ({
  onChange: name => dispatch(filter(name)),
});

export default connect(mapStateToProps, mapStateToAction)(Filter);
