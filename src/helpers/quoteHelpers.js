import quotes from 'assets/quotes.js'

const cache = {
    curKey: 0
}

const genNewKey = () => {
    const qty   = Object.keys(quotes).length
    let newKey  = Math.floor(Math.random() * qty)
    let curKey  = cache.curKey
    while(newKey === curKey){
        newKey  = Math.floor(Math.random() * qty)
    }
    curKey = newKey
    return newKey
}

const selectQuote = (key) => {
    const choice    = quotes[key]
    const quoteText = choice.text
    const quoteAuth = choice.name
    return [quoteText, quoteAuth]
}

const fetchQuote = () => {
    return selectQuote(genNewKey())
}

export default fetchQuote