import quotes from 'assets/quotes.js'

const cache = {
    curChoice: 0
}

const setCurChoice = () => {
    const numQuotes = Object.keys(quotes).length
    let randInt     = Math.floor(Math.random() * numQuotes)
    while(cache.curChoice === randInt) {
        randInt     = Math.floor(Math.random() * numQuotes)
    }
    cache.curChoice = randInt
    return
}

const generateQuote = () => {
    setCurChoice()
    const quoteKey  = cache.curChoice
    const selection = quotes[quoteKey]
    const quote     = selection.text
    const author    = selection.name

    return { author: author, quote: quote }
}

export default generateQuote