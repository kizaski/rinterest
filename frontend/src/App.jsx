import { useState } from 'react'
import axios from 'axios'

function App() {
  const [pins, setPins] = useState([])

  const handleNewSearch = async () => {

    const res = await axios.get('BaseSearchResource', {
      params: { 
        q: 'cats'
      }
    })

    setPins([res])

    console.log(res)
  }

  return (
    <>
      {/* on search items-center becomes items-start */}
      <div className="flex justify-center items-center h-screen">
        <input type="text" placeholder="Search Pinterest" className="w-full sm:w-3/12 border border-gray-300 px-4 py-2 rounded-3xl focus:border-blue-500" />
        <button onClick={handleNewSearch} className="bg-blue-400 text-white px-4 py-2 rounded-3xl ml-2">Search</button>
      </div>
      <div>
        {pins.map((pin) => {
          <div>{pin}</div>
        })}
      </div>
    </>
  )
}

export default App
