import style from './NameList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/store';




// console.log("delete Contact", deleteContact.toString);


export const NameList = () => {
  // const { contacts, deleteContact } = props;
  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();
  // const deleteContact = () => {console.log("delete contact click");}
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p className={style.contactWrapper}>
            <span className={style.nameText}>{contact.name}</span>
            <span className={style.numberValue}>{contact.number}</span>
          </p>
          <button name={contact.id} className={style.deleteBtn} 
          // onClick={dispatch(deleteContact(contact.id))}
          >delete</button>
          
        </li>
      ))}
    </ul>
  );
};
