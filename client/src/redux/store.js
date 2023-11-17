import { combineReducers, configureStore } from '@reduxjs/toolkit'
import useReducer from "./user/userSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({user : useReducer});

const persistconfig = {
  key : 'root',
  storage,
  version : 1
}
 
const persistedReducer = persistReducer(persistconfig, rootReducer)


export const store = configureStore({ 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          serializableCheck: false
        })
      },

})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export const persister = persistStore(store)