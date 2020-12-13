import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const inputName = e.target.name;
    this.setState({ [inputName]: e.target.value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  duplicateСheck = () => {
    let isDublicate = false;

    this.props.contacts.map(item => {
      if (item.name.toLowerCase() === this.state.name.toLowerCase()) {
        alert(`${item.name} is already in contacts.`);
        isDublicate = true;
      }
    });

    return isDublicate;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name && this.state.number && !this.duplicateСheck()) {
      this.props.addContact(this.state.name, this.state.number);
      this.resetState();
    }
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Phone number
          <input
            name="number"
            type="number"
            placeholder="Enter number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
