import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: 'woo._.ssub',
            username: 'WooSeob',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://static.thenounproject.com/png/3134331-200.png"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://static.thenounproject.com/png/3134331-200.png"></Avatar>
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" 
                    />                  
                </div>

                <input
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)} 
                className="tweetBox__imageInput" 
                placeholder="Enter image URL" 
                type="text" 
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
  