import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;