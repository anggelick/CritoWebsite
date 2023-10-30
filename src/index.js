import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NotFound from './views/NotFound';
import Services from './views/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/news' element={<News /> } />
    <Route path ='/services' element={<Services />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
