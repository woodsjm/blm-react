import React from 'react'

import quotes from 'assets/quotes.js'

import './display.css'


const Display = () => {
    const randInt   = Math.floor(Math.random() * 6)
    const selection = quotes[randInt]
    const quote     = selection.text
    const author    = selection.name
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