import React from 'react'

class Quote extends React.Component {
    
    state={currentQuote: {quote: "From error to error one discovers the entire truth", author: "Freud"},
                    previousQuote: {quote: "From error to error one discovers the entire truth", author: "Freud"}}
    

    generateRandomNumber = (max) => {
    return Math.floor(Math.random()*(max-1)+1)
    }

    fetchQuote =() => {
        let newQuote;
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
        .then(response=>response.json())
        .catch(error=>{alert("Error: "+error)})
        .then(data=>{ 
            newQuote=data[this.generateRandomNumber(data.length)];
            this.setState({previousQuote: this.state.currentQuote});
            this.setState({currentQuote: newQuote})
        });
        
    }

    previousQuote =()=> {
        this.setState({currentQuote: this.state.previousQuote})
    }

    render() {
    return (
        <div id="div-quote">
            <div id="div-quote-section">
            <cite id="cite-quote">{this.state.currentQuote.quote}</cite>
            <p id="p-author">{this.state.currentQuote.author}</p></div>
            <div id="div-buttons-section">
            <button className="button" id="button-previous" onClick={this.previousQuote}>Previous Quote</button>
            <button className="button" id="button-next"onClick={this.fetchQuote}>Next Quote</button></div>
        </div>
    )
}}

export default Quote;
