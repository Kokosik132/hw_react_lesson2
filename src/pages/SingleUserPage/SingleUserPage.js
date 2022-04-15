import React, {useEffect, useState} from 'react';
import {UserDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../service/user_service";
import {Outlet} from "react-router-dom";

const SingleUserPage = () => {
    const [user, setUser] = useState([]);
    const {state} = useLocation();
    const {userId} = useParams();
    useEffect(() => {
        if (!state) {
            userService.getById(userId).then(({data}) => setUser(data))
        }
        setUser(state)
    }, [userId, state])

    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SingleUserPage};