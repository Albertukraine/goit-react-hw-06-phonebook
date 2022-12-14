import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';



// тестовый Див
const FindState = () => {
  const value = useSelector( state => state.filterValue);
  return (<>
  <div>{value} RUUUM</div></>);
}


export function App() {
  const [contacts, setContacts] = useState([]);
 

  useEffect(() => {
    console.log('MOUNT');
    const contactData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(contactData);
if (parsedData) {
  setContacts(parsedData);

}
  }, []);

  // useEffect(() => {
  //   console.log('UPDATE');
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  const onSubmitMoveDataToApp = evt => {
    const contact = {
      id: nanoid(),
      name: evt.name,
      number: evt.number,
    };

   

    if (contacts.map(item => item.name).includes(evt.name))
      return alert(`${evt.name} is already in contacts`);

    setContacts(prevState => [...prevState, contact]);
  };

  const onDeleteContact = evt => {
    const contactToDeleteID = evt.currentTarget.name;

    setContacts(contacts.filter(item => item.id !== contactToDeleteID));
  };

 
  const filterValueFromStore = useSelector( state => state.filterValue);
  const contactsFromStore = useSelector(state => state.contact);
  // const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contactsFromStore.filter(contact =>
    contact.name.toLowerCase().includes(filterValueFromStore)
  );

  return (
    <>
      <Form moveData={onSubmitMoveDataToApp} />
      <Filter />
      <NameList contacts={visibleContacts} deleteContact={onDeleteContact} />
      <FindState/>
    </>
  );
}
