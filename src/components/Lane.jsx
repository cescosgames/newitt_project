import React from 'react'
import PostCard from './PostCard'
import LaneHeader from './LaneHeader'

const Lane = () => {

  // const fetchRedditData = async (subreddit) => {
  //   try {
  //     const response = await fetch(`https://www.reddit.com/r/baseball/new.json?limit=3`);
  //   if (!response.ok) {
  //       throw new Error(`Failed to fetch data: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   const posts = data.data.children.map(post => ({
  //       title: post.data.title,
  //       upvotes: post.data.ups,
  //       author: post.data.author
  //   }));

  //     console.log(posts);
  //     return posts;
  //   } catch (error) {
  //     console.error('Error fetching Reddit data:', error);
  //   }
  // };

  return (
    <div className='relative border-2 border-mcoolgray m-1 w-xs min-w-xs max-w-xs h-[80vh] rounded-md flex flex-col space-y-0 fade overflow-y-scroll scrollbar-hidden'>
      
      <LaneHeader subreddit="test"/>
      

      <PostCard title="TEST" upvotes="100" author="Example Author" comments="50"/>
      <PostCard title="Test Title" upvotes="100" author="Example Author" comments="50"/>
      <PostCard title="Test Title" upvotes="100" author="Example Author" comments="50"/>
    
    </div>
  )
}

export default Lane