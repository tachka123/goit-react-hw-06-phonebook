import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Style from './PB.module.css';
import anim from './animation/logoAnim.module.css';
import CreateContacts from './CreateContact/CreateContactContainer';
import ListItemsContainer from './ListItems/ListItemsContainer';
import FilterContainer from './Filter/FilterContainer';

const PhoneBook = () => {
  return (
    <>
      <CSSTransition appear in classNames={anim} timeout={800} unmountOnExit>
        <h1 className={Style.logo}>PhoneBook</h1>
      </CSSTransition>
      <CreateContacts />
      <FilterContainer />
      <ListItemsContainer />
    </>
  );
};

export default PhoneBook;
