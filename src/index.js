import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';

// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback="Loading..">
      <App />
    </Suspense>
  </BrowserRouter>,
);
