import Types from './actionTypes';

export const addUser = info => ({
  type: Types.ADD_CONTACT,
  payloads: info,
});

export const deleteUser = id => ({
  type: Types.DELETE_CONTACT,
  payloads: id,
});

export const filter = name => ({
  type: Types.FILTER_CONTACTS,
  payloads: name,
});

export const getContactsFromLocalStorage = contacts => ({
  type: Types.SET_FROM_LOCALSTORAGE,
  payloads: contacts,
});
