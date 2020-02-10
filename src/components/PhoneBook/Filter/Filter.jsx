import React from 'react';
import T from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import anim from '../animation/appearScale.module.css';
import Style from './filter.module.css';

const FilterContainer = ({ contacts, onChange }) => {
  FilterContainer.propTypes = {
    contacts: T.shape({ length: T.number }).isRequired,
    onChange: T.func.isRequired,
  };
  return (
    <CSSTransition
      in={contacts.length > 1}
      classNames={anim}
      timeout={800}
      unmountOnExit
    >
      <div className={Style.container}>
        <span>Find contact</span>
        <input
          onChange={e => onChange(e.target.value)}
          placeholder="Find"
          type="text"
          name=""
          id=""
        />
      </div>
    </CSSTransition>
  );
};

export default FilterContainer;
