import React, {Component} from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]; 

class BuildControls extends Component {
    render(){
      return   (
               
                <div className={classes.BuildControls}> 
                <p> Total Price {this.props.price.toFixed(2)} </p>
                    {controls.map(ctrl => ( 
                        <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            ingredientAdded={() => this.props.ingredientAdded(ctrl.type)}
                            ingredientRemoved={() => this.props.ingredientRemoved(ctrl.type)}

                            
                        /> 
                    ))}
                </div>);
            };

}

export default BuildControls;