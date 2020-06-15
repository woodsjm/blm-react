import quotes from 'assets/quotes.js'

const cache = {
    curQuoteKey: 0
}

const genNewQuoteKey = () => {
    const numOfQuotes = Object.keys(quotes).length
    let randInt     = Math.floor(Math.random() * numOfQuotes)
    while(cache.curQuoteKey === randInt) {
        randInt     = Math.floor(Math.random() * numOfQuotes)
    }
    cache.curQuoteKey = randInt
    return
}

const selectQuote = () => {
    genNewQuoteKey()
    const key       = cache.curQuoteKey
    const selection = quotes[key]
    const quote     = selection.text
    const author    = selection.name

    return { author: author, quote: quote }
}

export default selectQuote