import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { addContact, deleteContact, filterContact } from './contacts-action';

const itemsReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, { payload }) => [payload, ...state],
    [deleteContact]: (state, { payload }) =>
      state.filter(({ name }) => name !== payload),
  },
);

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
