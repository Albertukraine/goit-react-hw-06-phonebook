import React from 'react';
import { useEffect } from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';




// тестовый Див
// const FindState = () => {
//   const value = useSelector( state => state.filterValue);
//   return (<>
//   <div>{value} RUUUM</div></>);
// }


export function App() {
 

//   useEffect(() => {
//     console.log('MOUNT');
//     const contactData = localStorage.getItem('contacts');
//     const parsedData = JSON.parse(contactData);
// if (parsedData) {
//   setContacts(parsedData);

// }
//   }, []);


 

 
  return (
    <>
      <Form />
      <Filter/>
      <NameList/>
    </>
  );
}
