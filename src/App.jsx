import { AddContactForm } from './components/AddContactForm/AddContactForm';
import { SearchFilter } from './components/SearchFilter/SearchFilter';
import { ContactsList } from './components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <AddContactForm />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <SearchFilter />
      <ContactsList />
    </div>
  );
};
