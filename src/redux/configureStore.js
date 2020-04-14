import {createStore} from 'redux'

import {Reducer, initialState, initilaState} from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
      Reducer,
      initilaState  
    );

    return store;
}