import React from 'react'

const PostCard = ({ title, upvotes, author, comments }) => {
  return (
    <div className='h-auto w-auto m-1 text-mcoolwhite transition hover:scale-101'>
        <div class="relative flex flex-col bg-coolgray border-mcoolgray border-2 rounded-lg w-full">
            <div class="p-4">
                <div class="flex items-center mb-2">
                    <h6 class="text-coolwhite text-xl font-semibold">
                        <a href="#">{title}</a>
                    </h6>

                    {/*  upvotes */}
                    <div class="flex items-center gap-0 5 ml-auto cursor-default">
                        <span class="ml-1.5">{upvotes}</span>
                    </div>
                </div>

                <div class="flex items-center mb-2">
                    <p class="leading-normal font-light cursor-default">
                        {author}
                    </p>

                    {/* comments */}
                    <div class="flex items-center gap-0 5 ml-auto cursor-default">
                        <span class="ml-1.5">{comments}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PostCard