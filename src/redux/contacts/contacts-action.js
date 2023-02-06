import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/AddContact');
export const deleteContact = createAction('contacts/DeleteContact');
export const filterContact = createAction('contacts/FilterContact');
