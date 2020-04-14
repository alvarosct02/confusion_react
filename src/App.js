import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
