import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Comments } from './comments'
import { Dishes } from './dishes'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';



import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      comments: Comments,
      dishes: Dishes,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({
        feedback: InitialFeedback
    })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}