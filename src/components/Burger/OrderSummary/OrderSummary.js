import React from 'react'
import Button from '../../UI/Button/Button';

function OrderSummary(props) {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>
                        {igKey}
                    </span>: {props.ingredients[igKey]}
                    </li>
        })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            <Button btnType="danger" clicked={props.purchasedCancelled}>CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    )
}

export default OrderSummary
