import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom"
import css from './MeinLayout.module.css'

const MeinLayot = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MeinLayot};