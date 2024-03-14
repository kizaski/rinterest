import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* on search items-center becomes items-start */}
      <div className="flex justify-center items-center h-screen">
        <input type="text" placeholder="Search Pinterest" className="w-full sm:w-3/12 border border-gray-300 px-4 py-2 rounded-3xl focus:border-blue-500" />
        <button className="bg-blue-400 text-white px-4 py-2 rounded-3xl ml-2">Search</button>
      </div>
    </>
  )
}

export default App
