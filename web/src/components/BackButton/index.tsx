import React from 'react'

import './styles.css'

export default function BackButton() {
    return (

            <div className="button-container">
                <button onClick={() => window.location.href='http://localhost:3000/'}>Back</button>
            </div>

    )
}
