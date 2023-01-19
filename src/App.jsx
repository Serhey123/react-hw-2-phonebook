import React, { useEffect, useState } from 'react';

import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContantList/ContactList';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = data => {
    if (contacts.find(({ name }) => name === data.name)) {
      alert({
        text: `${data.name} is already in contacts`,
      });
      return;
    }

    setContacts(prevState => [data, ...prevState]);
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
            handleInput={e => setFilter(e.currentTarget.value)}
          />
          <ContactList
            filteredData={filteredData}
            btnHandler={e =>
              setContacts(prevState =>
                prevState.filter(({ name }) => name !== e.target.dataset.name),
              )
            }
          />
        </>
      </Container>
    </React.StrictMode>
  );
}

export default App;
