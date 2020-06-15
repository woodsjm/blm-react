import React from 'react'

import Display from 'components/display'
import selectQuote from 'utils/generators.js'

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
        this.getQuote()
    }

    handleCopy = async () => {
        const text = this.state.quote
        if (!navigator.clipboard) {
            return
        }

        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error("Copy failed", error);
        }
    }

    getQuote = () => {
        const { author, quote } = selectQuote()
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
                        author={author} 
                        getQuote={this.getQuote}
                        copyQuote={this.handleCopy}
                        quote={quote} 
                    />
                </header>
            </section>
        )
    }
}

export default Main