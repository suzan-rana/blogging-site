import React from 'react'
import './styles.css'

const SearchBar = ({value, handleSearchResults, clearSearch, formSubmit, handleSearchKey}) => {
  return (
    <div className='searchBar-wrap'>
        <form action="#" onSubmit={formSubmit}>

            {/* onchange */}
            <input onChange={handleSearchKey} type="text" placeholder='Search by Category' value={value} />
            { value && <span onClick={clearSearch}>X</span>}
            <button onClick={handleSearchResults}>Go</button>
        </form>
    </div>
  )
}

export default SearchBar;