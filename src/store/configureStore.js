import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';

export default function configureStore(initialState){
   const finalCreateStore = compose(
     applyMiddleware(thunkMiddleware),
     window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

   const store = finalCreateStore(reducers, initialState)
   return store
}
