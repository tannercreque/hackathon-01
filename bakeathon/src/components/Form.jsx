import React, { Component } from 'react'

const recipesUrl = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i='

class Form extends Component {


    state = {
        ingredient1: '', 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        //fetch with the state of ingredients
        const ingredientToSearch = this.state.ingredient1
        fetch(recipesUrl + ingredientToSearch)
            .then(response => response.json())
            .then(data => {
                this.props.setRecipe(data)
            })
        
        

        //pass that new recipe list to our function from app.js to update recipe state on mainpage
    }


    
    render(){
        return (
    
            <div>
                
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" name='ingredient1' value={this.state.ingredient} 
                    className="ingredient-input" onChange={this.handleChange} placeholder='Input Ingredient'></input>
                    <input type="submit" value='Search Recipe List'></input>
                </form>
            </div>
        )

    }
}

export default Form
