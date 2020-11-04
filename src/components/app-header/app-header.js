import React from 'react'
import './app-header.css';

const AppHeader = ({liked, allPosts})=>{
    return(
        <div className="app-header d-flex">
            <h1>Govorov Stepan</h1>
    <h2>{allPosts} записи, понравилось {liked}</h2>
        </div> 
    )
}

export default AppHeader;