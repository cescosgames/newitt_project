import React from 'react'

const LaneHeader = ({ subreddit, onClickRefresh, onClickDelete }) => {
  // pass down our onClickFunctions as props from Lane

  const subReddLink = `https://reddit.com/r/${subreddit}/new`;

  return (
    <div className='h-auto w-auto m-1 text-mcoolwhite transition hover:scale-101'>
        <div className="relative flex flex-row justify-between bg-coolgray border-mcoolgray border-2 rounded-lg w-full">
            <div className="p-4 flex justify-center">
                <a href={subReddLink} className='font-black text-2xl' target='_blank'>r/{subreddit}</a>
            </div>

            <div className="p-4 flex justify-center gap-5 align-middle items-center">
                <button onClick={onClickDelete} className='cursor-pointer transition hover:scale-120 hover:text-coolwhite'>x</button>
                <button onClick={onClickRefresh} className='cursor-pointer transition hover:scale-120 hover:text-coolwhite'>0</button>
            </div>
        </div>
    </div>
  )
}

export default LaneHeader