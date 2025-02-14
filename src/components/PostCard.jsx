import React from 'react'

export const PostCard = () => {
  return (
    <div className='m-2 text-mcoolwhite'>
        <div class="relative flex flex-col my-6 bg-coolgray shadow-xl border-mcoolgray border-2 rounded-lg w-full">
            <div class="p-4">
                <div class="flex items-center mb-2">
                <h6 class="text-coolwhite text-xl font-semibold">
                    Post Title
                </h6>

                {/* post data, upvotes and comments */}
                <div class="flex items-center gap-0 5 ml-auto">
                    <span class="ml-1.5">5.0</span>
                </div>
                </div>

                <p class="leading-normal font-light">
                Post Description
                </p>
            </div>

        </div>
    </div>
  )
}
