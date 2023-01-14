import React, { Component } from 'react';

import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContantList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount(){
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    this.setState({contacts: parsedContacts})
  }

  onSubmitHandler = data => {
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      alert({
        text: `${data.name} is already in contacts`,
      });
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  deleteBtnHandler = e => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ name }) => name !== e.target.dataset.name),
    }));
  };

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const filteredData = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <React.StrictMode>
        <Container>
          <>
          <Header/>
          <ContactForm onSubmitHandler={this.onSubmitHandler} />

          <h2 style={{textAlign: 'center'}}>Contacts</h2>
          <Filter
            filterValue={this.state.filter}
            handleInput={this.handleInput}
          />
          <ContactList
            filteredData={filteredData}
            btnHandler={this.deleteBtnHandler}
          />
          </>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
