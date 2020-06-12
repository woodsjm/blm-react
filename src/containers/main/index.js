import React, { Component } from 'react'

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
                        quote={quote} 
                    />
                </header>
            </section>
        )
    }
}

export default Main