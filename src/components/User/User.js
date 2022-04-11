import React from 'react';

const User = ({user, setUser}) => {
    return (
        <div>
            {user.name}
            <input type="button" value="show info" onClick={() => setUser(user)}/>
        </div>
    );
};

export {User};