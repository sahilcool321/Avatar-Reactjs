import React from 'react';

const Avatarlist = (props) => {
    return ( 
        <div className="avtar_style ma4 pa4 bg-light-purple dib tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="av1"/>      
            <h1 className="">{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;
