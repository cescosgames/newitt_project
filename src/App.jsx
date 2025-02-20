import { useState } from 'react';
import Lane from './components/Lane';
import Navbar from './components/Navbar';
import AddLane from './components/AddLane';

function App() {
  // lanes will be dynamically added here, start by declaring
  const [lanes, setLanes] = useState([ {subreddit: "baseball"} ]);

  // our add lane function that will get passed down to our modal
  const addLane = (newLane) => {
    // let's do a check that we don't already have that subreddit or else react gets mad at us for non-unique keys. Using .some function to check if an item satisfies the condition, subreddit === subreddit
    if (lanes.some((lane) => lane.subreddit === newLane.subreddit)) {
      console.log('this subreddit already exists');
      return
    } else {
      // set lanes takes our previous array and the ellipses (aka spread operator) copies all the elements of our previous array into a new array and adds our new array to the end of previous array
      setLanes((prevLanes) => [...prevLanes, newLane]);
      console.log('added a lane');
      // this function is passed from our addlane -> modal and called when 'adding subreddit' from our modal
    }
  }

  return (
    <>
      {/* the navbar/header */}
      <Navbar />
      {/* the lane holder, in a flex container for L->R displaying */}
      <div className='flex'>
        {/* our lanes, instantiated using map */}
        {lanes.map((lane, index) => 
          <Lane key={lane.subreddit} subreddit={lane.subreddit}/>
        )}
        {/* <Lane subreddit="baseball"/> */}

        {/* our add lane button that will dynamically add lanes, passing function down to addLane component, passing down to modal */}
        <AddLane onClickAdd={addLane}/>
      </div>
    </>
  )
}

export default App
