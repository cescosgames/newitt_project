import React, { useState } from 'react'

const AddModal = ({ onClose, addSub, isOpen }) => {
  // the lane we are adding, empty string default
  const [subTitle, setSubTitle] = useState("");

  // since we are controlling state from parent, here we are just checking the parents state
  // if our modal is open, don't return anything
  if (!isOpen) return null;

  // our adding lane function, taking in our addSub function which is from our App->Lane->Modal
  const addSubredditFunc = () => {
    addSub({ subreddit: subTitle });
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bgOpacity w-[100vw] h-[100vh] z-10">
      <div className="bg-mcoolmid p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* the close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-coolwhite hover:text-coolgray cursor-pointer transition hover:scale-130">
          x
        </button>
        <div className='flex flex-col gap-5 items-center justify-center'>
          {/* the input field */}
          <input type="text" placeholder='enter subreddit name' className='border border-coolwhite w-full rounded-md p-2 text-coolwhite'
          // our onchange function will update our subtitle every change
            onChange={(event => setSubTitle(event.target.value))}
          />
          {/* the submit button */}
          <button onClick={addSubredditFunc} className='border w-[75%] rounded-md border-coolwhite transition hover:bg-coolwhite hover:text-coolgray cursor-pointer'>add subreddit</button>
        </div>
      </div>
    </div>
  )
}

export default AddModal