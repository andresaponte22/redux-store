import { createStore } from 'redux';
import reducer from '../utils/reducers'

const reduxStore = createStore(reducer);

export default reduxStore; 