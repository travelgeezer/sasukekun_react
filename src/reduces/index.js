import { combineReducers } from 'redux';
import home from './home';
import blog from './blog';

const rootReduces = combineReducers({
  home,
  blog
});

export default rootReduces;
