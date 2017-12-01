import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';
import blog from './blog';
import register from './register';

const rootReduces = combineReducers({
  home,
  blog,
  register,
  form: formReducer
});

export default rootReduces;
