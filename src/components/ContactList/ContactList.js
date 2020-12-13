import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {contacts.map(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) && (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <button id={item.id} type="button" onClick={deleteContact}>
              Delete
            </button>
          </li>
        ),
    )}
  </ul>
);

export default ContactList;
