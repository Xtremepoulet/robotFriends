import React from 'react';

const Card = (props) => {

    const { name, id } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots_photo"></img>
            <div>
                <h1>{name}</h1>
                <p>{id}</p>
            </div>
        </div>
    )
}


export default Card

