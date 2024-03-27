import React, { Fragment, useEffect, useState } from 'react'
import "./PaymentMethod.css"
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { createOrder } from '../../actions/orderActions';
import { clearErrors } from '../../actions/productActions';

function PaymentMethod() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const alert = useAlert()

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { error } = useSelector((state) => state.newOrder);

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,
    }

    const submitHandler = () => {
        if (value === "cash") {
            try {
                order.paymentInfo = {
                    id: "cashOnDelivery",
                    status: "remaining",
                };

                dispatch(createOrder(order));
                localStorage.removeItem('cartItems');
                window.location.href = "/success"
            } catch (error) {
                alert.error(error.response?.data.message);
            }
        }
        if (value === "card") {
            window.location.href = "/process/payment"
        }
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            <CheckoutSteps activeStep={2} />
            <div className='PaymentMethodContainer'>
                <h2>Select Payment Method</h2>
                <div className='methods'>
                    <div>
                        <input type="radio" name="method" id='cash' value="cash" onClickCapture={() => (setValue("cash"))} />
                        <label htmlFor="cash">Cash on Delivery/Pay on Delivery</label>
                    </div>
                    <div>
                        <input type="radio" name="method" id='card' value="card" onClickCapture={() => (setValue("card"))} />
                        <label htmlFor="card">Credit or Debit Card</label>
                    </div>
                </div>
                <button onClick={() => submitHandler()}>
                    Next
                </button>
            </div>
        </Fragment>
    )
}

export default PaymentMethod
