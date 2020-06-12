import React from 'react'

import quotes from 'assets/quotes.js'

import './display.css'


const Display = ({author, quote}) => {
    return(
        <div className="display_box">
            <div className="display_text">
                <p>{quote}</p>
            </div>
            <div className="author_text_box">
                <p className="author_text">-{author}</p>
            </div>
            <div className="display_footer">
                <div className="display_button"></div>
                <div className="display_button"></div>
            </div>
        </div>
    )
}

export default Display