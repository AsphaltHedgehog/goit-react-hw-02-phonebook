import React, { Component } from "react";

import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

class ContactsBook extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };


  contactSubmitHandler = data => {
    const { name, number } = data;
    if (this.state.contacts.find((contact) => contact.name === name || contact.number === number)) {
      alert('this contact already exist');
      return;
    }

    const contact = {
      id: crypto.randomUUID(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  contactsFilterChange = (name, value) => {
    this.setState({ [name]: value });
  };

  

  render() {
    const { contactSubmitHandler, state } = this;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={contactSubmitHandler } />
        <div>
          <h2>Contacts</h2>
          {state.contacts.length > 0 &&
            <ul>
              <Filter
                filter={this.state.filter}
                contactsFilterHandler={this.contactsFilterChange}
              />
              <ContactsList
                contacts={this.state.contacts}
                filter={this.state.filter}
              />
            </ul>
            };
        </div>
      </div>
    );
  };
};


export default ContactsBook;