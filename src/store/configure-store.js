import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReduces from '../reduces';

const middlewares = [];


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// configure saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);


export default function configureStore(initialStore) {
  const store = createStoreWithMiddleware(rootReduces, initialStore, enhancers);
  // install saga run
  store.runSaga = sagaMiddleware.run; // invoke load custom saga after createStoreWithMiddleware
  store.close = () => store.dispatch(END);

  return store;
}
