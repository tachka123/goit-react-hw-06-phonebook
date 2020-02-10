import React from 'react';
import T, { string } from 'prop-types';
import { v1 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Style from './listItems.module.css';
import Item from '../Item/Item';
import anim from '../animation/appearScale.module.css';
import anim2 from '../animation/appearLeft.module.css';

const ListItems = ({ contacts, onDelete, filter }) => {
  ListItems.propTypes = {
    contacts: T.arrayOf(T.shape).isRequired,
    onDelete: T.func.isRequired,
    filter: string.isRequired,
  };

  if (contacts.length > 1)
    localStorage.setItem('contacts', JSON.stringify(contacts));

  return (
    <ul className={Style.container}>
      <CSSTransition
        in={contacts.length > 0}
        classNames={anim}
        timeout={800}
        unmountOnExit
      >
        {!filter.length ? (
          <TransitionGroup>
            {contacts.map(item => (
              <CSSTransition appear classNames={anim2} timeout={800} key={v1()}>
                <Item props={item} onDelete={onDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <TransitionGroup>
            {contacts
              .filter(({ name }) => name.includes(filter))
              .map(item => (
                <CSSTransition
                  appear
                  classNames={anim2}
                  timeout={800}
                  key={v1()}
                >
                  <Item props={item} onDelete={onDelete} />
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </CSSTransition>

      <CSSTransition
        in={contacts.length === 0}
        classNames={anim}
        timeout={800}
        unmountOnExit
      >
        <span>
          <h2>Your list of contacts is empty</h2>
        </span>
      </CSSTransition>
    </ul>
  );
};

export default ListItems;
