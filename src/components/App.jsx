import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemsSlice';
import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentLS = JSON.parse(localStorage.getItem('contactsList'));
    if (currentLS?.length > 0) {
      currentLS.forEach(({ id, name, number }) => dispatch(addItem({ id, name, number })));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;
