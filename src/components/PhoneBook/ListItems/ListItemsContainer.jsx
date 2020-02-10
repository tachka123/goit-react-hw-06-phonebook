import { connect } from 'react-redux';
import ListItems from './ListItems';
import { deleteUser } from '../../redux/PBactions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapStateToAction = distatch => ({
  onDelete: id => distatch(deleteUser(id)),
});

export default connect(mapStateToProps, mapStateToAction)(ListItems);
