import React from 'react'

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className='flex gap-3'>
        <input 
            type="text"
            className='rounded-lg pl-3'
            placeholder='Enter city name'
            name='search'
            value={search}
            onChange={(event)=>setSearch(event.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
