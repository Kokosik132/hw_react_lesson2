import React, {useEffect, useState} from 'react';
import {postsService} from "../../service";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {
                posts && posts.map((post)=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};