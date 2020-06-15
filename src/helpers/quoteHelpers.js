import quotes from 'assets/quotes.js'

const cache = {
    curKey: 0
}

const genNewKey = () => {
    const qty  = Object.keys(quotes).length
    let newKey = Math.floor(Math.random() * qty)
    while(newKey === cache.curKey){
        newKey = Math.floor(Math.random() * qty)
    }
    cache.curKey = newKey
    return cache.curKey
}

const selectQuote = (key) => {
    console.log(key)
    const quote     = quotes[key]
    const quoteAuth = quote.name
    const quoteText = quote.text
    return [quoteText, quoteAuth]
}

const fetchQuote = () => {
    return selectQuote(genNewKey())
}

export default fetchQuote