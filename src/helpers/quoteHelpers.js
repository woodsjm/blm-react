import quotes from 'assets/quotes.js'

const cache = {
    currentQuoteKey: 0
}

const genNewQuote = () => {
    const numQuotes = Object.keys(quotes).length
    let   randomKey = Math.floor(Math.random() * numQuotes)
    let curQuoteKey = cache.currentQuoteKey

    while(randomKey === curQuoteKey){
        randomKey   = Math.floor(Math.random() * numQuotes)
    }

    curQuoteKey = randomKey
    return randomKey
}

const selectQuote = () => {
    const key       = genNewQuote()
    const selection = quotes[key]
    const quote     = selection.text
    const author    = selection.name

    return { author: author, quote: quote }
}

export default selectQuote