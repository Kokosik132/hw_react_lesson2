import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            {id} -- {name} -- {username} <Button to={id.toString()} state={user}>get User</Button>
        </div>
    );
};

export {User};