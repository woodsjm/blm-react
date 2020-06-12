import React from 'react'

import quotes from 'assets/quotes.js'

import './display.css'


const Display = ({author, quote}) => {
    return(
        <div className="display_box">
            <p className="display_text">
                {quote}
            </p>
            <p>
                -{author}
            </p>
        </div>
    )
}

export default Display