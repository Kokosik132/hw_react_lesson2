import React, {useEffect, useState} from 'react';

import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../service";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [post, setPost] = useState(state);
    useEffect(() => {
        if (!state){
            postService.getById(id).then(({data}) => setPost(data))
        }else {
            setPost(state)
        }
    }, [id, state])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};