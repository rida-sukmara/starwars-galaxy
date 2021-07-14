import { combineReducers } from 'redux';
import PlanetReducer from './PlanetReducer';

const AppReducer = combineReducers({
  planet: PlanetReducer,
});

export default AppReducer;
