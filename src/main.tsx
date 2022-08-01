import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Home from './routes/home/home';
import configureStore from './routes/user-management/UserManagement/configureStore';
import UserManagement from './routes/user-management/UserManagement';

export const prepare = () => {
  if (process.env.NODE_ENV === 'development') {
    return import('./mocks/browser').then(({ worker }) => {
      return worker.start({ onUnhandledRequest: 'bypass' });
    });
  }

  return Promise.resolve();
};

prepare()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={configureStore()}>
          <Router>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="users" element={<UserManagement />} />
              </Route>
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
