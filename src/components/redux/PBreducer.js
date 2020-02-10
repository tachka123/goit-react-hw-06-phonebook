import Types from './actionTypes';
import InitialState from './initialState';

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case Types.ADD_CONTACT: {
      const newContacts = [...state.contacts, action.payloads];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return { filter: '', contacts: newContacts };
    }

    case Types.DELETE_CONTACT: {
      const newContacts = state.contacts.filter(
        item => item.id !== action.payloads,
      );
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return {
        filter: state.filter,
        contacts: newContacts,
      };
    }

    case Types.FILTER_CONTACTS:
      return { contacts: state.contacts, filter: action.payloads };
    case Types.SET_FROM_LOCALSTORAGE:
      return { contacts: action.payloads, filter: '' };
    default:
      return state;
  }
};

export default reducer;
