import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import PhoneBook from './PhoneBook/PhoneBook';
import style from './variables.module.css';
import errorOptions from './PhoneBook/Error/error';

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...errorOptions}>
      <div className={style.container}>
        <PhoneBook />
      </div>
    </AlertProvider>
  );
};

export default App;
