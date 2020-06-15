import React from 'react'

import Display     from 'components/display'
import fetchQuote  from 'helpers/quoteHelpers.js'

import './main.css'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            author: null,
            quote: null
        }
    }

    componentDidMount() {
        this.getNewQuote()
    }

    copyQuote = async () => {
        const clipboard = navigator.clipboard
        const quoteTxt  = this.state.quote
        if (!clipboard) {return}
        try {
            await clipboard.writeText(quoteTxt)
        } 
        catch (err) {
            console.error("Copy Failed", err)
        }
    }

    getNewQuote = () => {
        const [txt, auth] = fetchQuote()
        this.setState(state => ({
            author: auth,
            quote: txt
        }))
    }

    render() {
        const {author, quote} = this.state 
        return(
            <section className="main_container">
                <header className="main_text">
                    <Display 
                        copyQuote={this.copyQuote}
                        getNewQuote={this.getNewQuote}
                        author={author} 
                        quote={quote}       
                    />
                </header>
            </section>
        )
    }
}

export default Main