import React, {useEffect, useState} from 'react';
import ProfilePicture from './ProfilePicture';
import '../../styles/global.css'
import './card.css'
import Fact from '../fact/Fact';


const Card = (props) => {
    
    return (
        <div className="card drop-shadow">
            <ProfilePicture catData={props.catData} />
            <span className="large-title">{props.catData.name}</span> <span className="italic secondary-title">{props.catData.coat}</span>
            <hr />
            <Fact cardFormatting={true} />
        </div>
    )
}

export default Card