import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';
import './styles/chat.scss';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Routes>
          {/* Correct usage of element prop */}
          <Route path='/room/:roomId' element={<ChatRoom />} />
          {/* Wrap the <h2> inside the element prop */}
          <Route path='/' element={<h2>Select a room to join</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
