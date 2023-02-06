import React from 'react';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { useSelector, useDispatch } from 'react-redux';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContantList/ContactList';

import {
  addContact,
  deleteContact,
  filterContact,
} from './redux/contacts/contacts-action';

import { getContacts, getFilter } from './redux/contacts/contacts-selectors';

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onSubmitHandler = data => {
    if (contacts.find(({ name }) => name === data.name)) {
      alert({
        text: `${data.name} is already in contacts`,
      });
      return;
    }

    dispatch(addContact(data));
  };

  const filteredData = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <React.StrictMode>
      <Container>
        <>
          <Header />
          <ContactForm onSubmitHandler={onSubmitHandler} />

          <h2 style={{ textAlign: 'center' }}>Contacts</h2>
          <Filter
            filterValue={filter}
            handleInput={e => dispatch(filterContact(e.currentTarget.value))}
          />
          <ContactList
            filteredData={filteredData}
            btnHandler={e => dispatch(deleteContact(e.target.dataset.name))}
          />
        </>
      </Container>
    </React.StrictMode>
  );
}

export default App;
