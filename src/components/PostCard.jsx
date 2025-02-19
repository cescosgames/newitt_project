import React from 'react'

const PostCard = ({ title, upvotes, author, comments, url }) => {
  return (
    <div className='h-auto w-auto m-1 text-mcoolwhite transition hover:scale-101 group'>
        <div className="relative flex flex-col bg-coolgray border-mcoolgray border-2 rounded-lg w-full">
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <h6 className="text-mcoolwhite text-xl font-semibold truncate text-ellipsis transition-all group-hover:text-coolwhite group-hover:overflow-visible group-hover:whitespace-normal">
                        <a  target='_blank' href={url} className='cursor-pointer'>{title}</a>
                    </h6>

                    {/*  upvotes */}
                    <div className="flex items-center gap-0 5 ml-auto cursor-default">
                        {/* upvote svg from heroicons */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-1.5">{upvotes}</span>
                    </div>
                </div>

                <div className="flex items-center mb-2">
                    <p className="leading-normal font-light cursor-default">
                        {author}
                    </p>

                    {/* comments */}
                    <div className="flex items-center gap-0 5 ml-auto cursor-default">
                        {/* comment svg from heroicons */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        <span className="ml-1.5">{comments}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PostCard