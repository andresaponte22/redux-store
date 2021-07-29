import { createStore } from 'redux';
import reducer from '../utils/reducers.js'

const reduxStore = createStore(reducer);

export default reduxStore; 