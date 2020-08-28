import React, {forwardRef, useState} from 'react';
import db from './firebase';
import "./Post.css";
import { Avatar, IconButton } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = forwardRef(({id, post}, ref) => {
    const[Like, setLike] = useState(true); //default값
    
    const deletePost = (e) => {
        e.preventDefault();
        db.collection("posts").doc(id).delete();
    }; 

    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={post.post.avatar} /> 
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {post.post.displayName} {" "} 
                            <span className="post__headerSpecial">
                                {post.post.verified && <VerifiedUserIcon className="post__badge" />} @{post.post.username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{post.post.text}</p>
                    </div>
                </div>
                <img src={post.post.image} />
                <div className="post__footer">
                    {Like ? (<IconButton><FavoriteBorderIcon onClick={() => setLike(false)} 
                    /></IconButton>) : (<IconButton><FavoriteIcon className="toRed" onClick={() => setLike(true)} 
                    /></IconButton>)}
                    <IconButton><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
                    <IconButton><EditIcon fontSize="small" /></IconButton>
                    <IconButton><DeleteIcon onClick={deletePost} fontSize="small" /></IconButton>                                                     
                </div>
            </div>
        </div>
    );
});

export default Post;
