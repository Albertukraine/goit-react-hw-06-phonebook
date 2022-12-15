import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'numberValue',
    initialState: [],
    reducers: {
      setContact(state, action) {
        state.push(action.payload);
      },
      deleteContact(state, action) {
      const index = state.filter(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  });
export const { setContact, deleteContact } = contactSlice.actions;