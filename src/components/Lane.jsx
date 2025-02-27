import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import LaneHeader from './LaneHeader';

const Lane = ({ subreddit, deleteLane }) => {
  // get our states for posts, set on start to an empty array. Our posts will be an array after we have fetched them
  const [posts, setPosts] = useState([]);
  // get our state for loading, set to a bool
  const [loading, setLoading] = useState(true);
  // get an error state to check if we have an error or not, boolean
  const [error, setError] = useState(false);

  // this is a simple fetch function
  const fetchRedditData = async () => {
    // set loading to true
    setLoading(true);
    // set error to false
    setError(false);

    // wrap the response in a try catch to try adn catch errors
    try {
      // fetch our requested subreddit, limited to 3 newest posts for now
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/new.json?limit=10`);
      // had to add response.redirected because for some reason I am being redirected now (302 error instead of 404)
    if (!response.ok || response.redirected) {
        setError(true);
        // if our response is not ok (see OK documentation) then throw an error
        throw new Error(`Failed to fetch data: ${response.status}`);
    }

    // get our data aka our json from our fetch request
    const data = await response.json();
    // here we are using map to iterate over each element in our json array (see reddit API for why we're doing data.data.children)
    // we then return a new array containing the results of whatever function we applied to our data
    const posts = data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      author: post.data.author,
      upvotes: post.data.score,
      comments: post.data.num_comments,
      url: post.data.url
    }));

    // just verifying our new array came out the way we expected
    // console.log(posts);

    // after processing our data using map, update our state with the fetched data. Our state is re-rendered now as an array containing what we wanted
    setPosts(posts);

    // catch error below
    } catch (error) {
      setError(true);
      console.error('Error fetching Reddit data:', error);
    } finally {
      // finally, we set loading to false
      setLoading(false);
    };
  };

  // now we use useEffect to run our fetchData function when the component mounts (or when the subreddit changes, our dependency) If the dependency changes, our data will be refetched
  useEffect(() => {
    fetchRedditData();
  }, [subreddit]);


  // // our delete/refresh functions to pass down as props to our lane header
  // const deleteSelf = () => {

  // };
  const refreshSelf = () => {
    fetchRedditData();
  };

  // return our lane with the header and posts
  return (
    <div className='relative border-2 border-mcoolgray sm:m-1 m-2 sm:w-xs sm:min-w-xs sm:max-w-xs w-[96vw] sm:h-[85vh] h-[20vh] rounded-md flex flex-col space-y-0'>
      
      <LaneHeader subreddit={subreddit} onClickRefresh={refreshSelf} onClickDelete={deleteLane} />  
      {/*  onClickDelete={}/>    */}

      {/* adding a div to fade the content */}
      <div className='relative scrollable-content overflow-y-scroll scrollbar-hidden fade h-full'>

        {/* add a ternary for if we are loading or not, if loading show loading, else show subreddits */}
        {loading ? (
          // spinner component from flowbite, wrapped in a centering div
          <div className='h-full w-full flex items-center justify-center'>
            <svg aria-hidden="true" className="w-[25%] h-[25%] text-mcoolmid animate-spin dark:text-gray-600 fill-mcoolgray" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
        ) : error ? (
          // if error is true, show an error message
          <div className='rounded-md m-1 p-1 text-center flex flex-col gap-5 items-center h-full'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 stroke-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg> */}
            <p className='text-8xl text-red-400'>x</p>

            <p className='font-bold text-red-400'>There was an error retrieving this subreddit. Please check your connection, check for typos, refresh and try again!</p>
          </div>
        ) : // if !loading, use map to put our posts up
          posts.map((post) => (
            <PostCard key={post.id} title={post.title} upvotes={post.upvotes} author={post.author} comments={post.comments} url={post.url}/>
          )
        )}
      </div>
    
    </div>
  )
}

export default Lane