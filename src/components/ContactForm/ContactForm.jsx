import React, { Component } from "react";
import styles from './ContactForm.module.scss';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
}

export class ContactForm extends Component {
  state = {...INITIAL_STATE}

  handleChange = evt => {
    const {name, value} = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setContacts(this.state);
    this.setState({...INITIAL_STATE});
  }

  render() {
    const {name, number} = this.state;
    const {form, label, input, btn} = styles;

    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={label}>
          Name
          <input
            className={input}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={label}>
          Number
          <input
            className={input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={this.handleChange}
          />
        </label>

        <button className={btn} type="submit">Add contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  setContacts: PropTypes.func.isRequired,
}

export default ContactForm;