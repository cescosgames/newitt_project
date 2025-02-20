import { useState } from 'react';
import Lane from './components/Lane';
import Navbar from './components/Navbar';
import AddLane from './components/AddLane';
import Footer from './components/Footer';

function App() {
  // lanes will be dynamically added here, start by declaring
  const [lanes, setLanes] = useState([ {subreddit: "baseball"} ]);

  // our add lane function that will get passed down to our modal
  const addLane = (newLane) => {
    // let's do a check that we don't already have that subreddit or else react gets mad at us for non-unique keys. Using .some function to check if an item satisfies the condition, subreddit === subreddit
    if (lanes.some((lane) => lane.subreddit === newLane.subreddit)) {
      console.log('this subreddit already exists');
      return
    } else if (1 === 2) {
      // check if subreddit is valid
      console.log('bleh');
    } else {
      // set lanes takes our previous array and the ellipses (aka spread operator) copies all the elements of our previous array into a new array and adds our new array to the end of previous array
      setLanes((prevLanes) => [...prevLanes, newLane]);
      console.log('added a lane');
      // this function is passed from our addlane -> modal and called when 'adding subreddit' from our modal
    }
  }

  // our remove lane function that will get passed down to uor lanes. Filter creates a new array the includes only the lanes that don't match the subToDelete
  // subToDelete is a string. filter is iterating through each element of our previous array and passes each element that passes the condition, in this case, doesn't equal subToDelete
  const removeLane = (subToDelete) => {
    // console.log(typeof(subToDelete));
    setLanes((prevLanes) => prevLanes.filter((lane) => lane.subreddit !== subToDelete));
  }

  return (
    <>
      {/* the navbar/header */}
      <Navbar />
      {/* the lane holder, in a flex container for L->R displaying */}
      <div className='flex'>
        {/* our lanes, instantiated using map */}
        {lanes.map((lane, index) => 
          <Lane key={lane.subreddit} subreddit={lane.subreddit} deleteLane={removeLane}/>
        )}
        {/* <Lane subreddit="baseball"/> */}

        {/* our add lane button that will dynamically add lanes, passing function down to addLane component, passing down to modal */}
        <AddLane onClickAdd={addLane}/>
      </div>
      {/* the footer */}
      <Footer />
    </>
  )
}

export default App
