import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

export function Contact({ deleteContact, currentContacts }) {
    return currentContacts.map(item => (
        <li key={item.id}>
            <div className={s.contact}>
                <p>
                    {item.name}: <span>{item.number}</span>
                </p>
                <button type="button" name={item.id} onClick={deleteContact}>
                    Delete
                </button>
            </div>
        </li>
    ));
};

Contact.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};