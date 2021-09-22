import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />

        <div className="app_body">
          <Sidebar />
        </div>
      {/* Add Body */}
      {/* Sidebar */}
      {/* Feed */}
    </div>
  )
}

export default App
