import React, { Component } from "react";

import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

import css from './contactsbook.module.css'


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
    const { handlerDeleteContact,
      contactsFilterChange,
      contactSubmitHandler,
      state } = this;
    const { filter, contacts } = state;
    
    return (
      <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactsForm onSubmit={contactSubmitHandler} />
        <div>
          <h2 className={css.title}>Contacts</h2>
          {contacts.length > 0 &&
            <div>
              <Filter
                filter={filter}
                contactsFilterHandler={contactsFilterChange}
              />
              <ul className={css.list}>
                <ContactsList
                  contacts={contacts}
                  filter={filter}
                  handlerDeleteContact={handlerDeleteContact}
                />
              </ul>
            </div>
          }
        </div>
      </div>
    );
  };
};




export default ContactsBook;