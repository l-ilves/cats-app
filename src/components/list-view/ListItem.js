import React from 'react'
import Fact from '../card-view/Fact';

const ListItem = (props) => {
    return (
        <div className="list-view-item"><div className="list-item-img-container"><img src={props.catData.imgUrl} className="list-item-img" /> </div>
        <div className="list-item-text">
            <span className="large-title">{props.catData.name}</span> <span className="italic secondary-title">{props.catData.coat}</span>
        </div>
        
        <Fact cardFormatting={false} />
</div>
    )
}
export default ListItem;