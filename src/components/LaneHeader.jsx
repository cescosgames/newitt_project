import React from 'react'

const LaneHeader = ({ subreddit }) => {
  return (
    <div className='h-auto w-auto m-1 text-mcoolwhite transition hover:scale-101'>
        <div class="relative flex flex-row justify-between bg-coolgray border-mcoolgray border-2 rounded-lg w-full">
            <div class="p-4 flex justify-center">
                <a href="#" className='font-black text-2xl'>r/{subreddit}</a>
            </div>

            <div class="p-4 flex justify-center gap-5 align-middle items-center">
                <button className='cursor-pointer transition hover:scale-200 hover:text-coolwhite'>x</button>
                <button className='cursor-pointer transition hover:scale-200 hover:text-coolwhite'>0</button>
            </div>
        </div>
    </div>
  )
}

export default LaneHeader