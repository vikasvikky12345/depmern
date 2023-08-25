import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './pages/Create';
import Update from './pages/Update';
import User from './pages/User';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
