import React from 'react'

import Display from 'components/display'
import selectQuote from 'helpers/quoteHelpers.js'

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
        const curQuote  = this.state.quote
        if (!clipboard) { return }
        
        try {
            await clipboard.writeText(curQuote)
        } catch (err) {
            console.error("Copy Failed", err)
        }
    }

    getNewQuote = () => {
        const selection = selectQuote()
        const { author, quote } = selection
        this.setState(state => ({
            author: author,
            quote: quote
        }))
    }

    render() {
        const { author, quote } = this.state 
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