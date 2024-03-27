import React, { Fragment } from 'react'
import "./NotAvailable.css"
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';

function NotAvailable() {
    return (
        <Fragment>
            <div className='notAvailable'>
                <BrowserNotSupportedIcon />
                <h1>This Feature is Currenty Not Available</h1>
            </div>
        </Fragment>
    )
}

export default NotAvailable
