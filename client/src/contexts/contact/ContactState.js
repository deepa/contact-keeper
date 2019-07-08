import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: 'professional',
        name: 'Ocean spray',
        email: 'ocean@example.com',
        phone: '1234567890'
      },
      {
        id: 2,
        type: 'professional',
        name: 'Blue sky',
        email: 'sky@example.com',
        phone: '1234567890'
      },
      {
        id: 3,
        type: 'personal',
        name: 'Harry Potter',
        email: 'harry@example.com',
        phone: '111-111-1111'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
