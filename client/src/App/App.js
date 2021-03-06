import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RecipeList from './recipesPages/RecipeList';
import Nav from "./components/nav";
import ShoppingList from './ingredientsPages/ShoppingList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists:[1,10]
    }
    this.addId = this.addId.bind(this);
  }
   addId =(id)=> {
    let updatedList = [...this.state.lists, id]
    this.setState({ lists: updatedList})
   }

  render() {
    const lists = this.state.lists
    console.log("list now is", this.state)
    const Content = () => (
      <div>

          <Nav/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/recipe' render={() => <RecipeList addId={this.addId} lists={lists}/>} />
          <Route path='/shoppinglist' render={() => <ShoppingList lists={lists} />}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Content/>
      </Switch>
    );
  }
}

export default App;
