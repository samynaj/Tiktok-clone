import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import  "./sidebar.css"

function Sidebar() {
    const [like, setLike] = useState(false);

    const handleClick = () => {
        setLike(!like)
    }
    return (
        <div className="sidebar">
            <div className="sidebar__btn" onClick={handleClick}>
                { !like ? 
                    <FavoriteBorderIcon fontSize="large" />
                    :
                    <FavoriteIcon fontSize="large" className="sidebar__btn--liked"/>
                }
                
                <p>200</p>
            </div>
            <div className="sidebar__btn">
                <MessageIcon fontSize="large" />
                <p>200</p>
            </div>
            <div className="sidebar__btn">
                <ShareIcon fontSize="large" />
                <p>500</p>
            </div>
            
        </div>
    )
}

export default Sidebar;
