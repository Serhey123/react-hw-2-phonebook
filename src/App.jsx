import React, { Component } from 'react';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContantList/ContactList';

class App extends Component {
  state = {
    contacts: [    
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

    onSubmitHandler = (data) =>{
      console.log(data);
      if(this.state.contacts.find(({name}) => name === data.name)){
        alert(`${data.name} is already in contacts`)
        return
      }

      this.setState(({contacts})=>({contacts: [data, ...contacts]}))
    }

    deleteBtnHandler = (e) => {
      this.setState(({contacts}) => ({contacts: contacts.filter(({ name }) => name !== e.target.dataset.name)}))
    }

    handleInput = (e) =>{
      this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

  render() {
    const filteredData = this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <React.StrictMode>
        <Container>
          <>
          <h2>Phonebook</h2>
          <ContactForm onSubmitHandler={this.onSubmitHandler}/>

          <h2>Contacts</h2>
          <Filter filterValue={this.state.filter} handleInput={this.handleInput}/>
          <ContactList filteredData={filteredData} btnHandler={this.deleteBtnHandler}/>
          </>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
