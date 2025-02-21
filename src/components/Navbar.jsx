import React from 'react'

const Navbar = ({ deleteAllLanes }) => {
  return (
    <div className='fixed w-dvw h-[40px] flex justify-center shadow-md items-center'>
      <div className='w-dvw h-[40px] flex justify-between my-1 px-5 shadow-md items-center'>
        <div className='flex justify-start items-center gap-2 group'>
          <img src="images/newittLogo.png" alt="newitt logo" className='w-2 aspect-square'/>
          <span className='font-bold text-mcoolwhite hover:text-coolwhite transition cursor-default'>Newitt</span>
          <span className='text-xs italic transition-all duration-700 w-0 overflow-hidden truncate group-hover:w-[100%] hidden sm:block'> - newest posts from your favorite subs</span>
        </div>
        <div className='flex gap-5 justify-center items-center'>
          {/* this was an svg to try a manual save option, but honeslty auto save is better */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-mcoolmid hover:stroke-mcoolwhite cursor-pointer"
          onClick={() => console.log('clicked')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg> */}
          {/* this is an svg to delete all current loaded subreddits */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition size-4 stroke-mcoolmid cursor-pointer hover:stroke-coolwhite"
          onClick={deleteAllLanes}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>


          <a href="https://github.com/cescosgames/newitt_project" className='transition-all hover:font-bold' target='_blank'>Visit on Github</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar