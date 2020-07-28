import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon fontSoze="large" className="swipeButtons__repeat" />
            </IconButton>
            <IconButton>
                <CloseIcon fontSoze="large" className="swipeButtons__left" />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSoze="large" className="swipeButtons__star" />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSoze="large" className="swipeButtons__right" />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSoze="large" className="swipeButtons__lightning" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
