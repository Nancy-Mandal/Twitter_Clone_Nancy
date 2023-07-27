import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';
import firebase from 'firebase';      //from global firebase

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");           //store tweet msg for sometime
    const [tweetImage, setTweetImage] = useState('');  

    const sendTweet = (e) => {
        e.preventDefault();         //not refresh the whole page when clicking the tweet button 
        //that means it will prevent default functionalities of browser to happen
    
        db.collection('posts').add({
            displayName: "NancyMandal",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userName : "nancy1",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
        })

        setTweetMessage("")          //after sending tweet message both becomes empty
        setTweetImage("")

    }

  return (
    <div className = "tweetBox">
      <form>
        <div className = "tweetBox_input">
            <Avatar 
                src = "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
            
            />
            <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                type = "text" 
                placeholder = "What's happening"
            />

        </div>

        <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className = "tweetBox_imageInput"
            placeholder = "optional: Enter image url"
        />
        <Button 
            onClick={sendTweet}     //on clicking, fire the function sendTweet
            className = "tweetBox_tweetButton">Tweet</Button>
        
      </form>
    </div>
  )
}

export default TweetBox;
