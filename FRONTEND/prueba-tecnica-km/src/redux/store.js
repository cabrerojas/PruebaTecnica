import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers'

export const history = createBrowserHistory();

export default function configureStore() {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancer = composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )

    const store = createStore(
        createRootReducer(history),
        enhancer
    )
    return store;
}