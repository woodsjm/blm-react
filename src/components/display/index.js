import React, { useState } from 'react'

import './display.css'


const Display = ({author, getNewQuote, copyQuote, quote}) => {
    const [isCopyQuotePressed, setCopyID] = useState(false)
    const [isNewQuotePressed, setQuoteID] = useState(false)
    const copyButtonText  = 'Copy'
    const quoteButtonText = 'New'
    return(
        <div className="display_box">
            <div className="display_text">
                <p>{quote}</p>
            </div>
            <div className="author_text_box">
                <p className="author_text">{`-${author}`}</p>
            </div>
            <div className="display_footer">
                <div className="display_button copy_button"
                     id={isCopyQuotePressed ? 'down' : 'up'}
                     onClick={() => {
                         copyQuote()
                         setCopyID(!isCopyQuotePressed)}}
                >
                    {copyButtonText}
                </div>
                <div className="display_button quote_button"
                     id={isNewQuotePressed ? 'down' : 'up'}
                     onClick={() => {
                         getNewQuote() 
                         setQuoteID(!isNewQuotePressed)}}
                >
                    {quoteButtonText}
                </div>
            </div>
        </div>
    )
}

export default Display