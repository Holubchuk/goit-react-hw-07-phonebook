import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
