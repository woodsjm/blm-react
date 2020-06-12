import React, { useState } from 'react'

import './display.css'


const Display = ({author, getQuote, copyQuote, quote}) => {
    const [copyDown, setCopyID]  = useState(false)
    const [isDown, setQuoteID]   = useState(false)

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
                    id={copyDown ? 'down' : 'up'}
                    onClick={() => {
                            copyQuote()
                            setCopyID(!copyDown)
                        }
                    }
                >
                    Copy
                </div>
                <div 
                    className="display_button quote_button"
                    id={isDown ? 'down' : 'up'}
                    onClick={() => {
                            getQuote() 
                            setQuoteID(!isDown)
                        }
                    }
                >
                    New
                </div>
            </div>
        </div>
    )
}

export default Display