import React from 'react'
import {DiGithubBadge} from 'react-icons/di'

import './styles.css'

export default function Footer() {
    return (
        <div>
            <div className="footer-container">
                <h3>Books Collection</h3>
                <DiGithubBadge size='50' color='#fff'/>
                <a href="https://github.com/pablolucio97/books_collection">GitHub</a>
            </div>
        </div>
    )
}
