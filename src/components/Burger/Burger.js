import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    
    //We are transforming Ingredients in form of cheese : 3 => array of cheese, cheese, cheese 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey  => { return [...Array(props.ingredients[igKey])] //internal map
                .map((_,i) =>{
                   return <BurgerIngredient key={igKey + i} type={igKey}/>;
                });
            }).reduce((arr, el) => {return arr.concat(el);}, []);
        
        if(transformedIngredients.length === 0){
            transformedIngredients= <p>Please add ingredients!!!</p>
        }

        console.log(transformedIngredients);
    return (   
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
            );

}

export default burger;