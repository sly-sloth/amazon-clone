import { renderCheckoutHeader } from "./checkout/checkout-header.js";
import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
// import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';

// loadProducts(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });


renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
