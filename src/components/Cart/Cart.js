import React, { Component, Fragment } from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {context => {
            const { cart } = context;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumns />
                  <CartList context={context} />
                  <CartTotals context={context} history={this.props.history} />
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
