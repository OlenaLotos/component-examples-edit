import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    login: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  loginInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = event => {
    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', login: '' });
    this.setState({ licence: false });
    this.setState({ experience: 'junior' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.loginInputId}>
          Login
          <input
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
            id={this.loginInputId}
          />
        </label>

        <p>Your lavel:</p>
        <label htmlFor="">
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <label htmlFor="">
          Middle{' '}
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <label htmlFor="">
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />{' '}
          Agree with conditions
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
