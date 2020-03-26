import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import immutableTransform from "redux-persist-transform-immutable";
import reducers from './reducers';
const persistConfig = {
    transforms: [immutableTransform()],
    key:"root",
    storage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);

export default () => {
    let store = createStore(
        persistedReducer,
        composeEnhancers(middlewares)
    )
    let persistor = persistStore(store)
    return { store, persistor }
}