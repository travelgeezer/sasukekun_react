import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';
import blog from './blog';

const rootReduces = combineReducers({
  home,
  blog,
  form: formReducer
});

export default rootReduces;
