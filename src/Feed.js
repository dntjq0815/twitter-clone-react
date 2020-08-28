import React, {useState, useEffect} from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, post: doc.data()})))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
            {posts.map(post => (
                <Post
                id={post.id}
                key={post.text} 
                post={post}
                />
            ))}
            </FlipMove>                    
        </div>
    );
}

export default Feed;
