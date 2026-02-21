export const selectors = {
  // Header/Navigation
  HEADER: 'header',
  LOGO: '[data-testid="logo"]',
  NAV_MENU: '[data-testid="nav-menu"]',
  USER_DROPDOWN: '[data-testid="user-dropdown"]',
  LOGOUT_BUTTON: '[data-testid="logout-btn"]',

  // Login page
  LOGIN_USERNAME_INPUT: '[data-testid="username-input"]',
  LOGIN_PASSWORD_INPUT: '[data-testid="password-input"]',
  LOGIN_SUBMIT_BUTTON: '[data-testid="login-btn"]',

  // Products page
  PRODUCT_LIST: '[data-testid="product-list"]',
  PRODUCT_ITEM: '[data-testid="product-item"]',
  ADD_TO_CART_BUTTON: '[data-testid="add-to-cart-btn"]',

  // Cart page
  CART_ITEMS: '[data-testid="cart-items"]',
  CART_TOTAL: '[data-testid="cart-total"]',
  CHECKOUT_BUTTON: '[data-testid="checkout-btn"]',

  // Checkout page
  SHIPPING_FORM: '[data-testid="shipping-form"]',
  PAYMENT_FORM: '[data-testid="payment-form"]',
  PLACE_ORDER_BUTTON: '[data-testid="place-order-btn"]',

  // Generic
  MESSAGE: '[data-testid="message"]',
  ERROR: '[data-testid="error"]',
  LOADING: '[data-testid="loading"]'
};
