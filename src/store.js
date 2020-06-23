import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import clienteReducer from './reducers/clientReducer'

const reducers = combineReducers({
    rcliente: clienteReducer,
    routing: routerReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)