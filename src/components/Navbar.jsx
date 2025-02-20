import React from 'react'

const Navbar = () => {
  return (
    <div className='w-dvw h-[5vh] flex justify-between my-1 px-5 shadow-2xl items-center'>
      <div className='flex justify-center items-center gap-2'>
        <a href="#" className='font-bold hover:scale-105 transition'>Newitt</a>
        <span className='text-xs italic'> - newest posts from your favorite subs</span>
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-mcoolmid hover:stroke-mcoolwhite cursor-pointer"
        onClick={() => console.log('clicked')}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>

        <a href="#" className='transition-all hover:font-bold'>Visit on Github</a>
      </div>
    </div>
  )
}

export default Navbar