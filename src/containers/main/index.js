import React from 'react'

import Display from 'components/display'
import generateQuote from 'utils/generators.js'

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

    getNewQuote = () => {
        const { author, quote } = generateQuote()
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
                        getQuote={this.getNewQuote}
                        copyQuote={this.handleCopy}
                        quote={quote} 
                    />
                </header>
            </section>
        )
    }
}

export default Main