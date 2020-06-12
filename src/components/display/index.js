import React from 'react'

import quotes from 'assets/quotes.js'

import './display.css'


const Display = ({author, getQuote, quote}) => {
    return(
        <div className="display_box">
            <div className="display_text">
                <p>{quote}</p>
            </div>
            <div className="author_text_box">
                <p className="author_text">-{author}</p>
            </div>
            <div className="display_footer">
                <div 
                    className="display_button copy_button"
                    onClick={() => getQuote()}
                >
                    Copy
                </div>
                <div 
                    className="display_button quote_button" 
                    onClick={() => getQuote()}
                >
                    New
                </div>
            </div>
        </div>
    )
}

export default Display