import quotes from 'assets/quotes.js'


const generateQuote = () => {
    const numQuotes = Object.keys(quotes).length
    const randInt   = Math.floor(Math.random() * numQuotes)
    const selection = quotes[randInt]
    const quote     = selection.text
    const author    = selection.name

    return { author: author, quote: quote }
}

export default generateQuote