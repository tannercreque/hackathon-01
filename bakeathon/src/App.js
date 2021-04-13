import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Fryer from './components/Folder/airFUCKINGfryer.jpg';
import RecipeContainer from './components/RecipeContainer'
import { Component } from 'react';


class App extends Component {

  state = {
    recipes: []
  }



  setRecipeState = ({ results }) => {
    this.setState({
      recipes: results
    })
  }

  render() {
    return (
      <div className="App">
        <Title /> 
        <Form setRecipe={this.setRecipeState}/>
        <img src={ Fryer } alt="Fryer"/>
        <h1>Recipes</h1>
        <RecipeContainer recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
