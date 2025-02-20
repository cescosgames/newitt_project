import React from 'react'

const LaneHeader = ({ subreddit, onClickRefresh, onClickDelete }) => {
  // pass down our onClickFunctions as props from Lane

  const subReddLink = `https://reddit.com/r/${subreddit}/new`;

  return (
    <div className='h-auto w-auto m-1 text-mcoolwhite transition hover:scale-101'>
        <div className="relative flex flex-row justify-between items-center bg-coolgray border-mcoolgray border-2 rounded-lg w-full">
            <div className="p-4 flex justify-start truncate text-ellipsis w-[100%]">
                <a href={subReddLink} className='font-black text-2xl overflow-hidden text-ellipsis transition hover:text-white' target='_blank'>r/{subreddit}</a>
            </div>

            <div className="p-4 flex justify-center gap-5 items-center">
                <button onClick={onClickRefresh} className='cursor-pointer text-4xl transition hover:scale-120 hover:text-coolwhite'>o</button>
                <button onClick={() => onClickDelete(subreddit)} className='cursor-pointer text-4xl transition hover:scale-120 hover:text-coolwhite'>x</button>
            </div>
        </div>
    </div>
  )
}

export default LaneHeader