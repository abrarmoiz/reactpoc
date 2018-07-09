import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger'
import  BuildControls  from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 1,
    bacon: 2.5,
    meat: 2.7,
    cheese: 3

}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        cost: 1.5
    };
    
    addIngredientHandler=(type)=>{
       console.log("in add ingredients", this.state);
        const oldCount = this.state.ingredients[type];
       const newCount = oldCount + 1 ;
       const newIngredients = {
           ...this.state.ingredients
        };
        newIngredients[type] = newCount;

       
        
        
        const oldCost = this.state.cost;
        const priceUpdate = oldCost + INGREDIENT_PRICES[type];
        this.setState( {ingredients: newIngredients, cost: priceUpdate});
    };

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        
        let newCount = 0 ;
        if(oldCount > 0 ){
            newCount = oldCount - 1 ;
        }
        
        const newIngredients = {
            ...this.state.ingredients
         };
         newIngredients[type] = newCount;


         
        const oldCost = this.state.cost;
        const priceUpdate = oldCost - INGREDIENT_PRICES[type];
        this.setState( {ingredients: newIngredients, cost: priceUpdate});
    };

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}  ingredientRemoved={this.removeIngredientHandler} price={this.state.cost}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;