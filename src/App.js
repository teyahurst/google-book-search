import React from 'react';
import './App.css';

import Header from './Header';
import Search from './components/SearchForm/SearchForm';
import Results from './components/SearchResults/SearchResults';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      printtype: 'all', 
      bookType: 'no-filter',
      bookResults: [],
      err: 'null'
    }
  }

  setSearchTerm(searchTerm){
    this.setState({
      searchTerm
    })
    console.log(searchTerm)
  }

  setPrintType(printType){
    this.setState({
      printType
    })
  }

  setBookType(bookType){
    this.setState({
      bookType
    })
  }


  handleSubmit(event) {
    event.preventDefault();

    let filter = (this.state.bookType !== "no-filter") ? ("&filter="+this.state.bookType):"";
    let key = 'AIzaSyAgNoh-ZbKnWcNnfOeSlmFLHxInGcJo2M0';
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&key=${key}`;
  
    fetch(url) 
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong, please try again later');
        }
        return response.json()
      })

      .then(data => {
        console.log(data)

        this.setState({
          bookResults: data.items
        })
      })

      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }





  render(){
    console.log(this.state);

    return (
      <main className="App">
        <Header />
        <Search 
            handleSubmit={event => this.handleSubmit(event)}
            setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
            setPrintType={printType => this.setPrintType(printType)}
            setBookType={bookType => this.setBookType(bookType)}/>
        
        <Results
            bookResults={this.state.bookResults}/>
      </main>
    )
  }
}

export default App;


