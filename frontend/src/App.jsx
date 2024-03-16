import { useState, useRef } from 'react'
import axios from 'axios'

function App() {
  const [pins, setPins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchBarRef = useRef(null)
  const [bookmark, setBookmark] = useState('')

  const handleNewSearch = async () => {
    try {
      const res = await axios.get('BaseSearchResource', {
        params: { 
          q: searchTerm
        }
      })
  
      setPins(res.data.resource_response.data.results)
      
      setBookmark(res.data.resource.options.bookmarks[0])
      
      if (searchBarRef.current) {
        searchBarRef.current.className = searchBarRef.current.className.replace('items-center h-screen','items-start my-7')
      }

    } catch (err) {
      console.error( 'Error fetching data:', err )
    }
  }

  const handleLoadMore = async () => {
    try {
      const res = await axios.get('BaseSearchResource', {
        params: { 
          q: searchTerm,
          bookmark: bookmark
        }
      })
  
      const newPins = pins.concat(res.data.resource_response.data.results)
      setPins(newPins)

      setBookmark(res.data.resource.options.bookmarks[0])
      
      if (searchBarRef.current) {
        searchBarRef.current.className = searchBarRef.current.className.replace('items-center h-screen','items-start my-7')
      }

    } catch (err) {
      console.error( 'Error fetching data:', err )
    }
  }

  const handleKeyDown = ( event ) => {
    if ( event.key === 'Enter' ) {
      handleNewSearch()
    }
  }

  return (
    <>
      <div id='search-bar' ref={searchBarRef} className="flex justify-center items-center h-screen">
      {/* <div id='search-bar' ref={searchBarRef} className="flex justify-center items-start my-7"> */}
        <input 
          type="text" 
          placeholder="Search Pinterest" 
          className="w-full sm:w-3/12 border border-gray-300 px-4 py-2 rounded-3xl focus:border-blue-500" 
          value={ searchTerm }
          onChange={ ( e ) => setSearchTerm( e.target.value ) }
          onKeyDown={ handleKeyDown }
        />
        <button onClick={handleNewSearch} className="bg-blue-400 text-white px-4 py-2 rounded-3xl ml-2">Search</button>
      </div>

      {/* <div id='pins-container' className='columns-2 sm:columns-3xs gap-4'> */}
      <div id='pins-container' className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4'>
        {pins && pins.map((pin) => {
          return <img className='mb-8' key={pin.images['736x'].url} src={ pin.images['736x'].url } />
        })}
      </div>

      {pins.length !== 0 && 
      <div>
        <button onClick={handleLoadMore} className="bg-blue-400 text-white px-2 py-2 rounded-3xl w-full">Load more</button>
      </div>
      }
      
    </>
  )
}

export default App
