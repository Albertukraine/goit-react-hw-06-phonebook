import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactSlice } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedSubmitReducer = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    numberValue: persistedSubmitReducer,
    filterValue: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);