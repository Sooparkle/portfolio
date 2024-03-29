import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PAGE_LIST } from './contents';
import { Provider } from 'react-redux';
import { Root } from './pages/Root';
import { store } from './store/store';
import { Projects } from './pages/Projects';
import { Who } from './components/Who';
import { Contact } from './components/Contact';
// import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path :`${PAGE_LIST.ROOT}`,
    element :<Root />,
    children:[
      {
        path: `${PAGE_LIST.ROOT}`,
        element:<App />,
      },
      {
        path:`${PAGE_LIST.PROJECTS}`,
        element:<Projects />
      },
      {
        path:`${PAGE_LIST.WHO}`,
        element:<Who />,
      },
      {
        path :`${PAGE_LIST.CONTACT}`,
        element:<Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
