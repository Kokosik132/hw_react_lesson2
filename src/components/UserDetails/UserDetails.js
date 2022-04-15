import React from 'react';
import {Button} from "../Button";

const UserDetails = ({user}) => {
    const {id, name, username, email, website, phone} = user;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            <div>phone : {phone}</div>
            <div>website : {website}</div>
            <Button to={'posts'}>get posts</Button>
            <hr/>
        </div>
    );
};

export {UserDetails};