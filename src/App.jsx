import { useState } from 'react';
import Lane from './components/Lane';
import Navbar from './components/Navbar';
import AddLane from './components/AddLane';

function App() {
  // // empty array for our lanes to keep track of them
  // const [lanes, setLanes] = useState([]);

  return (
    <>
      {/* the navbar/header */}
      <Navbar />
      {/* the lane holder, in a flex container for L->R displaying */}
      <div className='flex'>
        {/* our lane */}
        <Lane subreddit="baseball"/>
        {/* our add lane button that will dynamically add lanes */}
        <AddLane />
      </div>
    </>
  )
}

export default App
