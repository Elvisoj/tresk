import React from 'react'

function SearchBar(props) {
  return (
    <div className='search-bar'> 
      <i className="fas fa-search"></i>
      <input type="search" value={props.searchTerm} onChange={(e)=> props.setSearchTerm(e.target.value)} placeholder='Search TresK...' />
    </div>
  )
}

export default SearchBar
