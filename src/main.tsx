import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Home from './routes/home/home';
import UserManagement from './routes/user-management/components/user-management';
import UserDetail from './routes/user-management/routes/user-detail/';
import { store } from './store';

// export const prepare = () => {
//   if (process.env.NODE_ENV === 'development') {
//     return import('./mocks/browser').then(({ worker }) => {
//       return worker.start({ onUnhandledRequest: 'bypass' });
//     });
//   }

//   return Promise.resolve();
// };

// prepare()
//   .then(() => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <Provider store={store}>
//           <Router>
//             <Routes>
//               <Route path="/" element={<App />}>
//                 <Route index element={<Home />} />
//                 <Route path="users" element={<UserManagement />} />
//                 <Route path="users/detail/:id" element={<UserDetail />} />
//               </Route>
//             </Routes>
//           </Router>
//         </Provider>
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
//   })
//   // eslint-disable-next-line no-console
//   .catch(console.error);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="users/detail/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
