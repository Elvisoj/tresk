import React, { useState } from 'react';
import Navbar from './menu/Navbar';
import '../styles/Header.css'
import SearchBar from './menu/SearchBar';
import { UseDashboardContext } from '../dataManagement/dashboardContext';

function Header() {

  const { searchTerm, setSearchTerm } = UseDashboardContext()
  
  return (
    <header className='header'>
      <Navbar />
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
    </header>
  );
}

export default Header;
