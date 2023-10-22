import React, { Component } from "react";

class ContactsList extends Component {

  renderContactsHandler = () => {
    const { contacts } = this.props;
    
    return contacts.map(({ id, name, number }) => (
      <li key={id}>{name}: {number}</li>
    ));
  };

  renderFilteredContactsHandler = () => {
    const { filter, contacts } = this.props;
    
    const filteredList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return filteredList.map(({ id, name, number }) => (
      <li key={id}>{name}: {number}</li>
    ));
  }; 

  render() {
    return (
      <ul>
        {this.props.filter === '' ?
          this.renderContactsHandler() :
          this.renderFilteredContactsHandler()}
      </ul>
    );
  };
};



export default ContactsList;