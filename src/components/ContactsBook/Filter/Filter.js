import React, { Component } from "react";

import PropTypes from "prop-types";

class Filter extends Component {

    handlerInputChange = event => {
    const { contactsFilterHandler } = this.props;
    contactsFilterHandler(event.currentTarget.name, event.currentTarget.value);
  };

  render() {
    return (
      <input
        type="text"
        name='filter'
        value={this.props.filter}
        onChange={this.handlerInputChange}
        placeholder="find contacts by name"
      ></input>
    )
  };
};


Filter.propTypes = {
  filter: PropTypes.string,
  contactsFilterHandler: PropTypes.func,
};


export default Filter;