import React, { Component } from 'react'

import Display from 'components/display'
import generateQuote from 'utils/generators.js'

import './main.css'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "Main Page"
        }
    }
    render() {
        const { author, quote } = generateQuote()
        return(
            <section className="main_container">
                <header className="main_text">
                    <Display author={author} quote={quote} />
                </header>
            </section>
        )
    }
}

export default Main