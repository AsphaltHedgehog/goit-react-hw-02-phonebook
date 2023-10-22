import React, { Component } from "react";

import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

class ContactsBook extends Component {
  state = {
    contacts: [],
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

  handlerDeleteContact = (event) => {
    const id = event.currentTarget.dataset.id;

    this.setState(prevState => {
      const newContactsList =
        prevState.contacts.reduce((acc, con) => {
        if (con.id !== id) {
          acc.push(con)
        };
        return acc
        }, [])
      return {contacts: newContactsList}
    }
    );
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
                handlerDeleteContact={this.handlerDeleteContact}
              />
            </ul>
            }
        </div>
      </div>
    );
  };
};


export default ContactsBook;