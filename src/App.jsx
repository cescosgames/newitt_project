import { useEffect, useState } from 'react';
import Lane from './components/Lane';
import Navbar from './components/Navbar';
import AddLane from './components/AddLane';
import Footer from './components/Footer';

function App() {
  // our welcome
  const [isWelcome, setIsWelcome] = useState(false);

  // lanes will be dynamically added here, the initial state is set by using the below function which checks if we have a valid 'lanes' json file stored that represents our saved lanes
  const [lanes, setLanes] = useState(() => {
    // if we have an item 'lanes' in our local storage, get it
    const savedLanes = localStorage.getItem('lanes');
    // if it's valid, get the saved lanes otherwise go back to default of baseball
    return savedLanes ? JSON.parse(savedLanes) : [{ subreddit: "baseball"}];
  });

  // adding a useEffect for whenever our lanes dependency changes (i.e. we added/removed a lane)
  useEffect(() => {
    // save in localStorage our 'lanes' array
    localStorage.setItem('lanes',JSON.stringify(lanes));
    // check if our lanes is > 0 to determine if welcome should show or not
    if (lanes.length === 0) {
      // show our isWelcome
      setIsWelcome(true);
      // console.log('lanes is empty');
    } else {
      // don't show our isWelcome
      setIsWelcome(false);
      // console.log('lanes is > 0');
    }
    // useEffect when our lanes (dependency) changes
  }, [lanes]);

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
      // console.log('added a lane');
      // this function is passed from our addlane -> modal and called when 'adding subreddit' from our modal
    }
  }

  // our remove lane function that will get passed down to uor lanes. Filter creates a new array the includes only the lanes that don't match the subToDelete
  // subToDelete is a string. filter is iterating through each element of our previous array and passes each element that passes the condition, in this case, doesn't equal subToDelete
  const removeLane = (subToDelete) => {
    // console.log(typeof(subToDelete));
    setLanes((prevLanes) => prevLanes.filter((lane) => lane.subreddit !== subToDelete));
  }

  // remove all lanes function
  const removeAllLanes = () => {
    setLanes(() => []);
  }

  // experimenting with some 'starter packs;
  const addStarterPack = (newLanes) => {
    // replace all our previous lanes with the new lanes
    setLanes(() => newLanes);
  }
  const sportsStarterPack = () => {
    const sportsLanes = [
      {subreddit: "baseball"},
      {subreddit: "hockey"},
      {subreddit: "nfl"},
      {subreddit: "nba"},
    ];
    addStarterPack(sportsLanes);
  }
  const gamedevStarterPack = () => {
    const sportsLanes = [
      {subreddit: "gamedev"},
      {subreddit: "godot"},
      {subreddit: "unity3d"},
      {subreddit: "unrealengine"},
    ];
    addStarterPack(sportsLanes);
  }
  const photographyStarterPack = () => {
    const sportsLanes = [
      {subreddit: "photojournalism"},
      {subreddit: "portraitphotos"},
      {subreddit: "photoessay"},
      {subreddit: "photobooks"},
    ];
    addStarterPack(sportsLanes);
  }

  return (
    <>
      {/* the navbar/header */}
      <Navbar deleteAllLanes={removeAllLanes}/>
      {/* the lane holder, in a flex container for L->R displaying */}
      <div className='flex'>
        {/* our is welcome to be shown if no lanes are open */}
        {(!isWelcome) ? " " : <>
          <div className='mx-auto my-auto absolute inset-0 flex flex-col gap-5 items-center justify-center w-[50vw] h-[50vw]'>
            <span className='w-[80%] text-center text-lg text-coolwhite cursor-default'> Welcome to Newitt! Get the freshest posts by adding a subreddit using the + icon in the top left or select a starter pack below!</span>
            <div className='grid grid-cols-2 grid-rows-2 gap-5'>
              <button onClick={sportsStarterPack} className='z-10 border-2 rounded-md p-2 border-mcoolmid cursor-pointer transition hover:bg-mcoolwhite hover:text-coolgray hover:font-bold'>sports starter pack</button>
              <button onClick={gamedevStarterPack} className='z-10 border-2 rounded-md p-2 border-mcoolmid cursor-pointer transition hover:bg-mcoolwhite hover:text-coolgray hover:font-bold'>game dev starter pack</button>
              <button onClick={photographyStarterPack} className='z-10 border-2 rounded-md p-2 border-mcoolmid cursor-pointer transition hover:bg-mcoolwhite hover:text-coolgray hover:font-bold'>photography starter pack</button>
            </div>
          </div>
        </>}

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
