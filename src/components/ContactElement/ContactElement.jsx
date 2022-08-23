import styles from './ContactElement.module.scss';
import PropTypes from 'prop-types';

export const ContactElement = ({id, name, number, deleteContact}) => {
  const {item, btn, link, wrapper} = styles;

  return (
    <>
      <li className={item}>
        <div className={wrapper}>
          <span>{name}: {number}</span>
          <a className={link} href={`tel:${number}`}> </a>
          <button 
            className={btn} 
            type="button" 
            onClick={deleteContact(id)}>
          </button>
        </div>
      </li>
    </>
  )
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, 
  deleteContact: PropTypes.func.isRequired,
}

export default ContactElement;