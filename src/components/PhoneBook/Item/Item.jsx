import React from 'react';
import T from 'prop-types';
import Style from './item.module.css';

const Item = ({ props: { name, number, id }, onDelete }) => {
  Item.propTypes = {
    props: T.shape({ name: T.string, number: T.string, id: T.number })
      .isRequired,
    onDelete: T.func.isRequired,
  };

  return (
    <li className={Style.container}>
      <span>Name: {name}</span>
      <span>Number: {number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete User
      </button>
    </li>
  );
};

export default Item;
