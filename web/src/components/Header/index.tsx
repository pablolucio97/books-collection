import React from 'react'
import {VscBook} from 'react-icons/vsc'

import './styles.css'

export default function Header() {
    return (
        <div>
            <div className="header-container">
                <h3><VscBook size='40' color='#dddd'/> Books Collection</h3>
            </div>
        </div>
    )
}
