import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const CartTotals = ({ context, history }) => {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = context;

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">Subtotal: </span>
              <strong>${cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax: </span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total: </span>
              <strong>${cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotals;
