import { useDispatch } from 'react-redux';
import css from './contact.module.css';
import { deleteContact } from '../actions/contactActions';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(deleteContact(id));
  }

  return (
    <li className={css.contact}>
      <div className="forInfo">
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}