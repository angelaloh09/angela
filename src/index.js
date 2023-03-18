import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import Thoughts from './components/Thoughts';
import Home from './components/Home';
import Cooking from './components/Cooking';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookshelf' element={<Bookshelf/>}/>
      <Route path='/thoughts' element={<Thoughts/>}/>
      <Route path='/cooking' element={<Cooking/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);