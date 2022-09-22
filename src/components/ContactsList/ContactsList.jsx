import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/itemsSlice';
import s from './ContactsList.module.css';
import { deleteFromLS } from '../../service/local-storage';

export function ContactsList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteItem(id));
    deleteFromLS(id);
  }

  return (
    <ul className={s.contactsList}>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <div className={s.contact}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
