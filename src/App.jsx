import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import Container from './components/Container/Container';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

    handleSubmit = (e) =>{
      e.preventDefault()

      const contact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
      }

      this.setState(({contacts})=>({contacts: [contact, ...contacts], name: '', number: ''}))

    }

    handleInput = (e) =>{
      this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

  render() {
    const filteredData = this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <React.Fragment>
        <Container>
          <>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInput}
            />
            </label>
            <label>
              Phone
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInput}
            />
            </label>
            <button type='submit'>Add contact</button>
          </form>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input value={this.state.filter} name="filter" type="text" onChange={this.handleInput}/>
          <ul>
            {filteredData.map(({id, name, number}) => <li key={id}>{name}: {number}</li>)}
          </ul>
          </>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
