import React, { Component } from 'react'

import Display from 'components/display'

import './main.css'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "Main Page"
        }
    }

    render() {
        return(
            <section className="main_container">
                <header className="main_text">
                    <Display/>
                </header>
            </section>
        )
    }
}

export default Main