import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// export const setContact = createAction('phoneNumber/numberValue');
// export const setFilterValue = createAction('filter/filterValue');
// export const deleteContact = createAction("contact/deleteContact");


// const filterReducer = createReducer('',{
//     [setFilterValue]: (state, action) => action.payload,
// })



const contactSlice = createSlice({
  name: 'numberValue',
  initialState: [],
  reducers: {
    setContact(state, action) {state.push(action.payload)},
    deleteContact(state, action) {const index = state.findIndex(contact => contact.id === action.payload);
      console.log("index",action.payload);
      state.splice(index, 1);}
    }
  });
  
  const filterSlice = createSlice({
    name: 'filterValue',
    initialState: '',
    reducers: {
      setFilterValue(state, action) { return action.payload
      },
    },
  });
// console.log(filterSlice);

// const contactReducer = createReducer([], {
// [setContact]: (state, action) => [...state, action.payload],
// [deleteContact]: (state, action) => {

//   const index = state.findIndex(contact => contact.id === action.payload);
//   console.log("index",action.payload);
//   state.splice(index, 1);
// }
// });




export const {setFilterValue} = filterSlice.actions;
export const {setContact, deleteContact} = contactSlice.actions;

export const store = configureStore({
  reducer: {
    numberValue: contactSlice.reducer,
    filterValue: filterSlice.reducer,
  },
});

console.log("STORE",store);