import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Fryer from './components/Folder/airFUCKINGfryer.jpg';
import RecipeContainer from './components/RecipeContainer'
import { Component } from 'react';

const recipesUrl = "http://localhost:3000/recipies"

class App extends Component {

  state = {
    recipes: []
  }

  componentDidMount() {
    fetch(recipesUrl)
      .then(response => response.json())
      .then(recipes => this.setState({
        recipes: recipes
      }))
  }

  render() {
    return (
      <div className="App">
        <Title /> 
        <Form />
        <img src={ Fryer } alt="Fryer"/>
        <RecipeContainer recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
