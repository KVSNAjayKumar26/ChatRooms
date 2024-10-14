import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const rooms = ['General', 'Tech', 'Games', 'Music'];
  return (
    <div className='sidebar'>
        <h2>Chat Rooms</h2>
        <ul>
            {rooms.map((room, index) => (
                <li key={index}>
                    <Link to={`/room/${room}`}>{room}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Sidebar;