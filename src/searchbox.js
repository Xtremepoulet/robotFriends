import React from 'react';


const Searchbox = ({ searchfield, searchChange }) => {
    return(
        <div> 
            <input type="text" placeholder="search a robot" onChange={searchChange}></input>
        </div>
    )
}


export default Searchbox