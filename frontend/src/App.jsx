import { useState } from 'react'
import axios from 'axios'

function App() {
  const [pins, setPins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleNewSearch = async () => {
    try {
      const res = await axios.get('BaseSearchResource', {
        params: { 
          q: searchTerm
        }
      })
  
      setPins(res.data.resource_response.data.results)
  
      console.log(res.data.resource_response.data.results)

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
      {/* on search items-center becomes items-start */}
      <div className="flex justify-center items-center h-screen">
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
      <div className='columns-3xs gap-4'>
        {pins && pins.map((pin) => {
          return <img className='mb-8' key={pin.images['736x'].url} src={ pin.images['736x'].url } />
        })}
      </div>
    </>
  )
}

export default App
