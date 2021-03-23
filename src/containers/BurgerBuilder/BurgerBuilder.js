import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 20,
    meat: 40,
    bacon: 30
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 40,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.values(ingredients)
        .reduce((sum, el) => {
            return sum + el;
        },0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const udpateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = udpateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =  oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        console.log('Continue');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchasedCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                 ingreddientAdded={this.addIngredientHandler}
                 ingreddientRemoved={this.removeIngredientHandler}
                 disabled={disabledInfo}
                 price={this.state.totalPrice}
                 ordered={this.purchaseHandler}
                 purchasable={this.state.purchasable}/>
            </div>
        );
    }
}

export default BurgerBuilder;