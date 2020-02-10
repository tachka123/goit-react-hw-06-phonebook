import React, { Component } from 'react';
import { v4 } from 'uuid';
import T from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { withAlert } from 'react-alert';
import Style from './createContact.module.css';
import Anim from '../animation/appearScale.module.css';

class CreateContact extends Component {
  static propTypes = {
    contacts: T.arrayOf(
      T.shape({
        name: T.string,
      }),
    ).isRequired,
    onAdd: T.func.isRequired,
    alert: T.shape.isRequired,
    setContactsFromLS: T.func.isRequired,
  };

  static defaultProps = {};

  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const { setContactsFromLS } = this.props;
      setContactsFromLS(JSON.parse(contacts));
    }
  }

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { contacts, onAdd, alert } = this.props;
    const { name, number } = this.state;
    const findSameContact = contacts.find(item => item.name === name);
    if (findSameContact) {
      alert.show(`Contact with name like entered is already created! `);
    } else if (name === '' || !Number.parseInt(number, 10)) {
      alert.show(`Entered data is not correct!`);
    } else {
      onAdd({ name, number, id: v4() });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { number, name } = this.state;
    return (
      <CSSTransition appear in classNames={Anim} timeout={800} unmountOnExit>
        <form onSubmit={this.onSubmit} className={Style.container}>
          <div>
            <span>Name</span>
            <input
              className={Style.input}
              value={name}
              onChange={this.onChange}
              name="name"
              type="text"
            />
          </div>
          <div>
            <span>Number</span>
            <input
              className={Style.input}
              value={number}
              onChange={this.onChange}
              name="number"
              type="text"
            />
          </div>
          <button className={Style.button} type="submit">
            Create User
          </button>
        </form>
      </CSSTransition>
    );
  }
}

export default withAlert()(CreateContact);
