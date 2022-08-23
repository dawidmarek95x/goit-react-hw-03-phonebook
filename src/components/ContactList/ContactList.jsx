import ContactElement from 'components/ContactElement/ContactElement';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact}) => {
  const {list, info} = styles;

  return (
    <>
        {(contacts.length !== 0)
          ? <ul className={list}>
              {contacts.map(c => <ContactElement key={c.id} id={c.id} name={c.name} number={c.number} deleteContact={deleteContact}/>)}
            </ul>
          : <p className={info}>No contacts in the phonebook</p>
        }
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;