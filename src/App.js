import './App.css';
import React from 'react';


class StarWars extends React.Component {

  constructor () {
    super () 

      this.state = {
        loadedCharacter :false,
         Name : null,
         Gender : null,
         Height  : null,
         Weight  : null,
         hairColor: null,
         skinColor : null,
         eyeColor : null ,
         image : null,
         
      }
    
  }

  getDetails () {
    const randomNumber = Math.ceil(Math.random()*88);
    const url =  (`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`)
    fetch(url)
    .then (response => response.json())
    .then (data => {
         
    this.setState({

     

      Name : data.name,
      Gender : data.gender,
      Height  : data.height,
      Weight  : data.mass,
      hairColor: data.hairColor,
      skinColor : data.skinColor,
      eyeColor : data.eyeColor ,
      image : data.image,
      loadedCharacter : true,
    }) 
    })
  }

  render() {
    return (
      <div>
        {
         this.state.loadedCharacter &&
          <div>
      <img src = {this.state.image}  className= "picture" alt = ""></img>
       <h1>Name :{this.state.Name}</h1>
      <h1> Gender :{this.state.Gender}</h1>
      <h1> Height:{this.state.Height}</h1>
      <h1> Weight:{this.state.Weight}</h1>
      <h1>Hair color:{this.state.hairColor}</h1>
      <h1>Skin color :{this.state.skinColor}</h1>
      <h1> Eye color: {this.state.eyeColor}</h1>
  
          </div>
        }
      
      
      <button type = "button" onClick = {() => this.getDetails()} className = "btn">Report</button>
     </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <p>
            <StarWars />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
