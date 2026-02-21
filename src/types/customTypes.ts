export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  sku: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentMethod {
  type: string;
  cardNumber?: string;
  exMonth?: string;
  exYear?: string;
  cvv?: string;
}

export interface Order {
  id: string;
  userId: number;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  total: number;
  status: string;
}
