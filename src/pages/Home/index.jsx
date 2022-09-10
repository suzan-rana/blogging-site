import React, { useState, useEffect} from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header/index'
import SearchBar from '../../components/Home/SearchBar/index'
import { blogList } from '../../config/data'

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('')

  //search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();


  }
  // serach for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter( (blog) =>{
      return blog.category.toLowerCase().includes(searchKey.toLowerCase().trim());
    
    } )
    console.log("Hello world.")
    setBlogs(filteredBlogs);
  }
  

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)

  }

  const clearSearch = () => {
    setBlogs(blogList);
    setSearchKey('')
  }
  return (
    <div>
      <Header />

      <SearchBar handleSearchResults={handleSearchResults} value={searchKey} formSubmit={handleSearchSubmit} handleSearchKey={handleSearchKey} clearSearch={clearSearch} />

    {/* if no blogs show empty  */}
    {blogs.length ? <BlogList blogs={blogList}/> : <EmptyList /> } 
      
      
    </div>
  )
}

export default Home;