import React, { use, useState, useRef, useEffect } from 'react'

const AddModal = ({ onClose, addSub, isOpen, toggleModal }) => {
  // the lane we are adding, empty string default
  const [subTitle, setSubTitle] = useState("");
  
  // empty sub error message, flase not visible, not false visible
  const [emptyMsg, setEmptyMsg] = useState(false);

  // using useRef to reference our input element (sort of like id), different than state since it doesn't re-render. Passing null initially because it doesn't exist yet. 
  // once it's mounted, we will have our input field referenced - see input field below
  // usually we don't manipulate DOM directly in react, but in this use-case it works well 
  const inputRef = useRef(null);

  // use effect to use our useRef when opening the modal from our parent
  useEffect(() => {
    // inputRef.current checks what we have referenced once our page is mounted.
    if(isOpen && inputRef.current) {
      // .focus focuses on our input field, allowing the user to quickly add subreddits and use esc/enter buttons without clicking around
      inputRef.current.focus();
      // console.log('focused');
    }
  }, [isOpen]);

  // since we are controlling state from parent, here we are just checking the parents state
  // if our modal is open, don't return anything
  if (!isOpen) return null;

  // our adding lane function, taking in our addSub function which is from our App->Lane->Modal
  const addSubredditFunc = () => {
    if (subTitle !== "") {
      setEmptyMsg(false);
      addSub({ subreddit: subTitle });
      setSubTitle('');
      toggleModal();
    } else {
      setEmptyMsg(true);
    }
  };

  // a handle keydown function to check if we are pressing enter
  const handleEnterDown = (event) => {
    if (event.key === 'Enter') {
      addSubredditFunc();
      // console.log('enter');
    }
  }

  // same as above, but for escape
  const handleESCDown = (event) => {
    if (event.key === 'Escape') {
      // retrieving this function as prop from AddLane
      setSubTitle('');
      toggleModal();
      // console.log('escape');
    }
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bgOpacity w-[100vw] h-[100vh] z-10">
      <div className="bg-mcoolmid p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* the close button */}
        <button onClick={onClose} className="absolute text-2xl top-2 right-2 text-coolwhite hover:text-coolgray cursor-pointer transition hover:scale-130">
          x
        </button>
        <div className='flex flex-col gap-5 items-center justify-center'>
          {/* header for the modal */}
          <span className='font-bold text-lg'>Add New Subreddit</span>
          {/* the input field */}
          <input ref={inputRef} type="text" placeholder='enter subreddit name' className='focus:outline-none border border-coolwhite w-full rounded-md p-2 text-coolwhite'
            value={subTitle}
            // our onchange function will update our subtitle every change, using .replace to get rid of spaces
            onChange={(event) => {
              setSubTitle(event.target.value.replace(/\s/g,''));
              // if we had an empty message, remove it once we start typing
              (!emptyMsg) ? " " : setEmptyMsg(false);
            }}
            // enter to submit, escape to close
            onKeyDown={(event) => {
              handleEnterDown(event);
              handleESCDown(event);
            }}
          />
          {/* the submit button */}
          <button onClick={addSubredditFunc} className='border w-[75%] rounded-md border-coolwhite transition hover:bg-coolwhite hover:text-coolgray cursor-pointer'>add subreddit</button>
          
          {/* the empty message */}
          {!emptyMsg ? " " : 
            <p className='text-red-400 font-bold bg-coolgray border-1 border-red-400 rounded-md px-2'>Enter Subreddit Name</p>
            }
        </div>
      </div>
    </div>
  )
}

export default AddModal