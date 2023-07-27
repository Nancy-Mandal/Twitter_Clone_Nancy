import React, {useEffect, useState} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase'

function Feed() {

    const [posts, setposts] = useState([])

    useEffect (() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {   //it will render the post according to timestamp in descending order
            setposts(snapshot.docs.map(doc => doc.data()))
        })         //snapshot is a method for getting all the posts
    }, [])

  return (                      /*render anything from inside this*/
    <div className = "feed"> 
            {/*Home*/}
        <div className = "feed_header">         
            <h2>Home</h2>
        </div>

        {/*Tweetbox*/}
        <TweetBox />
        
      
        {/*post*/}
        
        {posts.map((post) => {
            return (
                <Post
                    key={post.key}
                    displayName={post.displayName}
                    username={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar} />
            );
        })}
        
        

    </div>
  )
}

export default Feed
