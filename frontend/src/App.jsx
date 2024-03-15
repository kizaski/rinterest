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
      // setBookmark('Y2JVSG81V2sxcmNHRlpWM1J5VFVaU1YxWllhRlJXTVVreVZsZDRRMVV4U1hsVlZFWlhVbnBXTTFWNlNrZFdNa3BIWVVaYVdGSXlhRkZXUm1Rd1ZtMVJlRlZ1VWs1V1ZGWlBXVmh3UjFac1draE5WRkpWVFd0YWVWUnNhRXRYUmxsNlVXMUdWVlpzY0hsYVZscExWbFpXZEZKc1RsTmlXRkV4Vm10U1IxVXhUbkpPVlZwUVZsWmFXVmxzYUZOVU1YQllaRVYwYWxKc1NubFhhMVpoWWtaYVZWWnVhRmRpUmtwVVYxWmFTbVF3TVZWV2JGWk9VbXR3U1ZkWGVGWmxSVFYwVW10b2FGSnJTbGhWYlhoYVRXeFplVTFZWkZOaGVrWjVWR3hhVjFadFNsVlNibEpXWWtaS1dGVnFSbUZqVmxKeFZHeEdWbFpFUVRWYWExcFhVMWRLTmxWdGVGZE5XRUpLVm10amVHSXhiRmRUV0dob1RUSlNXVmxVUmt0VU1WSlhWbGhvYWxZd2NFbFpWVlUxWVVkRmVGZFljRmRTTTFKeVZqSXhWMk15VGtkV2JFcFlVakpvYUZadGRHRlpWMDVYVlc1S1ZtSnJOVzlVVm1RMFpVWldjMVZzVGxWaVJYQkpXWHBPYzFaV1dsZFRia1poVmpOTmVGVnNXbE5YVjBwR1QxWmtVMDFFUWpOV2FrbDRaREZrZEZac1pHbFRSa3BXVm10Vk1XRkdiRmhOVjNCc1lrWktlbGRyV21GVWJFcDFVVzVvVmxac1NraFdSRVpMVWpKS1JWZHNhRmRpUlhCRVYyeGFWbVZIVWtkVGJrWm9VbXhhYjFSV1duZFhiR1IwWkVWYVVGWnJTbE5WUmxGNFQwVXhObFJVVWs1bGJHdDVWRmN4U2sxR2NFVlhiV3hoWWxWcmQxUnJVbkpsVm14WVVtMXNXbFpGVmpOWFYzQnVUVEZyZVZKWWNFOVdSVEF3VjJ4U1FrMVdiRFpWVkU1aFlsWktjRmRyWkU5aVJteHhWbGh3V2sxc1NtOVVWbVJHWkRBeFNGTnRNVTVoYkhCdlZGWmtWazFzYTNwbFJUbFRWbTFSTkdaSFZteFBSRWt3VG1wRk1FNVVVVE5OVkUxNFRWZEplRTVFVm0xYWJVWnFXWHBWTkU5WFdtbFpWRTAwVFVkR2FVOUVVbTFOVkdoc1RtcEZlRTFxUlRKT01rbDVXbXBzYUZscVNYaE9SRlUwVG5wYWFFMTZaRGhVYTFaWVprRTlQUT09fFVIbzVSVlJHVGxCV2VrWnBaVmRLUlZWVU1XWk9WRUptVEZSR09FMXRVVEpOUjFWNFdYcG5lVTE2VFRKYWFsVjVUa1JKTUZsVVJUVk5lbVJ0VG0xVk0wNUVZelZaVkVreFQxZGFhMXBYVFRCTlYwazBUbnBrYlU1SFdYaE5SRVV5VFcxUmVrNHlTbXhOZWsxM1RsUm5lRTFJZUU5U1ZtUTR8Tm9uZXxlOGEzNTFkNTYyZmY0NWI0MTk1OWJmMWRmMTNlNGM0NTkwYTlhZDJiOGQwZjE5OWRlNmM1ZmFmZDJkZTk5ZGQ5fE5FV3w=')
      // console.log(res.data.resource.options.bookmarks[0])
      
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
      {/* on search items-center becomes items-start */}
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
      <div id='pins-container' className='columns-3xs gap-4'>
        {pins && pins.map((pin) => {
          return <img className='mb-8' key={pin.images['736x'].url} src={ pin.images['736x'].url } />
        })}
      </div>
      {pins && 
      <div>
        <button onClick={handleLoadMore} className="bg-blue-400 text-white px-2 py-2 rounded-3xl w-full">Load more</button>
      </div>
      }
      
    </>
  )
}

export default App
