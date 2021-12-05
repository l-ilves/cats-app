import React, {useState} from 'react'
import '../../styles/global.css'
import { Children } from 'react'

const ViewToolbar = ({children}) => {
    const [isCardView, setIsCardView] = useState(true);

    const childrenWithToolbarItemClass = React.Children.map(children, child => {
        return (
            <div className="toolbar-item">{child}</div>
        )
    })

    return (
        <div className="toolbar">
            {childrenWithToolbarItemClass}
        </div>
    )
}

export default ViewToolbar