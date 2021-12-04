import React, {useState} from 'react';

const ProfilePicture = (props) => {
    const [catData, setCatData] = useState(props.catData);
    return (
        <div className="align-center-x">
            <img className="profile-picture" src={props.catData.imgUrl} alt={props.catData.name} />
        </div>

    )
}

export default ProfilePicture