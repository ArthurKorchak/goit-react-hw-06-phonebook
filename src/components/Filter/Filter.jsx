import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  dispatch(setFilter('aaaa'));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        // onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
}

// const filterOperator = event => {
//   setFilter(event.target.value.toLowerCase());
// };
