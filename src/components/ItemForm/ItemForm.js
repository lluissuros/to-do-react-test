import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemForm.css';
import Input from '../Input';
import Button from '../Button';

class ItemForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    value: ''
  };

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="ItemForm" onSubmit={(e) => this.handleFormSubmit(e)}>
        <Input onChange={(e) => this.handleInputChange(e)} value={this.state.value} />
        <Button className="ItemForm-button" label="Add" />
      </form>
    );
  }
}

export default ItemForm;
