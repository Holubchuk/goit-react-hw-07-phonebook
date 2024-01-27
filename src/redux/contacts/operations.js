import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'services/api';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await requestContacts();
      return contacts; // Action Payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (newContactData, thunkApi) => {
    try {
      const contacts = await requestAddContact(newContactData);
      return contacts; // Action Payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const contacts = await requestDeleteContact(contactId);
      return contacts; // Action Payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
