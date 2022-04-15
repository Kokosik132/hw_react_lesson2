import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id} -- {title} <Button to={id.toString()} state={post}>get Details</Button>
        </div>
    );
};

export {Post};