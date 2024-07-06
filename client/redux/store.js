import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist'; // redux-persist to store user-logged-in info in localstorage, (to keep user loggedIn even after page refresh)
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({  //export configureStore
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => //created middleware
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store);