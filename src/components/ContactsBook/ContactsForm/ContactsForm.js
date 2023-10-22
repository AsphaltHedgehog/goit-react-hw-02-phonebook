import React, {Component} from "react";


class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };
  
  // ================================================

  handlerInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  // ================================================

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Enter a name and number');
      this.reset()
      return;
    };
    
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: ''});
  };

  //========================================================


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerInputChange}
            placeholder="enter name"
            required />
          </label>
        <br />
          <label>
            Number
            <br />
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handlerInputChange}
              placeholder="enter telephone number"
              required />
        </label>
        <br />
        <button type='submit'>Add Contact</button>
      </form>
    </div>
    );
  };
};



export default ContactsForm;