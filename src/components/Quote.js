import React from 'react'
import FunctionButton from './FunctionButton'

class Quote extends React.Component {
    
    state={currentQuote: {quote: "From error to error one discovers the entire truth", author: "Freud"},
                    previousQuote: {quote: "From error to error one discovers the entire truth", author: "Freud"}}
    

    generateRandomNumber = (max) => {
    return Math.floor(Math.random()*(max-1)+1)
    }

    fetchQuote =() => {
        let newQuote = "";
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
        <div className="div-quote">
            <div id="div-quote-section">
            <cite className="cite-quote">{this.state.currentQuote.quote}</cite>
            <p className="p-author">{this.state.currentQuote.author}</p></div>
            <div id="div-buttons-section">
            <FunctionButton buttonTitle="Previous Quote"id="button-previous" onClick={this.previousQuote}/>
            <FunctionButton buttonTitle="Next Quote" id="button-next"onClick={this.fetchQuote}/></div>
        </div>
    )
}}

export default Quote;
