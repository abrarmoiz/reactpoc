import React, {Component} from 'react';
import classes from './BuildControl.css'

class BuildControl extends Component{
render(){

    console.log("label",this.props.label);
 return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{this.props.label}</div>
        <button onClick={this.props.ingredientRemoved} className={classes.Less}>LESS</button>
        <button onClick={this.props.ingredientAdded} className={classes.More}> MORE</button>
    </div>

 );

}


}


export default BuildControl;