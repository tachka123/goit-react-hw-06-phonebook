import { connect } from 'react-redux';
import CreateContact from './CreateContact';
import { addUser, getContactsFromLocalStorage } from '../../redux/PBactions';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapStateToAction = dispatch => ({
  onAdd: info => dispatch(addUser(info)),
  setContactsFromLS: contacts =>
    dispatch(getContactsFromLocalStorage(contacts)),
});

export default connect(mapStateToProps, mapStateToAction)(CreateContact);
