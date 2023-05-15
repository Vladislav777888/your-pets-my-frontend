import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { rootReducer } from './root-reducer';
import { authInitialState } from './auth/authSlice';

const initState = {
  auth: authInitialState,
  // contacts: contactsInitState,
  // filter: filterInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
