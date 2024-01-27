import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts.contacts.items;
export const selectFilter = store => store.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(profile =>
      profile.name.toLowerCase().includes(filter.trim().toLowerCase())
    )
);
